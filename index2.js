import fs from "fs"
import prompt from "picoprompt"

const filename = "textline.txt"
const encoding = "utf-8"
let content = ""

try{
    content = fs.readFileSync(filename, encoding)
    console.log(content)
}catch(error){
    console.error("File reading error", error.message)
}

const newEntry = prompt("Enter a line of text to add: ")

content = content + newEntry + "\n"

fs.writeFileSync(filename, content, encoding)