# Test Project with C++23, vcpkg, gtest, and Docker

## Requirements

- Docker installed

## Building and Running

1. Clone the project

```bash
git clone <repo-url>
cd project
```

1. Clone vcpkg into the project directory.

```
git clone https://github.com/microsoft/vcpkg.git
```

2. Build and run the project using Docker

```bash
docker-compose build
docker-compose run test_api
docker-compose run -p 18080:18080 api
```
