function divisibleSumPairs(n, k, ar) {
    let numPairs = 0;

    for(let i = 0; i < n; i++){
        for(let i2 = i +1; i2 < n; i2++){            
            numPairs += sumDivisible(ar[i], ar[i2], k);
        }
    }

    return numPairs;
}

function sumDivisible (n1, n2, divider){
    return (((n1 + n2) % divider) === 0) ? 1 : 0;
}

const ar = [1,2,3,4,5,6];
const k = 5;

console.log(divisibleSumPairs(ar.length, k, ar));