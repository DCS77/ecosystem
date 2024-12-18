FROM arm64v8/ubuntu:22.04

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    ninja-build \
    pkg-config \
    curl \
    git \
    zip \
    unzip \
    tar \
    libc6 \
    && rm -rf /var/lib/apt/lists/*

RUN curl -LO https://github.com/Kitware/CMake/releases/download/v3.26.4/cmake-3.26.4-linux-aarch64.sh && \
  chmod +x cmake-3.26.4-linux-aarch64.sh && \
  ./cmake-3.26.4-linux-aarch64.sh --skip-license --prefix=/usr/local && \
  rm cmake-3.26.4-linux-aarch64.sh

# Set environment variables
ENV VCPKG_ROOT=/opt/vcpkg
ENV PATH=${VCPKG_ROOT}:${PATH}
ENV VCPKG_FORCE_SYSTEM_BINARIES=1

WORKDIR /app

# Copy vcpkg from local directory into Docker
COPY vcpkg /opt/vcpkg
COPY vcpkg.json .

# Bootstrap vcpkg and install dependencies
RUN ${VCPKG_ROOT}/bootstrap-vcpkg.sh -disableMetrics
RUN ${VCPKG_ROOT}/vcpkg install --triplet arm64-linux

# Copy project files
ADD backend ./backend
COPY CMakeLists.txt .
COPY CMakePresets.json .

# Set up build directory
RUN cmake --preset=default -DCMAKE_MAKE_PROGRAM=/usr/bin/ninja
RUN cmake --build build

EXPOSE 18080
