// Returns [incidentTable, incidentTable'] <-- itself and its transpose
function findIncedentTable(g) {
    let incidentTable = Array.from({ length: g.nodes.length }, () => Array(g.edges.length).fill(0));
    let rotatedIncidentTable = Array.from({ length: g.edges.length }, () => Array(g.nodes.length).fill(0));

    for (let i = 0; i < g.nodes.length; i++) {
        for (let j = 0; j < g.edges.length; j++) {
            if (g.edges[j].endpoints.includes(g.nodes[i])) {
                incidentTable[i][j] = 1;
                rotatedIncidentTable[j][i] = 1;
            }
        }
    }

    return [incidentTable, rotatedIncidentTable];
}

// Returns incidentTable * incidentTable' <-- itself * its transpose
function findIncedentTablesMultiplied(incidentTable, rotatedIncidentTable) {
    let result = Array.from({ length: g.nodes.length }, () => Array(g.nodes.length).fill(0));

    for (let i = 0; i < g.nodes.length; i++) {
        for (let j = 0; j < g.edges.length; j++) {
            for (let k = 0; k < g.edges.length; k++) {
                result[i][j] += incidentTable[i][k] * rotatedIncidentTable[k][j];
            }
        }
    }

    return result;
}

// Returns the degree table of g (size nodes.length by nodes.length)
function findDegreeTable(g) {
    let [incidentTable, rotatedIncidentTable] = findIncedentTable(g);
    let multipliedTable = findIncedentTablesMultiplied(incidentTable, rotatedIncidentTable);

    let result = Array.from({ length: g.nodes.length }, () => Array(g.nodes.length).fill(0));

    for (let i = 0; i < g.nodes.length; i++) {
        result[i][i] = multipliedTable[i][i];
    }

    return result;
}

// Returns the adjacency table of g (size nodes.length by nodes.length)
function findAdjTable(g) {
    let [incidentTable, rotatedIncidentTable] = findIncedentTable(g);
    let multipliedTable = findIncedentTablesMultiplied(incidentTable, rotatedIncidentTable);

    for (let i = 0; i < g.nodes.length; i++) {
        multipliedTable[i][i] = 0;
    }

    return result;
}