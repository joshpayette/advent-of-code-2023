import { getData, sum } from '../utils'

const data = getData(__dirname)

const formatInput = (input: string) => input.trim().split('\n')

const isNumber = (char: string) => /[0-9]/.test(char)

export function solution1(input: string) {
  const lines = formatInput(input)

  const numbers = lines.map((line) => {
    const chars = line.split('')
    const firstNumber = chars.find(isNumber)
    const secondNumber = chars.reverse().find(isNumber)

    return Number(`${firstNumber}${secondNumber}`)
  })

  return sum(numbers)
}

const WORD_TO_DIGIT = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
}

const coerceToDigit = (numOrWord: string | number) => {
  const num = Number(numOrWord.toString())
  if (!isNaN(num)) return num
  return WORD_TO_DIGIT[numOrWord as keyof typeof WORD_TO_DIGIT]
}

const strReverse = (str: string) => str.split('').reverse().join('')

export function solution2(input: string) {
  const lines = formatInput(input)

  const numbers = lines.map((line) => {
    const firstNumber = line.match(
      /[0-9]|one|two|three|four|five|six|seven|eight|nine|zero/
    )

    const secondNumber = strReverse(line).match(
      /[0-9]|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|orez/
    )

    if (!firstNumber) throw new Error('firstNumber is null')
    if (!secondNumber) throw new Error('secondNumber is null')

    return Number(
      `${coerceToDigit(firstNumber[0])}${coerceToDigit(
        strReverse(secondNumber[0])
      )}`
    )
  })

  return sum(numbers)
}

// console.log(solution1(data)) // 54953
console.log(solution2(data))
