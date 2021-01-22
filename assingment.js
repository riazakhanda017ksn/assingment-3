// https://github.com/riazakhanda017ksn/assingment-3

// 1.kilometerToMeter----------------------->

function kilometerToMeter(kilometer){

var meter=kilometer*1000;

return meter;
}

// var totalMeter=kilometerToMeter(5);
// console.log(totalMeter);




// 2.budgetCalculator-------------------------->

function budgetCalculator(num1, num2, num3){

    var totalPrice= num1 + num2 + num3;

    return totalPrice;


}

// var totalAmount=budgetCalculator(50, 100, 500);

// console.log(totalAmount);







// 3.hotelCost----------------------------------------->





function   hotelCost(day) {


    money=0;
    
    if (day<=100){
    
        money=day * 100;
    }
    else if(day<=80){
    
        var firstTenDays=10*100;
        var remainingDay=day - 20;
        var nextTenDays=remainingDay * 80;
        money=firstTenDays + nextTenDays;
    }
    else{
        var remainingDay=10*100;
        var nextTenDays=10 * 80;
        var remainingDay=nextTenDays - 30;
        var thirdPart = remainingDay * 230;
        money=firstTenDays + nextTenDays + thirdPart;
    }
    return money;
}    



// var totalAmount= hotelCost(43);

// console.log(totalAmount);


// 4.megaFriend---------------------------------->


function megaFriend(names) {
    

var maxName= " ";

for(var i=0; i<names.length;i++){

var element=names[i];
if(
    element.length> maxName.length
){

    maxName=element

}


}

return maxName

}


// var bigString=megaFriend(["saif", "rahman", "rihan", "mofiz",  "jubayer", "riaz ahmed"]);
// console.log(bigString);








