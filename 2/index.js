function getGrade(percentage) {
  let grade; 
  switch(true) {
    case percentage >=80 :
    grade = "A"
    break;
    case percentage >=70 :
      grade = "B"
    break;
    case percentage >=60 :
      grade = "C"
    break;
    case percentage >=50 :
      grade = "D"
    break;
    case percentage >=49:
      grade = "F"
    break;
  }
  return grade;

}
console.log(getGrade(49))


module.exports = getGrade;