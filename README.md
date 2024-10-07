# Test Project with C++23, vcpkg, gtest, and Docker

## Requirements

- Docker installed

## Building and Running

1. Clone the project

```bash
git clone <repo-url>
cd project
```

2. Copy vcpkg into the project directory from your local machine.

3. Build and run the project using Docker

```bash
docker-compose build ecosystem
docker-compose run ecosystem
docker-compose run api
docker-compose run test
```
