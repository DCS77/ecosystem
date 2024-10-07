cmake_minimum_required(VERSION 3.25)
project(ecosystem LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED True)

set(CMAKE_TOOLCHAIN_FILE "${CMAKE_SOURCE_DIR}/vcpkg/scripts/buildsystems/vcpkg.cmake")

add_executable(ecosystem src/main.cpp)
add_executable(test_all src/test.cpp)
add_executable(api src/backend/api/main.cpp)

find_package(GTest REQUIRED)
find_package(Crow REQUIRED)

target_link_libraries(api PUBLIC Crow::Crow)
target_link_libraries(test_all PRIVATE GTest::gtest_main)

enable_testing()
add_test(NAME test_all COMMAND test_all)
