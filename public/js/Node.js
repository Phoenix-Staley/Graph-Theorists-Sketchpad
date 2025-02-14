import { Edge } from "./Edge";

const nodeSize = 50; // px

export class Node {
    constructor(name) {
        this.name = name;
        this.size = nodeSize;
        this.edges = [];
    }

    getNeighbors() {
        let neighbors = [];

        for (let i = 0; i < this.edges.length; i++) {
            const endpoints = edges[i].endpoints;
            if (endpoints[0].name != this.name) {
                neighbors.push(endpoints[0]);
            } else {
                neighbors.push(endpoints[1]);
            }
        }

        return neighbors;
    }
}