// https://adventofcode.com/2023/day/1

const fs = require("fs").promises

async function getInput(){
    const res = await fs.readFile('./input.txt', 'utf8')
    return res
}

function replaceWordNumbersWithDigits(s){
    return s.replace(/one|two|three|four|five|six|seven|eight|nine/gi, (match) => {
        switch (match) {
            case "one":
                return '1'
            case "two":
                return '2'
            case "three":
                return '3'
            case "four":
                return '4'
            case "five":
                return '5'
            case "six":
                return '6'
            case "seven":
                return '7'
            case "eight":
                return '8'
            case "nine":
                return '9'
        }
    })
}
async function main(){
    let test = []
    const inputText = await getInput()
    const inputArr = inputText.split(/\r?\n/)
    const ret = inputArr.reduce( (acc, cur) => {
       const rawInput = replaceWordNumbersWithDigits(cur)
       const numbersArr = rawInput.split('').filter(item => !isNaN(parseInt(item)));
       const [firstItem, lastItem] = [numbersArr[0], numbersArr[numbersArr.length - 1]];
       if(!firstItem || !lastItem) return acc
       const number = firstItem + lastItem;
       test.push(parseInt(number))
       return acc + parseInt(number);
    }, 0)

    console.log(test.filter(i => i > 9).length)
    console.log(ret)
}

main()