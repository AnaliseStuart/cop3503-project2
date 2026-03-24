#pragma once
#include <string>
using namespace std;

struct Country_Info{string country;};

struct Progress{
    int node_progress = 0;
    int num_matches = 0;
    double time = 0.0;
};