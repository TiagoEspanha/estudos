// Online C++ compiler to run C++ program online
#include <iostream>

/*
Porque lista encadeada?
    - Lista encadeada permite armazenar dados em posições não seguidas na memoria, utilizando ponteiros para apontar para o proximo valor
    - Por exemplo, podemos ter no começo de uma lista encadeada o valor 2, na posição de memoria x. Em x+1, teremos o valor do
    endereço do próximo valor, que pode ser qualquer um.
    - Ao final da lista, apontamos o valor do próximo para null

Lista encadeada simples
    - No com next
    - Head da lista (começo)

Lista duplamente encadeada 
    - Nós tem referencia pra nó anterior também

Lista encadeada circular
    - Tem tail (último item da lista)
    - Head aponta pra tail e tail aponta pra head
*/


class Node 
{
public:
    int value;
    Node* next;

    Node(int value) 
    {
        this->value = value;
        this->next = nullptr;
    }
    
    void print()
    {
        std::cout << "PRINTANDO O NODE: ";
        std::cout << this->value;
        std::cout << "\n";
    }
};


class SimpleLinkedList 
{
public:
    Node* head;

    SimpleLinkedList()
    {
        this->head = nullptr;
    }
    
    // Time space 0(n)
    SimpleLinkedList(int value)
    {
        this->head = new Node(value);
    }
    
    // Time O(n) space O
    Node* findAtIndex(int index)
    {
        Node *n = this->head;
        int currentIndex = 0;
        while(index != currentIndex){
            n = n->next;
            currentIndex += 1;
        }
        return n;
    }
    //  Time O(n) space 0
    void setAtIndex(int index, int value)
    {
        Node *n = this->findAtIndex(index);
        n->value = value;
    }
    
    void insertAtStart(int value)
    {
        Node *newNode = new Node(value);
        newNode->next = this->head;
        this->head = newNode;
    }
    
    void removeHead()
    {
        Node *nextNode = this->head->next;
        this->head = nextNode;
        //limpar da memoria o nodeToRemove
    }
    // time O(n) space 1
    void insert(int index, int value)
    {
        if(index == 0){
            this->insertAtStart(value);
        }
        else{
            Node *newNode = new Node(value);
            Node *previusNode = this->findAtIndex(index - 1);
            Node *currentNode = previusNode->next;
            previusNode->next = newNode;
            newNode->next = currentNode;
        }
    }
    
    // time o(n) space 0
    void remove(int index)
    {
        if(index == 0){
            this->removeHead();
        }
        else{
            Node *prevNode = this->findAtIndex(index - 1);
            Node *nodeToRemove = prevNode->next;
            Node *nextNode = nodeToRemove->next;
            prevNode->next = nextNode;
            //limpar da memoria o nodeToRemove
        }
        
    }
    
    void print()
    {
        std::cout << "COMEÇOU O PRINT \n";
        Node *n = this->head;
        while(n){
            std::cout << n->value;
            std::cout << "\n";
            n = n->next;
        }
        std::cout << "ACABOU O PRINT \n";
    }
};

int main() {
    SimpleLinkedList *l1 = new SimpleLinkedList(5);
    l1->print();
    
    l1->insertAtStart(0);
    l1->print();
    
    l1->insert(1, 1);
    l1->print();
    
    l1->insert(2, 3);
    l1->print();
    
    l1->insert(2, 2);
    l1->print();
    
    l1->setAtIndex(4, 4);
    l1->print();
    
    l1->remove(0);
    l1->print();
    
    l1->remove(1);
    l1->print();
    
    l1->remove(2);
    l1->print();
    
    Node *n1 = l1->findAtIndex(0);
    n1->print();
    std::cout << "Finalizando programa!";
    
    return 0;
}