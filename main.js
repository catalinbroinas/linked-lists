// Create a linked list
function LinkedList() {
    // Define an empty list
    const list = {
        head: null
    };

    // Get the entire list
    const getList = () => list;

    // Check if the list is empty
    const empty = () => (list.head === null) ? true : false;

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
        const newNode = CreateNode(value);

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

    // Prepend a new node at the beginning of the list
    const prepend = (value) => {
        const newNode = CreateNode(value, list.head);
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

    const at = (index) => {
        // Check if the list is empty
        if (list.head === null) {
            return null;
        }

        // Check if index is invalid
        if (!Number.isInteger(index) || index < 0) {
            return 'Invalid index';
        }

        let current = list.head;
        let currentIndex = 0;

        while (current !== null) {
            if (currentIndex === index) {
                return current.value;
            }

            current = current.nextNode;
            currentIndex += 1;
        }

        return 'Invalid index';
    };

    // Removes the last element from the list
    const pop = () => {
        if (empty()) {
            return 'Empty list!';
        }

        // Check if there is only one element in the list
        if (list.head.nextNode === null) {
            list.head = null;
            return;
        }

        // Traverse the list to find the second to last node
        let current = list.head;
        while (current.nextNode.nextNode !== null) {
            current = current.nextNode;
        }

        // Remove the last node
        current.nextNode = null;
    };

    return {
        getList,
        toArray,
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop
    };
}

// Create a node
function CreateNode(value = null, nextNode = null) {
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

// Get the node by index
const index = 2;
console.log(myList.at(index));

// Remove the last node and print list
myList.pop();
console.log(myList.toArray());