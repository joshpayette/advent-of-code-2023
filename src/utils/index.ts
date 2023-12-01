import fs from 'fs'
import path from 'path'

export function getData(dir: string) {
  return fs.readFileSync(path.resolve(dir, './input.txt'), {
    encoding: 'utf-8',
  })
}

/**
 * Math helpers
 */
const add = (x: number, y: number) => x + y
const subtract = (x: number, y: number) => x - y
const multiply = (x: number, y: number) => x * y
const divide = (x: number, y: number) => x / y

export const sum = (nums: number[]) => nums.reduce(add)
export const difference = (nums: number[]) => nums.reduce(subtract)
export const product = (nums: number[]) => nums.reduce(multiply)
export const quotient = (nums: number[]) => nums.reduce(divide)
