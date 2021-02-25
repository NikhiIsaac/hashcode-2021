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

let cars = [];
for(let i = 0; i < input.V; i++) {
    cars[i] = {
        path: input.cp[i],
        time: input.cp[i].map(name => input.streets[name].L)
    }
}

let liveStreet = {}
cars.forEach((car, i) => {
    if(liveStreet[car.path[0]]) {
        liveStreet[car.path[0]].push(i)
    } else {
        liveStreet[car.path[0]] = [i]
    }
})

// console.log(liveStreet, intersections);
module.exports = { intersections, cars, liveStreet, ...input }