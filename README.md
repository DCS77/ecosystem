# Plugin Ecosystem

_Infrastructure for an ecosystem of plugins set up using C++23, vcpkg, gtest, and Docker._

## Requirements

- Docker

## Building and Running

1. Clone the project

   ```bash
   git clone <repo-url>
   cd ecosystem
   ```

2. Clone vcpkg into the project directory.

   ```bash
   git clone https://github.com/microsoft/vcpkg.git
   ```

3. Build and run the project using Docker

   ```bash
   docker-compose build
   docker-compose run test_api
   docker-compose run -p 18080:18080 api
   ```

## Future Work

- Frontend application which interacts with backend through API.
- Interfaces for UI plugins (frontend) and logic plugins (backend).
- Specific implementations of these plugins to handle a task.
