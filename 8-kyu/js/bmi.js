// Calculate BMI
// https://www.codewars.com/kata/57a429e253ba3381850000fb
function bmi(weight, height) {
  const bmi = weight / (height * height);
  if (18.5 >= bmi) return "Underweight";
  if (25 >= bmi) return "Normal";
  if (30 >= bmi) return "Overweight";
  return "Obese";
}
