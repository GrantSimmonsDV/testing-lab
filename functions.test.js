const {returnTwo, greeting, add, subtract, multiply, divide} = require('./functions')

test ('returnTwo should equal 2', function () {
    expect(returnTwo(3)).toBe(2)
})

test ('greeting should return Hello James', function (){
 expect(greeting('James')).toEqual('Hello, James.')
})

test ('greeting should return Hello Jill', function (){
    expect(greeting('Jill')).toEqual('Hello, Jill.')
})
 

describe ('Math Functions', function (){
test ('multiply function to multiply two numbers', function (){
    expect(multiply(2, 8)).toEqual(16)
})
test ('divide function to divide two numbers', function (){
    expect(divide(18, 2)).toEqual(9)
})
test ('subtract function to subtract two numbers', function (){
    expect(subtract(10, 3)).toEqual(7)
})
test ('add function to add two numbers', function (){
    expect(add(5, 9)).toEqual(14)
})
})