#include "market_data.h"

void MarketData::registerRoutes(crow::App<crow::CORSHandler>& app) {
  CROW_ROUTE(app, "/plugin/marketdata/info")
  ([this]() {
    crow::json::wvalue response;
    response["name"] = getName();
    response["version"] = getVersion();
    response["uptime"] = getUptime();
    return response;
  });
}

int MarketData::getUptime() const {
  auto now = std::chrono::steady_clock::now();
  return std::chrono::duration_cast<std::chrono::seconds>(now - startTime_)
      .count();
}
