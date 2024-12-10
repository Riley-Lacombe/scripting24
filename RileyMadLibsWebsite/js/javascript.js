console.log('bing');

function write(){

    var Adjective1 = document.getElementById('Adjective1').value;
    console.log(Adjective1);
    var Name = document.getElementById('Name').value;
    console.log(Name);
    var Person = document.getElementById('Person').value;
    console.log(Person);
    var Adjective2 = document.getElementById('Adjective2').value;
    console.log(Adjective2);
    var Adjective3 = document.getElementById('Adjective3').value;
    console.log(Adjective3);
    var Noun1 = document.getElementById('Noun1').value;
    console.log(Noun1);
    var Adjective4 = document.getElementById('Adjective4').value;
    console.log(Adjective4);
    var Bodypart = document.getElementById('Bodypart').value;
    console.log(Bodypart);
    var Verb1 = document.getElementById('Verb1').value;
    console.log(Verb1);
    var Verb2 = document.getElementById('Verb2').value;
    console.log(Verb2);
    
    
    var NounFurniture = document.querySelector('input[name="NounFurniture"]:checked').value;
    console.log(NounFurniture);









    document.getElementById('output').innerHTML = Name+ " heard a shot ring out and saw "+Person+" fall over. not dead though. "+Name+" could tell from the "+Adjective1+" "+Adjective2+" scream that getting shot in the "+Bodypart+" does to someone. So "+Name+" used this moment to "+Verb1+"! obviously they had a plan! they would just.... um... wait.... They realized they were strapped down to the "+NounFurniture+".... so they just kinda.... "+Verb2+" there........................................... They thought of "+Noun1+"... were they "+Adjective3+"? They had heard about tales but wasnt sure if they were true......... they thought on it.. and realized they liked to imagine they were. even if they were a bit "+Adjective4+".";

    console.log('chilling');

    
}



