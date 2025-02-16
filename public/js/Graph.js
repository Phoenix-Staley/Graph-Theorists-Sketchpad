const defaultWidth = 250; // px
const defaultHeight = 250; // px
const maxNodes = 64;

class Graph {
    constructor() {
        this.nodes = [];
        this.edges = [];
        this.width = defaultWidth;
        this.height = defaultHeight;
    }

    // The # of nodes is always small, under maxNodes, so this is O(1) time 
    // Find the next name for a node or edge
    // Input:
    //      arr - either the node or edge array of this graph
    // Output:
    //      A unique string that can be used as the next node/edge's name
    #findNextName(arr) {
        let prefix = "";
        if (arr === this.nodes) {
            prefix = "n";
        } else if (arr === this.edges) {
            prefix = "e";
        }

        let id = -1;
        let nextName = prefix + String(id);
        let isUnique;

        while (!isUnique) {
            id += 1;
            nextName = prefix + String(id);

            isUnique = true;

            for (let i = 0; i < arr.length; i++) {
                if (arr[i].name == nextName) {
                    isUnique = false;
                    break;
                }
            }
        }

        return nextName;
    }

    // Adds a new node blank node to the graph, with a unique name.
    addNode() {
        const newName = this.#findNextName(this.nodes);
        const newNode = new Node(newName);

        this.nodes.push(newNode);

        return newNode;
    }
}