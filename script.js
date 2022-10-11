// Gets user input for height and weight in centimeter
var centimeters = prompt("Enter height in centimeters");
var pounds = prompt("Enter weight in pounds");
//changing height in inches and weight in kilos
var height=centimeters *2.54;
var weight=pounds*0.45;
//output on screen for height 
console.log("height in inches");
console.log(height+"inches"); 
//output on screen for weight
console.log("weight in kilos");
console.log(weight+"pounds"); 

//formula for BMI calculation
    var result = (weight / ((height * height) 
    / 10000)).toFixed(2);
   //If statement for getting output of calculted weight status 
    if(!isNaN(result)){
        console.log(result);
        if(result < 18.5){
            console.log("Underweight");
        }
        else if(result < 25){
            console.log("Healthy");
        }
        else if(result < 39){
            console.log("Overweight");
        }
        else if(result>=40){
            console.log("Obesity");
        }
        
    }
    

