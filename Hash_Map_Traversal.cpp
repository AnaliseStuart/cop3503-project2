#include "Hash_Map_Traversal.h"

//hash map constructor
Hash::Hash(int s):size(s), map(s){}

//assigns the hash value to a given ipa
int Hash::assign_hash(string key){
    int hash_value = 0;
    for (int i=0; i<key.length(); i++){hash_value = (hash_value*31+key[i])%size;}
    return hash_value;
}

//inserts a new key and value
void Hash::insert(string key, Structs value){
    int i = assign_hash(key);
    vector<pair<string, Structs>> &container = map[i];
    for (pair<string, Structs> &element:container){
        if (element.first == key){
            element.second = value;
            return;
        }
    }
    container.push_back({key, value});
}

//finds how many ipas are in a specific country
Progress Hash::hash_country_traversal(const string& country){
    Progress p;
    //traversal code
    return p;
}