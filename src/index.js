module.exports = function toReadable(number) {
    var SINGLE_NUMBERS = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };

    var TENTH_NUMBERS = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };

    var TENTH_SUFIXES_NUMBERS = {
        0: 'ten',
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
    };

    var LAL = {
        100: 'hundred',
        1000: 'thousand',
    };


    var maxSupported = 1000;


  if (number.toString().length > maxSupported) {
    return `Max supported: ${maxSupported}, provided ${number}`.trim();
  }

  function loop(currentNumber, currentTenth, str) {
    if (number === 0) return 'zero';
    // If it ends with zero
    if (currentNumber === 0) return str.trim();

    // If it's the last digit
    if (currentTenth === 1) return str + ' ' + SINGLE_NUMBERS[currentNumber].trim();

    if (currentNumber < currentTenth)
      return loop(currentNumber, currentTenth / 10, str).trim();

    var firstNumber = Math.floor(currentNumber / currentTenth);
    var secondNumber = currentNumber % currentTenth;

    if (currentTenth === 10) {
      if (firstNumber !== 1) {
        return loop(
          0,
          0,
          str +
            ' ' +
            TENTH_NUMBERS[firstNumber] +
            ' ' +
            SINGLE_NUMBERS[secondNumber],
        );
      } else {
        return loop(
          0,
          0,
          str + ' ' + TENTH_SUFIXES_NUMBERS[currentNumber % currentTenth],
        );
      }
    }

    var addition = LAL[currentTenth];

    return loop(
      currentNumber % currentTenth,
      currentTenth / 10,
      `${str} ${SINGLE_NUMBERS[firstNumber]} ${addition}`,
    );
  }

  return loop(number, maxSupported, '');

}