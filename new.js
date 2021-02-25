const {liveStreet, streets, intersections, D, filepath} = datas = require("./datastructure.js");
const fs = require("fs")

// const filepath = "./solution/a.txt";
const lines = []

lines.push(intersections.length)

intersections.forEach(({start, end}, i) => {
    // console.log(int.end, i)
    lines.push(i)
    
    lines.push(end.length)

    for (let j = 0; j < end.length; j++) {
        lines.push(`${end[j]} 1`)
    }
})

fs.writeFileSync("./solution/"  + filepath, lines.join("\n"))