const {liveStreet, streets, intersections, D} = datas = require("./datastructure.js");

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

        let endstreetnames = intersection.end
        for (let i = 0; i < endstreetnames.length; i++) {
            const carsCount = liveStreet[endstreetnames[i]]?.length || 0
            if(carsCount) {
                // green signal to this car
                // console.log(solution[id][endstreetnames[i]]);
                if(solution[id][endstreetnames[i]] == undefined) {
                    solution[id][endstreetnames[i]] = 1;
                } else {
                    solution[id][endstreetnames[i]]++
                }
                break;
            }
        }
    });
}

console.log(solution);

module.exports = solution;