// Create a linked list
function LinkedList() {
    // Define an empty list
    const list = {
        head: null
    };

    // Get the entire list
    const getList = () => list;

    return { getList }
}

// Create a node
function Node(value = null, nextNode = null) {
    return {
        value,
        nextNode
    };
}
