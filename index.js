// code your solution here
function saturdayFun(defaultActivity){
    if(defaultActivity === "bathe my dog"){
        return "This Saturday, I want to bathe my dog!";
    }else{
        return "This Saturday, I want to roller-skate!";
    }
}
console.log(saturdayFun("bathe my dog"));
console.log(saturdayFun());


function mondayWork(schedule){
    if(schedule === "work from home"){
        return "This Monday, I will work from home.";
    }else{
        return "This Monday, I will go to the office.";
    }
}
console.log(mondayWork("work from home"));
console.log(mondayWork());

  
let wrapAdjective = function(result="*") {
    return function(emphatic="||") {
        return `You are ${result}${emphatic}${result}!`;

    }
}

