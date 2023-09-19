function birthday(s, d, m) {
    
    let sReduced = s.reduce((previusValue, currentValue, currentIndex) => {
        
        previusValue.push(s.slice(currentIndex,currentIndex + m));

        return previusValue;
    },[]);

    let numberDivided = 0;
    sReduced.forEach(element => {
        
        if(element.length == m)
            numberDivided = (element.reduce((a,b) => a+b) == d) ? ++numberDivided : numberDivided;
        
    });

    return numberDivided;

}

console.log(birthday([2,2,1,3,2],4,2));