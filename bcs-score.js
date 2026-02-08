function finalScore (omr) 
{
    if(typeof omr !== "object")
    {
        return "Invalid";
    }
    if(omr.right + omr.wrong + omr.skip === 100)
    {
        const rightAnswer = omr.right;
        const wrongAnswer = omr.wrong * 0.5;
        const totalNumber = Math.round(rightAnswer - wrongAnswer);
        return totalNumber;
    }
    else{
       return "Invalid";
    }
   
}
const result = finalScore({ right: 67, wrong: 23, skip: 10 });
console.log(result);



