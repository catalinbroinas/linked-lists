// Create a linked list
function LinkedList() {
    // Define an empty list
    const list = {
        head: null
    };

    // Get the entire list
    const getList = () => list;

    // Append a new node at the end of the list
    const append = (value) => {
        const newNode = Node(value);
        if (list.head === null) {
            list.head = newNode;
        } else {
            let current = list.head;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    };

    const prepend = (value) => {
        const newNode = Node(value, list.head);
        list.head = newNode;
    };

    return {
        getList,
        append,
        prepend
    };
}

// Create a node
function Node(value = null, nextNode = null) {
    return {
        value,
        nextNode
    };
}

const list = LinkedList();
list.append('Dog');
list.append('Cat');
list.append('Duck');
list.prepend('Chicken');
list.prepend('Horse');
console.log(list.getList());