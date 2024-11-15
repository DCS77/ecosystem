#include "process_manager.h"

#include <dlfcn.h>
#include <iostream>

ProcessManager::ProcessManager(const std::string& pluginDir,
                               crow::App<crow::CORSHandler>& app)
    : pluginDir_(pluginDir), app_(app) {}

ProcessManager::~ProcessManager() {
  for (void* library : loadedLibraries_) {
    dlclose(library);
  }
  plugins_.clear();
}

void ProcessManager::loadPlugins() {
  for (const auto& entry : std::filesystem::directory_iterator(pluginDir_)) {
    if (entry.path().extension() != ".so") {
      continue;
    }

    auto plugin = loadPlugin(entry.path().string());
    if (plugin) {
      plugins_[plugin->getName()] = plugin;
      std::cout << "Loaded plugin: " << plugin->getName() << " v"
                << plugin->getVersion() << "\n";
    }
  }
}

std::shared_ptr<IPlugin> ProcessManager::loadPlugin(const std::string& dllPath) {
  void* handle = dlopen(dllPath.c_str(), RTLD_LAZY);
  if (!handle) {
    std::cerr << "Failed to load plugin: " << dllPath << "\n";
    return nullptr;
  }

  loadedLibraries_.push_back(handle);

  auto createPlugin = (IPlugin * (*)()) dlsym(handle, "createPlugin");
  if (!createPlugin) {
    std::cerr << "Failed to find createPlugin function in: " << dllPath << "\n";
    dlclose(handle);
    return nullptr;
  }

  auto plugin = std::shared_ptr<IPlugin>(createPlugin());
  plugin->registerRoutes(app_);
  
  return plugin;
}
