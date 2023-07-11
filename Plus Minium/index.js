let arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    let arrSize = arr.length;
    let countZero = (arr.filter((x) => x == 0).length / arrSize).toFixed(arrSize);
    let countLessThanZero = (arr.filter((x) => x < 0).length / arrSize).toFixed(arrSize);
    let countGreaterThanZero = (arr.filter((x) => x > 0).length / arrSize).toFixed(arrSize);
    console.log(`${countGreaterThanZero}\n${countLessThanZero}\n${countZero}`);
}

plusMinus(arr);