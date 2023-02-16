module.exports = function toReadable(number) {
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'
    ];
    let numberString = number.toString();
    //if (value === 0) return 'zero'
    if (number < 20) {
        return ones[number];
    }
    if (numberString.length === 2) {
        return tens[numberString[0]] + ' ' + ones[numberString[1]];
    }
    if (numberString.length === 3) {
        return ones[numberString[0]] + ' ' + 'hundred' + ' '  + tens[numberString[1]] + ' ' + ones[numberString[2]];
    }
    
    
    
}
