#include "IPA_Loader.h"
#include "Binary_Tree_Maker.h"

int main(){
    //loads data and inserts it into a new tre
    IPA_Loader load;
    vector<IPA> ipas = load.load_file("data/geolite2-city-ipv4.csv");
    Binary_Tree_Maker new_tree;
    new_tree.tree_builder(ipas);
}