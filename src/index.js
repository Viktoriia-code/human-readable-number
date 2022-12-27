module.exports = function toReadable (number) {
  var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number==0){return 'zero'}
  else if (number<10){return ones[number]}
  else if (number>9&&number<20){return teens[number - 10]}
  else if (number>19&&number<100&&number%10==0){return tens[Math.floor(number / 10)]}
  else if (number>19&&number<100){return tens[Math.floor(number / 10)] + " " + ones[number % 10]}
  else if (number>99&&number%100==0){return ones[Math.floor(number / 100)] + " hundred"}
  else if (number>99&&number%10==0){return ones[Math.floor(number / 100)] + " hundred " + tens[Math.floor((number % 100)/10)]}
  else if (number>99&&number%100<10){return ones[Math.floor(number / 100)] + " hundred " + ones[number % 10]}
  else if (number>99&&number%100>10&&number%100<20){return ones[Math.floor(number / 100)] + " hundred " + teens[number % 10]}
  else {return ones[Math.floor(number / 100)] + " hundred " + tens[Math.floor((number % 100)/10)] + " " + ones[number % 10]}
}