import { Edge } from "./Edge";

const nodeSize = 50; // px

export class Node {
    constructor(name) {
        this.name = name;
        this.size = nodeSize;
        this.edges = [];
    }
}