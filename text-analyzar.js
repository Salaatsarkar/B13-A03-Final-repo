function  analyzeText(str) 
{
    if(typeof str !== "string")
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
const output = analyzeText("I am a little honest person");
console.log(output);
