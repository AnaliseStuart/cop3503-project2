cmake_minimum_required(VERSION 4.1)
project(cop3503_project2)

set(CMAKE_CXX_STANDARD 20)

add_executable(cop3503_project2 main.cpp
        IPA_Loader.cpp
        IPA_Loader.h
        Hash_Map_Traversal.h
        Hash_Map_Traversal.cpp
        Trie_Traversal.cpp
        Trie_Traversal.h
        Structs.h
)
