cmake_minimum_required(VERSION 3.25)
project(ecosystem LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED True)
set(CMAKE_MAKE_PROGRAM "/usr/bin/ninja")
set(CMAKE_TOOLCHAIN_FILE "/opt/vcpkg/scripts/buildsystems/vcpkg.cmake")

# API
add_executable(api backend/api/main.cpp)
find_package(Crow REQUIRED)
target_link_libraries(api PUBLIC Crow::Crow)

# Test API
add_executable(test_api backend/api/test.cpp)
find_package(GTest REQUIRED)
target_link_libraries(test_api PRIVATE GTest::gtest_main)

enable_testing()
add_test(NAME test_api COMMAND test_api)
