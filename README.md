# Test Project with C++23, vcpkg, gtest, and Docker

## Requirements

- Docker installed

## Building and Running

1. Clone the project

```bash
git clone <repo-url>
cd project
```

1. Copy vcpkg into the project directory from your local machine.

2. Build and run the project using Docker

```bash
docker build -t ecosystem .
docker run --rm ecosystem
```

1. Run tests

```bash
docker run --rm ecosystem
```
