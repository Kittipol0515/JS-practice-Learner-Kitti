function ageClassification(age) {
    if (age <= 18) {
      return 'Minor';
    } else if (age > 18 && age < 65) {
      return 'Adult';
    } else {
      return 'Senior';
    }
  }
console.log(ageClassification(8))

module.exports = ageClassification