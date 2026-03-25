#pragma once
#include <string>
#include "Country_Info.h"
using namespace std;

struct Node{
    Node* child[11];
    bool last_node;
    Country_Info data;
    Node();
};

class Trie_Traversal{
private:
    Node* root;
public:
    Trie_Traversal();
    Progress trie_country_traversal(const string& country);
    void recursive_traversal(Node* starting_node, const string& country, Progress& p);
    void insert(string key, Country_Info value);
    int getIndex(char value);
};

