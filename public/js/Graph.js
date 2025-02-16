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

    // Adds an edge between two nodes.
    // Input:
    //      The name of the 2 endpoint nodes
    // Output:
    //      The newly created edge.
    // Exceptions:
    //      If either of the given names do not correspond to a node in the graph,
    //          then null is returned instead.
    addEdge(end1Name, end2Name) {
        const newName = this.#findNextName(this.edges);
        let endNode1 = null;
        let endNode2 = null;

        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].name == end1Name) {
                endNode1 = this.nodes[i];
            }
            else if (this.nodes[i].name == end2Name) {
                endNode2 = this.nodes[i];
            }
        }

        let newEdge = null;

        if (endNode1 !== null || endNode2 !== null) {
            newEdge = new Edge(newName, endNode1, endNode2);
            endNode1.edges.push(newEdge);
            endNode2.edges.push(newEdge);

            this.edges.push(newEdge);
        }

        return newEdge;
    }
}