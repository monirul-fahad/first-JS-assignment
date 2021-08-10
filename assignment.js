/* ------------------
  Problem Number - 1.
   -----------------*/
// Seer To Mon.
function seerToMon(seer) {
   const perMon = 40;
   if (seer < 0) {
       return "Sorry, Seer Value Cann't Be negative."
   } else {
    const mon = seer / perMon;
    return mon;
   }
}
const mySeer = seerToMon(400);
console.log(mySeer);



/* ------------------
  Problem Number - 2.
   -----------------*/
// Total Sales
function totalSales(shirtsQuantity, pantsQuantity, shoesQuantity) {
    if ((shirtsQuantity < 0) || (pantsQuantity < 0) || (shoesQuantity < 0)) {
        //return for negative product values.
        return "Product quantity cann't be negative values"
    } else {
        //return total sales
        const totalAmount = (shirtsQuantity * 100) + (pantsQuantity * 200) + (shoesQuantity * 500);
        return totalAmount;
    }
}
const total = totalSales(1,1,1)
console.log(total)



/* ------------------
  Problem Number - 3.
   -----------------*/
// Delivery Cost
function deliveryCost(tShirtsQuantity) {
    const CostForFirst100 = 100;
    const CostForSecond100 = 80;
    const CostForRest = 50;
    if (tShirtsQuantity < 0) {
        return "t-Shirts quantity cann't be negative values."
    } else if (tShirtsQuantity <= 100) {
        //cost for 1 to 100
         const cost =tShirtsQuantity * CostForFirst100;
         return cost;
     } else if (tShirtsQuantity <= 200) {
         //cost for 101 to 200
        const first100cost = 100 * CostForFirst100;
        const restShirts =tShirtsQuantity - 100;
        const second100Cost = restShirts * CostForSecond100;
        const totalCost = first100cost + second100Cost;
        return totalCost;
     } else {
         //cost for 201 and rest
         const first100cost = 100 * CostForFirst100;
         const second100Cost = 100 * CostForSecond100;
         const restShirts =tShirtsQuantity - 200;
         const restCost = restShirts * CostForRest;
         const totalCost = first100cost + second100Cost + restCost;
         return totalCost;
     }
 }
 const cost = deliveryCost(250)
 console.log(cost)



/* ------------------
  Problem Number - 4.
   -----------------*/
//Perfect Name
function perfectFriend(friendsNames) {
    // cheacking if user put any number as name.
    for (let i = 0; i < friendsNames.length; i++) {
        const element = friendsNames[i];
        if (typeof element == "number") {
            return "Friends Name Cann't be Numbers."
        } 
    }
    //findig the first perfect name
    let perfectName = friendsNames[0];
    for (let i = 0; i < friendsNames.length; i++) {
        if (friendsNames[i].length == 5) {
            perfectName = friendsNames[i];
            return perfectName;
            }  
        } 
}
const friends = ['rafi', 'jafi', 'fahad', 'nilu', 'sak', 'sakib']
const perfect = perfectFriend(friends);
console.log(perfect)
