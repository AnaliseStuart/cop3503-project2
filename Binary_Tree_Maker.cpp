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

Binary_Tree_Maker::TreeNode *Binary_Tree_Maker::depthFirstSearch(TreeNode *current_node, IPA data) {
    if (current_node == NULL) {
        return current_node;
    }
    if (current_node->data == data) {
        return current_node;
    }
    TreeNode *left = depthFirstSearch(current_node->left, data);
    if (left != NULL) {
        return left;
    }
    TreeNode *right = depthFirstSearch(current_node->right, data);
    return right;
}

Binary_Tree_Maker::TreeNode *Binary_Tree_Maker::breadthFirstSearch(TreeNode *current_node, IPA data) {
    queue <TreeNode*> q;
    q.push(current_node);
    while (!q.empty()) {
        int length = q.size();
        for (int i = 0; i < length; i++) {
            TreeNode *node = q.front();
            if (q.front()->data == data) {
                return node;
            }
            q.pop();
            if (node->left != NULL) {
                q.push(node->left);
            }
            if (node->right != NULL) {
                q.push(node->right);
            }
        }
    }
}

//constructs an empty tree
Binary_Tree_Maker::Binary_Tree_Maker(){n = nullptr;}

//returns the root
Binary_Tree_Maker::TreeNode *Binary_Tree_Maker::getRoot(){return n;}