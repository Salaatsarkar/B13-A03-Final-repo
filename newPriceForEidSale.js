// Problem-01: New Price for Eid Sale
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
const price = newPrice(1500,105);
console.log(price);