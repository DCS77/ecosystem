#include "market_data_manager.h"

#include "core/instruments/instruments.h"

void MarketDataManager::registerRoutes(crow::App<crow::CORSHandler>& app) {
  CROW_ROUTE(app, "/plugin/marketdatamanager/info")
  ([this]() {
    crow::json::wvalue response;
    response["name"] = getName();
    response["version"] = getVersion();
    response["uptime"] = getUptime();
    return response;
  });

  CROW_ROUTE(app, "/plugin/marketdatamanager/instruments")
  ([this]() {
    crow::json::wvalue response;

    for (size_t i = 0; i < INS::INSTRUMENTS.size(); ++i) {
      response[i] = INS::INSTRUMENTS.at(i).toJson();
    }

    return response;
  });
}

int MarketDataManager::getUptime() const {
  auto now = std::chrono::steady_clock::now();
  return std::chrono::duration_cast<std::chrono::seconds>(now - startTime_)
      .count();
}
