

function timeConversion(s) {
    const amOrPm = s.slice(-2);
    let hour = parseInt(s.slice(0,2));
    const minAndSec = s.slice(3,8);
    
    if(amOrPm == 'AM'){
        return `${(hour == 12) ? '00' : String(hour).padStart(2,'0')}:${minAndSec}`
    }else if(amOrPm == "PM"){
        return `${((hour != 12) ? hour + 12 : hour)}:${minAndSec}`
    }
    
    return ''
}

console.log(timeConversion('06:40:03AM'));

