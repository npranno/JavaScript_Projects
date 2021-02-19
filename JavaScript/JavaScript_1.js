function food_Function() {
    var food_output;
    var food = document.getElementById("favorite_food").value;
    var food_string = " is a great dish!";
    switch(food) {
        case "Spaghetti & Meatballs":
            food_output = "Spaghetti & Meatballs" + food_string;
        break;
        case "Lasagna":
            food_output = "Lasagna" + food_string;
        break;
        case "Fettucini Alfredo":
            food_output = "Fettucini Alfredo" + food_string;
        break;
        case "Shrimp Scampi":
            food_output = "Shrimp Scampi" + food_string;
        break;
        default:
        food_output = "Please enter a dish exactly as written on the above list."
    }
    document.getElementById("output").innerHTML = food_output;
}
 
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);
