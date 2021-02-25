const solution = require("./simulate1.js");
const fs = require("fs")
const filepath = "./solution/a.txt";

const intersections = Object.keys(solution).filter((key) => {
    return JSON.stringify(solution[key]) != '{}'
})

const lines = []


lines.push(intersections.length)

intersections.forEach(i => {
    lines.push(i)

    // number of end roads covered
    const roadsCovered = Object.keys(solution[i])
    // console.log(roadsCovered);
    lines.push(roadsCovered.length)
    for (let j = 0; j < roadsCovered.length; j++) {
        lines.push(`${roadsCovered[j]} ${solution[i][roadsCovered[j]]}`)
    }
})

fs.writeFileSync(filepath, lines.join("\n"))