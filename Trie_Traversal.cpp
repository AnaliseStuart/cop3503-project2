#include "Trie_Traversal.h"
#include <chrono>

//trie node constructor
Node::Node(){
    for (int i=0; i<11; i++){child[i] = nullptr;}
    last_node = false;
}

//creates a new root to build a trie
Trie_Traversal::Trie_Traversal(){root = new Node();}

void Trie_Traversal::insert(string key, Country_Info value){
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

//traverses all nodes and counts how many correspond to a given country
void Trie_Traversal::recursive_traversal(Node* starting_node, const string& country, Progress& p){
    if (starting_node == nullptr){return;}
    if (starting_node->last_node){
        p.node_progress += 1;
        if (starting_node->data.country == country){p.num_matches += 1;}
    }
    for (int i = 0; i <= 10; i++){recursive_traversal(starting_node->child[i], country, p);}
}

//calls traversal function and keeps track of time
Progress Trie_Traversal::trie_country_traversal(const string& country){
    auto start = std::chrono::high_resolution_clock::now();
    Progress p;
    Node* starting_node = root;
    recursive_traversal(starting_node, country, p);
    auto stop = std::chrono::high_resolution_clock::now();
    auto duration = std::chrono::duration_cast<std::chrono::milliseconds>(stop - start);
    p.time = duration.count();
    return p;
}