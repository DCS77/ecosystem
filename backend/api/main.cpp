#include "crow.h"

int main() {
    crow::SimpleApp app;

    CROW_ROUTE(app, "/")([](){ return "Hello world"; });
    CROW_ROUTE(app, "/connected")([](){ return true; });

    app.port(18080).multithreaded().run();
}
