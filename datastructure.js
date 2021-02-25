const input = require("./input.js");

// intersections
let intersections = [];
for(let i = 0; i < input.I; i++) {
    intersections[i] = {
        start: [],
        end: []
    }
}
for (const streetname in input.streets) {
    const street = input.streets[streetname];
    intersections[street.B].start.push(street.name);
    intersections[street.E].end.push(street.name)
}

// let cars = input.cp.map(path => path.map(name => input.streets[name]));

// cars[0].path = [..........]
// cars[0].t

let cars = [];
for(let i = 0; i < input.V; i++) {
    cars[i] = {
        path: input.cp[i],
        time: input.cp[i].map(name => input.streets[name].L)
    }
}

module.exports = { intersections, cars }