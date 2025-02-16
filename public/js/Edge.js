class Edge {
    constructor(name, end1, end2) {
        this.name = name;
        this.endpoints = [end1, end2];
        this.coordinates = [
            [0, 0],
            [0, 0]
        ]; // The start and end points of where this will be displayed
    }
}