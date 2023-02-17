module.exports = function toReadable(number) {
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];

    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'
    ];
    var numberString = number.toString();
    if (number === 0) return 'zero';
    if (number < 20) {
        return ones[number];
    }

    if (numberString.length === 2) {
        return tens[numberString[0]] + ' ' + ones[numberString[1]];
    }
    if (numberString.length === 3) {

        if (numberString[1] === '0' && numberString[2] === '0') {
            return ones[Number(numberString[0])] + ' ' + 'hundred';
        }
        if (numberString[1] === '1' && numberString[2] === '0') {

            return ones[(numberString[0])] + ' hundred' + ' ' + ones[10];
        }
        if (numberString[1] === '1' && numberString[2] === '1') {

            return ones[(numberString[0])] + ' hundred' + ' ' + ones[11];
        }
        if (numberString[1] === '1' && numberString[2] === '2') {

            return ones[(numberString[0])] + ' hundred' + ' ' + ones[12];
        }
        if (numberString[1] === '1' && numberString[2] === '3') {

            return ones[(numberString[0])] + ' hundred' + ' ' + ones[13];
        }
        if (numberString[1] === '1' && numberString[2] === '4') {

            return ones[(numberString[0])] + ' hundred' + ' ' + ones[14];
        }
        if (numberString[1] === '1' && numberString[2] === '5') {

            return ones[(numberString[0])] + ' hundred' + ' ' + ones[15];
        }
        if (numberString[1] === '1' && numberString[2] === '6') {

            return ones[(numberString[0])] + ' hundred' + ' ' + ones[16];
        }
        if (numberString[1] === '1' && numberString[2] === '7') {

            return ones[(numberString[0])] + ' hundred' + ' ' + ones[17];
        }
        if (numberString[1] === '1' && numberString[2] === '8') {

            return ones[(numberString[0])] + ' hundred' + ' ' + ones[18];
        }
        if (numberString[1] === '1' && numberString[2] === '9') {

            return ones[(numberString[0])] + ' hundred' + ' ' + ones[19];
        } else {
            return ones[numberString[0]] + ' hundred' + ' ' + tens[numberString[1]] + ' ' + ones[numberString[2]];
        }
    }
}
