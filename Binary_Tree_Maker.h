#pragma once
#include <vector>
#include <queue>
#include "IPA_Loader.h"
using namespace std;

class Binary_Tree_Maker{
public:
    //contains the information for one individual node in the tree
    struct TreeNode{
        IPA data;
        TreeNode *left;
        TreeNode *right;
        TreeNode(IPA ipas):data(ipas), left(nullptr), right(nullptr){}
    };
    //builds the binary tree using level order insertion
    void tree_builder(vector<IPA> ipas);
    //constructs an empty tree
    Binary_Tree_Maker();
    //returns the root
    TreeNode* getRoot();
    //searches for the entered IPA through a depth first traversal
    TreeNode* depthFirstSearch(TreeNode* current_node, IPA data);
    //searches for the entered IPA through a breadth first traversal
    TreeNode* breadthFirstSearch(TreeNode* current_node, IPA data);

private:
    //pointer to a TreeNode
    TreeNode* n;
};