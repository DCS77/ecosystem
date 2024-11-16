#pragma once

#include <string>
#include <vector>

#include "instrument.h"

namespace INS {
const std::vector<INS::Instrument> INSTRUMENTS = {
    // Interest Rate Derivatives
    {"3Y", "3 Year Treasury Bond Futures", "ASX", "Derivatives", 0.01, 30.0},
    {"10Y", "10 Year Treasury Bond Futures", "ASX", "Derivatives", 0.01, 25.0},
    {"90D", "90 Day Bank Accepted Bond Futures", "ASX", "Derivatives", 0.005,
     12.5},

    // Equity Index Futures
    {"SP500", "S&P 500 E-mini Futures", "CME", "Equity Futures", 0.25, 12.5},
    {"NDX", "Nasdaq-100 E-mini Futures", "CME", "Equity Futures", 0.25, 5.0},
    {"DJIA", "Dow Jones E-mini Futures", "CME", "Equity Futures", 1.0, 5.0},

    // Commodity Futures
    {"GC", "Gold Futures", "CME", "Commodity Futures", 0.1, 10.0},
    {"SI", "Silver Futures", "CME", "Commodity Futures", 0.005, 25.0},
    {"CL", "Crude Oil Futures", "NYMEX", "Commodity Futures", 0.01, 10.0},
    {"NG", "Natural Gas Futures", "NYMEX", "Commodity Futures", 0.001, 10.0},

    // Agriculture Futures
    {"CORN", "Corn Futures", "CBOT", "Commodity Futures", 0.25, 12.5},
    {"WHEAT", "Wheat Futures", "CBOT", "Commodity Futures", 0.25, 12.5},
    {"SOY", "Soybean Futures", "CBOT", "Commodity Futures", 0.25, 12.5},

    // Cryptocurrency Futures
    {"BTC", "Bitcoin Futures", "CME", "Cryptocurrency Futures", 5.0, 25.0},
    {"ETH", "Ethereum Futures", "CME", "Cryptocurrency Futures", 0.1, 50.0},

    // Forex Spot
    {"EURUSD", "Euro to US Dollar", "Forex", "Spot Forex", 0.0001, 10.0},
    {"USDJPY", "US Dollar to Japanese Yen", "Forex", "Spot Forex", 0.01, 10.0},
    {"GBPUSD", "British Pound to US Dollar", "Forex", "Spot Forex", 0.0001,
     10.0},

    // Options on Futures
    {"3YO", "Options on 3 Year Treasury Bond Futures", "ASX",
     "Options on Futures", 0.005, 15.0},
    {"10YO", "Options on 10 Year Treasury Bond Futures", "ASX",
     "Options on Futures", 0.005, 15.0},

    // Metals Spot
    {"XAUUSD", "Gold Spot", "Forex", "Spot Metal", 0.01, 10.0},
    {"XAGUSD", "Silver Spot", "Forex", "Spot Metal", 0.001, 50.0}};
}
