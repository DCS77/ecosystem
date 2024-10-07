cmake_minimum_required(VERSION 3.25)
project(ecosystem LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED True)

# Use vcpkg toolchain
set(CMAKE_TOOLCHAIN_FILE "${CMAKE_SOURCE_DIR}/vcpkg/scripts/buildsystems/vcpkg.cmake")

# Add source files
add_executable(ecosystem src/main.cpp)
add_executable(test_all src/test.cpp)

find_package(GTest REQUIRED)
target_link_libraries(test_all PRIVATE GTest::gtest_main)

enable_testing()
add_test(NAME test_project_test COMMAND test_all)
