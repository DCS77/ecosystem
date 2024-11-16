cmake_minimum_required(VERSION 3.25)
project(ecosystem LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED True)
set(CMAKE_MAKE_PROGRAM "/usr/bin/ninja")
set(CMAKE_TOOLCHAIN_FILE "/opt/vcpkg/scripts/buildsystems/vcpkg.cmake")

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/plugins)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)
set(CMAKE_SHARED_LIBRARY_SUFFIX ".so")

include_directories(backend)

# API
add_executable(
  api
  backend/api/main.cpp
  backend/core/process_manager/process_manager.cpp
)
find_package(Crow REQUIRED)
target_link_libraries(api PUBLIC Crow::Crow)

# Test API
add_executable(test_api backend/api/test.cpp)
find_package(GTest REQUIRED)
target_link_libraries(test_api PRIVATE GTest::gtest_main)

# Plugins
## MarketDataManager
add_library(market_data_manager SHARED backend/plugins/market_data_manager/market_data_manager.cpp)
target_include_directories(market_data_manager PRIVATE backend)
set_target_properties(market_data_manager PROPERTIES PREFIX "" OUTPUT_NAME "market_data_manager")
target_link_libraries(market_data_manager PUBLIC Crow::Crow)

## MarketData
add_library(market_data SHARED backend/plugins/market_data/market_data.cpp)
target_include_directories(market_data PRIVATE backend)
set_target_properties(market_data PROPERTIES PREFIX "" OUTPUT_NAME "market_data")
target_link_libraries(market_data PUBLIC Crow::Crow)

enable_testing()
add_test(NAME test_api COMMAND test_api)
