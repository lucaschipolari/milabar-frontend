export const isPriceInputDisabled =
  !priceButton ||
  parseInt(priceButton) === 0 ||
  parseInt(priceButton) > 20 ||
  !!errors.priceButton;
