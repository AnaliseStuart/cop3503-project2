#pragma once
#include <string>
#include <vector>
#include "Country_Info.h"
using namespace std;

class Hash{
private:
    int size;
    vector<vector<pair<string, Country_Info>>> map;
    int assign_hash(string key);
public:
    Hash(int s = 500000);
    Progress hash_country_traversal(const string& country);
    void insert(string key, Country_Info value);
};
