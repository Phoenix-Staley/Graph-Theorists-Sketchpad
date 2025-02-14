import { Node } from "./Node";
import { Edge } from "./Edge";

const defaultWidth = 250; // px
const defaultHeight = 250; // px
const maxNodes = 64;

export class Graph {
    constructor() {
        this.nodes = [];
        this.edges = [];
        this.width = defaultWidth;
        this.height = defaultHeight;
    }
}