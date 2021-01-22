function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}

function budgetCalculator(watch, phone, laptop){
    var priceOfWatch = watch * 50;
    var priceOfPhone = phone *100;
    var priceOfLaptop = laptop *500;
    var total = priceOfWatch + priceOfPhone + priceOfLaptop;
    return total;
}

function hotelCost (stayingDays){
    var cost = 0;
    if (stayingDays <= 10) {
        cost = stayingDays * 100;
    } else if (stayingDays <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = stayingDays - 10;
        var nextTenDays = remainingDays * 80;
        cost = firstTenDays + nextTenDays;
    } else {
        var firstTenDays = 10 * 100;
        var nextTenDays = 10 *80;
        var remainingDays = stayingDays -20;
        var nextFollowingDays = remainingDays * 50;
        cost = firstTenDays + nextTenDays+ nextFollowingDays
    }
    return cost;
}


function megaFriend(array) {
    var longestNameOfArray = "";
    for(var i=0; i < array.length; i++){
    var letterOfName = array [i];
        if(letterOfName.length > longestNameOfArray.length){
            longestNameOfArray = array[i];
        }
    }
    return longestNameOfArray;
}