export const dateTimeConverter = (inputDate: number): string => {
  const date = new Date(inputDate);
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  const [hour, minutes] = [date.getHours(), date.getMinutes()];
  return `
    ${('0' + day).slice(-2)}.${('0' + (month + 1)).slice(-2)}.${year} 
    ${('0' + hour).slice(-2)}:${('0' + minutes).slice(-2)}
  `;
};
