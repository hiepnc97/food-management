export const roundUpDecimal = (number: number): number | string => {
  if (isNaN(number)) {
    return 'Invalid input';
  }

  const formattedNumber = number.toFixed(1);

  return parseFloat(formattedNumber);
};
