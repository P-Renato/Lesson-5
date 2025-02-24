import fs from "fs"

const filename = "css-poem.txt"
const encoding = "utf-8"

try{
    const fileContent = fs.readFileSync(filename, encoding)
console.log(fileContent)
} catch(error){
    console.error("OMG! An error!", error)
}


const poem = `
    Roses are #FF0000
    Violets are #0000FF
    All my base 
    are belong to you
`

fs.writeFileSync(filename, poem, encoding)