function gonoVote(array) 
{
    if(Array.isArray(array) === false)
    {
        return "Invalid";
    }
    let countYes = 0;
    let countNo = 0;
    for(const item of array)
    {
        if(item === "ha")
        {
            countYes++;
        }
        if(item === "na")
        {
            countNo++;
        }
    }
    if(countYes > countNo)
    {
        return true;
    }
    else if( countYes === countNo)
    {
        return  "equal";
    }
    else
    {
        return false;
    }    
}
const result = gonoVote(["ha", "ha", "na", "na"]);
console.log(result);