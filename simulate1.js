const { liveStreet, cars, streets, intersections, D } = datas = require("./datastructure.js");

// let solution = {
//     idOfIntersection1: {
//         streetName1: t1,
//         streetname2: t2
//     },
//     idOfIntersection2: {
//         streetName1: t1,
//         streetname2: t2
//     }
// }

let solution = {};

let time = 0;
for (let time = 0; time < D; time++) {
    datas.intersections.forEach((intersection, id) => {

        solution[id] = {};

        let endstreetnames = intersection.end;
        let bestRoad = getHighTrafficStreet(endstreetnames);
        if (bestRoad) {
            // green signal to this road
            if (solution[id][bestRoad] == undefined) {
                solution[id][bestRoad] = 1;
            } else {
                solution[id][bestRoad]++
            }
        }

    })
}
// console.log(solution);

module.exports = solution;

function getHighTrafficStreet(endstreetnames) {
    let maxCars = 0;
    let road = false;
    for (let i = 0; i < endstreetnames.length; i++) {
        let cars = Object.keys(streets[endstreetnames[i]]).length;
        // console.log(cars)
        if (cars > maxCars) {
            maxCars = cars;
            road = endstreetnames[i]
            
        }
    }

    // console.log(road);
    if (road) {
        // cars[j].shift();
        // liveStreet[road].shift();
        // liveStreet[cars[j][0]] = j;
        try {
            let carI = liveStreet[road][0];
            liveStreet[road].shift();
            // console.log(cars)
            cars[carI].path.shift();
            liveStreet[cars[carI][0]] = carI;
        } catch (error) {
            
        }
    }
    return road;
}