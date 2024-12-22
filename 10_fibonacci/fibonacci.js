const fibonacci = function(member) { 
    member = Number(member);
    if (isNaN(member)) {
        return "Invalid input"; 
    } 
    
    if (member === 0) {
        return 0; 
    } else if (member < 0) {
        return "OOPS";
    }

    let a = 1,
        b = 1;

    for (let i = 2; i <= member; i++) {  
        let temp = a + b;
        a = b;
        b = temp;
    }
    return a;
};
    

;

// Do not edit below this line
module.exports = fibonacci;
