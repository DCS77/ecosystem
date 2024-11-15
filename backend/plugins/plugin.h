#pragma once

#include "crow.h"
#include "crow/middlewares/cors.h"

#include <string>

class IPlugin {
 public:
  virtual ~IPlugin() = default;

  virtual std::string getName() const = 0;
  virtual std::string getVersion() const = 0;

  virtual void registerRoutes(crow::App<crow::CORSHandler>& app) = 0;
};

extern "C" IPlugin* createPlugin();
