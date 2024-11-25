//console log just to test that your JS is linked properly
console.log("YAR MATEY!")

//create a variable for the number of buildings in the city and start it at zero
var buildings = 0;
document.getElementById('city').innerHTML="You Have "+buildings+" buildings in your city";
//send a message to the page to inform the user of how many buildings there are in their city. This will happen right away when the page loads

//Functions -- 
//Think of this as a group of instructions that will always run together
//Create a function that will run when the first button is clicked
//This gets trigger by the submit button in the form. This trigger is known as an EVENT! (Button click event)
//It will:
    //-- Print a message to teh console
    //--Add one to the variable that is tracking the number of buildings
    //---Print a message with the number of buildings
    //---Place an image graphic into the other div
function buildOne(){

console.log("meep! ;O");

buildings++;
document.getElementById('city').innerHTML="You Have "+buildings+" buildings in your city";
document.getElementById('cityGraphic').innerHTML+="<img src='images/BuildingBlock1.png'>";
}

function buildTwo(){

    console.log("mew! ;O");
    
    buildings++;
    document.getElementById('city').innerHTML="You Have "+buildings+" buildings in your city";
    document.getElementById('cityGraphic').innerHTML+="<img src='images/BuildingBlock2.png'>";
    }

function buildThree(){

        console.log("mow! ;O");
        
        buildings++;
        document.getElementById('city').innerHTML="You Have "+buildings+" buildings in your city";
        document.getElementById('cityGraphic').innerHTML+="<img src='images/BuildingBlock3.png'>";
        }
        function buildFour(){

            console.log("ITS DANGEROUS TO GO ALONE TAKE THIS");
            
            buildings++;
            document.getElementById('city').innerHTML="You Have "+buildings+" buildings in your city";
            document.getElementById('cityGraphic').innerHTML+="<img src='images/CAT4.png' class='img-fluid'>";
            }
            
        

//Create a function for the second button that prints a message with the number of buildings and the graphic for the second building


//Create a function for the third button that prints a message with the number of buildings and the graphic for the second building

