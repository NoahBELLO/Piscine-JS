/*  
Notes scolaires
Créer une fonction getGradequi détermine si un nombre est paire ou impair.

Barème de notation
A : 90-100
B : 80-89
C : 70-79
D : 60-69
F : 0-59 (échec)
Exemples de tests :
getGrade(95)   // "A"
getGrade(85)   // "B"
getGrade(75)   // "C"
getGrade(65)   // "D"
getGrade(55)   // "F"
getGrade(100)  // "A"
*/

function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95));
console.log(getGrade(85));
console.log(getGrade(75));
console.log(getGrade(65));
console.log(getGrade(55));
console.log(getGrade(100));
