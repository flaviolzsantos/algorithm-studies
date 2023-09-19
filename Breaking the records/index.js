function breakingRecords(scores) {
    
    let scoreMin = -1;
    let scoreMax = -1;
    let qtdScoreMin = 0;
    let qtdScoreMax = 0;
    

    scores.forEach(element => {
        
        if(element < scoreMin || scoreMin == -1){
            
            if(scoreMin > -1)
                qtdScoreMin++;

            scoreMin = element;
        }

        if(element > scoreMax){
            
            if(scoreMax > -1)
                qtdScoreMax++;

            scoreMax = element;
        }
    });

    return [qtdScoreMax, qtdScoreMin];

}

console.log(breakingRecords([0,9,3,10,2,20]))