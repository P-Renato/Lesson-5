import fs from "fs"

fs.writeFileSync("test.txt", "Hello World", "utf-8")

console.log(fs.readFileSync("test.txt", "utf-8"))

// let content = fs.readFileSync("test.txt", "utf-8")
// console.log(content)
// console.log(typeof content)

// We can make multiline strings by using backticks

const poem = `
    Roses are red
    Cats are never dull
    I love JavaScript
    Cannot read properties of null
`
const filename = "poem.txt"
const encoding = "utf-8" // encoding is technical detail _how_ text is stored

fs.writeFileSync(filename, poem, encoding)

const content = fs.readFileSync(filename, encoding)

console.log(content)