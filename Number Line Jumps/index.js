
function kangaroo(x1, v1, x2, v2) {
    const noOfJumps = (x2 - x1) / (v1 - v2);
    return noOfJumps > 0 && Number.isInteger(noOfJumps) ? "YES" : "NO";

}

console.log(kangaroo(0,3,4,2))