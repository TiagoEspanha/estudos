/* 
Porque lista encadeada?
    - Lista encadeada permite armazenar dados em posições não seguidas na memoria, utilizando ponteiros para apontar para o proximo valor
    - Por exemplo, podemos ter no começo de uma lista encadeada o valor 2, na posição de memoria x. Em x+1, teremos o valor do
    endereço do próximo valor, que pode ser qualquer um.
    - Ao final da lista, apontamos o valor do próximo para null
*/

class Node {
    int value;
    Node* next;

    Node(int value) {
        this->value = value;
        this->next = nullptr;
    }
}

class SimpleLinkedList {
    Node head;

    SimpleLinkedList(){
        this.head = NULL;
    }

    SimpleLinkedList(int value){
        this.head = new Node(value);
    }

    // Time O(n) space O
    Node findAtIndex(){

    }
    //  Time O(n) space 0
    void SetAtIndex(){

    }
}

int main(int argc, char *argv[]) {
    
}