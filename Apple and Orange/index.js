function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const QtdApple = countFruit(s, t, a, apples);
    const QtdOrange = countFruit(s, t, b, oranges);
    console.log(`${QtdApple}\n${QtdOrange}`);

}

function countFruit(startPonintHouse, endPointHouse, locationTree, ArrayFruit){
    let countFruit = 0;
    ArrayFruit.forEach(element => {
        const location = locationTree + element;
        if(location >= startPonintHouse && location <= endPointHouse)
            countFruit++;
    });

    return countFruit;
}

countApplesAndOranges(7, 10, 4, 12, [2,3,-4], [3,-2,-4]);