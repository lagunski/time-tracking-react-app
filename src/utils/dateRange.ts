export const dateRange = (dateStart: Date, dateFinish: Date): Array<number> => {
  const result = [];
  const currentDate = dateStart;
  while (currentDate <= dateFinish) {
    result.push(currentDate.getTime());
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return result;
};
