#include "IPA_Loader.h"
#include "Hash_Map_Traversal.h"
#include "Trie_Traversal.h"

//sean says hi realin
int main(){
    //loads data and inserts it into a new tre
    IPA_Loader load;
    vector<IPA> ipas = load.load_file("data/geolite2-city-ipv4.csv");
    //inserts data into hash and trie
    Hash h;
    Trie_Traversal t;
    for (int i=0; i<ipas.size(); i++){
        Structs info;
        info.country = ipas[i].country;
        h.insert(ipas[i].ip, info);
        t.insert(ipas[i].ip, info);
    }

    return 0;
}