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
let otp = validOtp("ph-10985");
console.log(otp);
