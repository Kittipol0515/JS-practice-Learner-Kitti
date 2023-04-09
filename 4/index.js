function uniqueOddNumbers(numbers) {
    numbers.map(number % 2)
    return numbers
}
console.log(uniqueOddNumbers())

module.exports = uniqueOddNumbers;