#pragma once
#include <string>
#include <vector>
using namespace std;

//struct containing the information of each individual IPA
struct IPA{
    string ip;
    int asn;
};

//checks if the file is open, loads the file, and extracts the necessary information
class IPA_Loader{
public:
    vector<IPA> load_file(string f);
};