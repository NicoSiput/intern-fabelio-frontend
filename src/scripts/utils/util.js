const covertNumberToCurrency = (number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
};

export { covertNumberToCurrency };
