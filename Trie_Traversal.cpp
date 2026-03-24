#include "Trie_Traversal.h"

//trie node constructor
Node::Node(){
    for (int i=0; i<11; i++){child[i] = nullptr;}
    last_node = false;
}

//creates a new root to build a trie
Trie_Traversal::Trie_Traversal(){root = new Node();}

void Trie_Traversal::insert(string key, Structs value){
    Node* current = root;
    for (int i=0; i<key.length(); i++){
        int ind = getIndex(key[i]);
        if (current->child[ind] == nullptr){current->child[ind] = new Node();}
        current = current->child[ind];
    }
    current->last_node = true;
    current->data = value;
}

//returns current index
int Trie_Traversal::getIndex(char c){if (c >= '0' && c <= '9'){return c - '0';}else{return 10;}}

//counts the number if ipas in a country
Progress Trie_Traversal::trie_country_traversal(const string& country){
    Progress p;
    //kian's code here
    return p;
}