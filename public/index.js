let g = new Graph();

let prevNodes = [];

let graphParts = [];

for (let i = 0; i < 5; i++) {
    let newNode = g.addNode();
    graphParts.push(newNode);
    if (prevNodes.length < 2) {
        prevNodes.push(newNode);
    } else {
        let newEdge = null;
        newEdge = g.addEdge(prevNodes[0].name, prevNodes[1].name);
        graphParts.push(newEdge);

        prevNodes[0] = prevNodes[1];
        prevNodes[1] = newNode;
    }
}

console.log(findDegreeTable(g));