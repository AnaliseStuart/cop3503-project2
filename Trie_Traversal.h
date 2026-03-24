#pragma once
#include <string>
#include "Structs.h"
using namespace std;

struct Node{
    Node* child[11];
    bool last_node;
    Structs data;
    Node();
};

class Trie_Traversal{
private:
    Node* root;
public:
    Trie_Traversal();
    Progress trie_country_traversal(const string& country);
    void insert(string key, Structs value);
    int getIndex(char value);
};

