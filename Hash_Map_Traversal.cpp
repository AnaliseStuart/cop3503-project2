#include "Hash_Map_Traversal.h"
#include <chrono>

//hash map constructor
Hash::Hash(int s):size(s), map(s){}

//assigns the hash value to a given ipa
int Hash::assign_hash(string key){
    int hash_value = 0;
    for (int i=0; i<key.length(); i++){hash_value = (hash_value*31+key[i])%size;}
    return hash_value;
}

//inserts a new key and value
void Hash::insert(string key, Country_Info value){
    int i = assign_hash(key);
    vector<pair<string, Country_Info>> &container = map[i];
    for (pair<string, Country_Info> &element:container){
        if (element.first == key){
            element.second = value;
            return;
        }
    }
    container.push_back({key, value});
}

//finds how many ipas are in a specific country
Progress Hash::hash_country_traversal(const string& country){
    auto start = std::chrono::high_resolution_clock::now();
    Progress p;
    for (int i = 0; i < size; i++) {
        for (auto j: map[i]) {
            if (j.second.country == country) {
                p.num_matches += 1;
            }
            p.node_progress += 1;
        }
    }
    auto stop = std::chrono::high_resolution_clock::now();
    auto duration = std::chrono::duration_cast<std::chrono::milliseconds>(stop - start);
    p.time = duration.count();
    return p;
}