// Create a linked list
function LinkedList() {
    // Define an empty list
    const list = {
        head: null
    };

    // Get the entire list
    const getList = () => list;

    // Convert the linked list to an array for easy display
    const toArray = () => {
        const results = [];
        let current = list.head;

        while (current !== null) {
            results.push(current.value);
            current = current.nextNode;
        }

        return results;
    };

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

    // Get the total number of nodes in the list
    const size = () => {
        let current = list.head;
        let size = 0;

        while (current !== null) {
            size += 1;
            current = current.nextNode;
        }

        return size;
    };

    // Get the first node in the list
    const head = () => list.head ? list.head.value : null;

    // Get the last node in the list
    const tail = () => {
        let current = list.head;

        // Check if the list is empty
        if (current === null) {
            return null;
        }

        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        return current.value;
    };

    return {
        getList,
        toArray,
        append,
        prepend,
        size,
        head,
        tail
    };
}

// Create a node
function Node(value = null, nextNode = null) {
    return {
        value,
        nextNode
    };
}

// Instance of LinkedList
const myList = LinkedList();

// Adds to the ends of the list
myList.append('Dog');
myList.append('Cat');
myList.append('Duck');

// Adds to the start of the list
myList.prepend('Chicken');
myList.prepend('Horse');

// Print list
console.log(myList.getList());
console.log(myList.toArray());

// Prints the size of the list
const sizeMyList = myList.size();
console.log(`Size list is ${sizeMyList}`);

// Print the fist node of the list
const firstNode = myList.head();
console.log(`First node is ${firstNode}`);

// Print the last node of the list
const lastNode = myList.tail();
console.log(`Last node is ${lastNode}`);