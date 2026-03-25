#include "IPA_Loader.h"
#include <sstream>
#include <fstream>

//checks if the file is open, loads the file, and extracts the necessary information
vector<IPA> IPA_Loader::load_file(string f){
    vector<IPA> ipas;
    ifstream file(f);
    if(!file.is_open()){return ipas;}
    string line;
    while (getline(file, line)){
        IPA ipa;
        string skip;
        stringstream line_separator(line);
        getline(line_separator, ipa.ip, ',');
        getline(line_separator, skip, ',');
        getline(line_separator, ipa.country);
        ipas.push_back(ipa);
    }
    return ipas;
}