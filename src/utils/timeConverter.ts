export const timeConverter = (time: number): string => {
  return `${('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:${(
    '0' + Math.floor((time / 60000) % 60)
  ).slice(-2)}:${('0' + Math.floor((time / 1000) % 60)).slice(-2)}`;
};
