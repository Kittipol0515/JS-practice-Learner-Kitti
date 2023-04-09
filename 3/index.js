function calculateTax(income) {
  if(income > 500000 ) {
    return income * (15/100)
  } else if (income >= 300001 && income < 500000) {
    return income * (10/100)
  } else if (income >= 150001 && income < 300000) {
    return income * (5/100)
  } else {
    return 'no tax'
  }
}
console.log(calculateTax(220000))


module.exports = calculateTax;