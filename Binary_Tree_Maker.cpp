#include "Binary_Tree_Maker.h"

//builds the binary tree using level order insertion
void Binary_Tree_Maker::tree_builder(vector<IPA> ipas){
    if (ipas.empty()){return;}
    n = new TreeNode(ipas[0]);
    queue<TreeNode*> q;
    q.push(n);
    int i = 1;
    while (i < ipas.size()){
        TreeNode *current = q.front();
        q.pop();
        if (i < ipas.size()){
            current->left = new TreeNode(ipas[i++]);
            q.push(current->left);
        }
        if (i < ipas.size()){
            current->right = new TreeNode(ipas[i++]);
            q.push(current->right);
        }
    }
}

//constructs an empty tree
Binary_Tree_Maker::Binary_Tree_Maker(){n = nullptr;}

//returns the root
Binary_Tree_Maker::TreeNode *Binary_Tree_Maker::getRoot(){return n;}