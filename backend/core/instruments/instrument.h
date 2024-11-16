#pragma once

#include <string>

namespace INS {
struct Instrument {
  std::string id_;
  std::string name_;
  std::string exchange_;
  std::string type_;
  double tickSize_;
  double tickValue_;

  crow::json::wvalue toJson() const {
    crow::json::wvalue jsonObj;
    jsonObj["id"] = id_;
    jsonObj["name"] = name_;
    jsonObj["exchange"] = exchange_;
    jsonObj["type"] = type_;
    jsonObj["tickSize"] = tickSize_;
    jsonObj["tickValue"] = tickValue_;
    return jsonObj;
  }
};
}  // namespace INS