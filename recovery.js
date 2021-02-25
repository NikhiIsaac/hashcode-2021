const fs = require("fs")

const filepath = "./cases/a.txt";

const data = fs.readFileSync(filepath, "utf-8");

const lines = data.split("\n");

// Duration of simulation
// Number of intersections
// Number of streets
// V: Number of cars
// Score for each car
const [D, I, S, V, F] = lines[0].split(" ").map(Number)

const streets = {}

// Next S lines contain descriptions of streets
lines.slice(1, 1+S).forEach((street, i) => {

    // [start_intersection, end_intersection, street_name, pass_time]
    const [B, E, name, L] = street.split(" ")

    streets[name] = {
        B: Number(B),
        E: Number(E),
        L: Number(L),
        name: name
    }
})

// Car's Path
// [number_of_streets, name...]
const cp = lines.slice(1+S, 1+S+V).map(e => e.split(" ").slice(1).map(s => streets[s]))

console.log(streets, cp);