export const dateConverter = (inputDate: number): string => {
  const date = new Date(inputDate);
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  return `
    ${('0' + day).slice(-2)}.${('0' + (month + 1)).slice(-2)}.${year} 
  `;
};
