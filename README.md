# Ecosystem of Trading System Tools

_An ecosystem of trading system tools built using C++23, CrowCpp, vcpkg, gtest and Docker for the backend, as well as React with TypeScript and Vite for the frontend._

![Ecosystem UI](assets/Ecosystem%20UI.png "Ecosystem UI")

## Backend

### Requirements

- Docker

### Building and Running

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

## Frontend

### Building and Running

1. Go to the frontend project folder.

```bash
cd frontend
```

2. Set the Node.js version to 20 or greater.

```bash
nvm use 20
```

3. Install and run

```bash
npm install
npm run dev
```

## Future Work

- Generate simulated market data and save to a database.
- Load and display latest market data.
- Display live market data within the MarketData widgets.
