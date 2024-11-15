#pragma once

#include "plugins/plugin.h"
#include "crow.h"

#include <memory>
#include <string>
#include <unordered_map>
#include <vector>

class ProcessManager {
 public:
  ProcessManager(const std::string& plugin_dir,
                 crow::App<crow::CORSHandler>& app);
  ~ProcessManager();

  void loadPlugins();

 private:
  std::shared_ptr<IPlugin> loadPlugin(const std::string& dllPath);

  std::string pluginDir_;
  std::vector<void*> loadedLibraries_;
  crow::App<crow::CORSHandler>& app_;
  std::unordered_map<std::string, std::shared_ptr<IPlugin>> plugins_;
};
