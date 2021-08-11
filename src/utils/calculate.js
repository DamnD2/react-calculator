const operatorTypeMap = {
  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
};

function calculate(operator, firstOperand, secondOperand, maxResultFieldLength) {
  const convertedFirstOperand = parseFloat(firstOperand);
  const convertedSecondOperand = parseFloat(secondOperand);

  const resultFunction = operatorTypeMap[operator];
  const result = resultFunction(convertedFirstOperand, convertedSecondOperand);

  return numberLengthConversion(result, maxResultFieldLength);
}

function numberLengthConversion(number, maxLength) {
  const result = number;
  const maxNumber = 10 ** maxLength;
  const minNumber = 10 ** (-maxLength);

  if (result <= minNumber && result > 0) {
    // exponential notation of a number will almost always take at least 5 symbols! => maxLength - 5!
    return result.toExponential(maxLength - 5);
  }

  if (result >= maxNumber || result <= 0 - maxNumber) {
    return result.toExponential(maxLength - 5);
  }

  if (result.toString().length > maxLength) {
    const integerPartOfNumberLength = parseInt(result, 10).toString().length;
    const digits = (maxLength > integerPartOfNumberLength) ? maxLength - integerPartOfNumberLength : 0;

    return result.toFixed(digits);
  }

  return result;
}

export default calculate;
