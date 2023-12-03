// import text from "./input.txt"
const fs = require("fs").promises

async function getInput(){
    const res = await fs.readFile('./input.txt', 'utf8')
    return res
}


async function main(){
    const inputText = await getInput()
    const inputArr = inputText.split(/\r?\n/)
    const ret = inputArr.reduce( (acc, cur) => {
       
       const numbersArr = cur.split('').filter(item => !isNaN(parseInt(item)))
       const [firstItem, lastItem] = [numbersArr[0], numbersArr[numbersArr.length - 1]]
        const number = firstItem + lastItem
       return acc + parseInt(number)
    }, 0)

    console.log(ret)
}

main()