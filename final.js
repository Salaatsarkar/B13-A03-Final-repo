//Problem-01: New Price for Eid Sale
function newPrice(currentPrice,discount)
{
    if(discount < 0 || discount > 100)
    {
        return "Invalid";
    }
    if(typeof currentPrice !== "number" || typeof discount !== "number")
    {
         return "Invalid";
    }
    let price = (currentPrice *discount)/100;
    let totalPrice = currentPrice - price;
    let mainPrice = totalPrice.toFixed(3);
    return mainPrice;
}


//Problem-02: OTP Validation for Zapshift
function validOtp(otp)
{
    if(typeof otp !== "string")
    {
        return "Invalid";
    }
    const length = otp.length;
    const checkOtp = otp.startsWith("ph-", 0);
    if(length === 8 && checkOtp)
    {
        return true;
    }
    else
    {
        return false;
    }

}


//Problem-03: BCS Final Score Calculator
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

//Problem-04: Upcoming Gono Vote
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


//Problem-05: Text Analyzer for an AI Company
function  analyzeText(str) 
{
    if(typeof str !== "string" || str === "")
    {
        return "Invalid";
    }
    let strArray = str.split(" ");
    let longWord = strArray[0];
    for(const word of strArray)
    {
        if(word.length > longWord.length)
        {
            longWord = word;
        }

    }
    let arrayJoin = strArray.join("");
    let length = arrayJoin.length;
    Object = { longwords:longWord , token: length};

    return Object;     
}

