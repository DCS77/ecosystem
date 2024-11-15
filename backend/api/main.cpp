#include "core/process_manager/process_manager.h"

#include "crow.h"
#include "crow/middlewares/cors.h"

int main() {
  crow::App<crow::CORSHandler> app;

  auto& cors = app.get_middleware<crow::CORSHandler>();

  cors.global()
      .origin("*")
      .allow_credentials()
      .headers("Accept", "Origin", "Content-Type", "Authorization", "Refresh")
      .methods(crow::HTTPMethod::GET, crow::HTTPMethod::POST,
               crow::HTTPMethod::OPTIONS, crow::HTTPMethod::HEAD,
               crow::HTTPMethod::PUT, crow::HTTPMethod::DELETE);

  CROW_ROUTE(app, "/")([]() { return "Hello world"; });

  CROW_ROUTE(app, "/connection") ([]() {
    crow::response res;
    res.set_header("Content-Type", "application/json");
    res.write(R"({"online": true})");
    return res;
  });

  ProcessManager manager("plugins", app);
  manager.loadPlugins();

  app.port(18080).multithreaded().run();
}
