const getLetterPosition = letter => (letter.toUpperCase().charCodeAt() - 'A'.charCodeAt()) + 1;

const sumPositions = positions => {
    const sum = positions.reduce((total, position) => total + position, 0);
    if (sum > 9) {
        return sumPositions(sum.toString().split('').map(i => +i));
    }


    return sum;
};

export default answer => sumPositions(answer.split('').filter(x => /[A-Z]/i.test(x)).map(getLetterPosition));

