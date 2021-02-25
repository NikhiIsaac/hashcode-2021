const input = require("./input.js");

// console.log(input);

const intersections = new Array(input.I);

for (const streetName in input.streets) {
    if (Object.hasOwnProperty.call(input.streets, streetName)) {
        const street = input.streets[streetName];
        if (intersections[street.B]) {
            intersections[street.B].start.push(street.name)
        } else {
            intersections[street.B] = {
                start: [street.name]
            }
        }
        if (intersections[street.E]) {
            intersections[street.E].end.push(street.name)
        } else {
            intersections[street.E] = {
                end: [street.name]
            }
        }
        // intersections[street.E].end.push(street.name)
    }
}

// for (const street of input.streets) {
// }

console.log(intersections);