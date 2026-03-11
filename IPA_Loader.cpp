#include "IPA_Loader.h"
#include <sstream>
#include <fstream>

//checks if the file is open, loads the file, and extracts the necessary information
vector<IPA> IPA_Loader::load_file(string f){
    vector<IPA> ipas;
    ifstream file(f);
    if(!file.is_open()){return ipas;}
    string line;
    getline(file, line);
    while (getline(file, line)){
        IPA ipa;
        string end;
        string asn;
        string org;
        stringstream line_seperator(line);
        getline(line_seperator, ipa.ip, ',');
        getline(line_seperator, end, ',');
        getline(line_seperator, asn, ',');
        getline(line_seperator, org, ',');
        ipa.asn = stoi(asn);
        ipas.push_back(ipa);
    }
    return ipas;
}