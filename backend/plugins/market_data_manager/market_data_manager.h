#include "plugins/plugin.h"

#include "crow.h"
#include "crow/middlewares/cors.h"

constexpr auto PLUGIN_NAME = "MarketDataManager";
constexpr auto PLUGIN_VERSION = "0.1";

class MarketDataManager : public IPlugin {
 public:
  MarketDataManager() : startTime_(std::chrono::steady_clock::now()) {}

  std::string getName() const override { return PLUGIN_NAME; }
  std::string getVersion() const override { return PLUGIN_VERSION; }

  void registerRoutes(crow::App<crow::CORSHandler>& app) override;

 private:
  int getUptime() const;

  std::chrono::steady_clock::time_point startTime_;
};

extern "C" IPlugin* createPlugin() { return new MarketDataManager(); }
