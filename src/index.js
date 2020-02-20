module.exports = function toReadable (number) {
    ZeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six','seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen','fourteen','fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];
    Tenners = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ]
    numberToString = (number) => {
        return number < 20 ? ZeroToNineteen[number] : number < 100 ? `${Tenners[Math.floor(number / 10) - 2]}${number % 10 == 0 ? '': ' ' + ZeroToNineteen[number % 10]}` : null 
    }
    return (number >= 100) ? `${ZeroToNineteen[Math.floor(number / 100)]} hundred${(number - Math.floor(number / 100) * 100) == 0 ? '' :' ' + numberToString(number - Math.floor(number / 100) * 100)}` : numberToString(number)   
}
