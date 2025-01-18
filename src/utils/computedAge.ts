const computeAge = (birthday: Date): string => {
  const now = new Date();
  let age = now.getFullYear() - birthday.getFullYear()
  const monthDifference = now.getMonth() - birthday.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && now.getDate() < birthday.getDate())) {
    age--;
  }

  return age.toString();
};
export default computeAge;