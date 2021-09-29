function fizzbuzz(number) {
    if (number % 15 === 0) return `${number} est multipe de 5 et de 3`;
    else if (number % 5 === 0) return `${number} est multipe de`;
    else if (number % 3 === 0) return `${number} est multipe de 3`;
    else return number;
}

module.exports = fizzbuzz;