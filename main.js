var randomise1 = document.querySelector('#test-tubes1');
var randomise2 = document.querySelector('#test-tubes2');
for (var i = randomise1.children.length; i >= 0; i--) {
    var j = [Math.random() * i | 0];
    randomise1.appendChild(randomise1.children[j]);
    randomise2.appendChild(randomise2.children[j]);
};
/*
var randomise2 = document.querySelector('#test-tubes2');
for (var i = randomise2.children.length; i >= 0; i--) {
    randomise2.appendChild(randomise2.children[Math.random() * i | 0]);
};
*/
var randomise3 = document.querySelector('#test-tubes3');
var randomise4 = document.querySelector('#test-tubes4');
for (var i = randomise3.children.length; i >= 0; i--) {
    var j = [Math.random() * i | 0];
    randomise3.appendChild(randomise3.children[j]);
    randomise4.appendChild(randomise4.children[j]);
};
/*
var randomise4 = document.querySelector('#test-tubes4');
for (var i = randomise4.children.length; i >= 0; i--) {
    randomise4.appendChild(randomise4.children[Math.random() * i | 0]);
};
*/
var randomise5 = document.querySelector('#test-tubes5');
for (var i = randomise5.children.length; i >= 0; i--) {
    randomise5.appendChild(randomise5.children[Math.random() * i | 0]);
};

var randomise0 = document.querySelector('#test-tubes0');
for (var i = randomise0.children.length; i >= 0; i--) {
    randomise0.appendChild(randomise0.children[Math.random() * i | 0]);
};
/*pop up window script */

/* This was the code for the window pop up with answers

function display() {
    
    


    DispWin = window.open('', 'NewWin', 'toolbar=no,status=no,width=1000,height=800')

    /*message = "<html><head><title>Pre-Learning Answer</title><link rel='stylesheet' type='text/css' href='windowStyle.css'></head><body>";
    message = "<ul><li><b>NAME: </b>" + document.form1.yourname.value;
    message += "<li><b>ADDRESS: </b>" + document.form1.address.value;
    message += "<li><b>PHONE: </b>" + document.form1.phone.value + "</ul>";
    message = "<img src='images/structures/hexaaquacopper.png' />";
    message += "<p>hexaaquacopper</p>";
    message += "<p>Formula: [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup></p>";
    message += "<form><input type='checkbox' id='pre-learning-checklist' name='pre-learning-checklist' value='ligands'>";
    message += "<label for='pre-learning-checklist'>Six aqua ligands bonded via oxygen atoms</label><br>";
    message += "<input type='checkbox' id='pre-learning-checklist2' name='pre-learning-checklist2' value='brackets'>";
    message += "<label for='pre-learning-checklist2'>Square brackets with overall charge shown top right</label><br>";
    message += "<input type='checkbox' id='pre-learning-checklist3' name='pre-learning-checklist3' value='arrows'>";
    message += "<label for='pre-learning-checklist3'>Arrow heads point towards central Cu ion to show coordinate bonds</label><br><br>";
    /*message += "<input type='submit' value='Submit'>";      
    message += "<div><p>Did you include sulfate ions anywhere in your structure? Don't worry, it's a common mistake. The question states that copper sulfate is dissolved. When the ionically bonded copper sulfate is mixed with water, the ions will be separated as they become hydrated by the water molecules. The sulfate ions will become surrounded by water molecules. Each copper ion will also become surrounded by water molecules, which will arrange themselves around the copper ions as shown.</p></div > ";

    /*

    <form action="/action_page.php">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1"> I have a bike</label><br>
                
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
                            <label for="vehicle3"> I have a boat</label><br><br>
                                <input type="submit" value="Submit">
</form>


    DispWin.document.write('<html><head><title>Pre-Learning Answer</title><link rel="stylesheet" type="text/css" href="windowStyle.css"></head><body>');
    DispWin.document.write(message);
};

*/

/*Variables assigned to the images for the reactions of TM solutions with a few drops NaOH */

/*cobalt*/

let cobaltSolution = document.getElementById('cobalt-solution');
/*let cobaltHydroxide = document.getElementById('cobalt-hydroxide-ppt');*/
let cobaltSmallPpt = document.getElementById('cobalt-hydroxide-small-ppt');
let cobaltOutline = document.getElementById('cobalt-outline');

/*copper*/

let copperSolution = document.getElementById('copper-solution');
/*let copperHydroxide = document.getElementById('copper-hydroxide-ppt');*/
let copperSmallPpt = document.getElementById('copper-hydroxide-small-ppt');
let copperOutline = document.getElementById('copper-outline');

/*ironII*/

let ironIISolution = document.getElementById('ironII-solution');
/*let ironIIHydroxide = document.getElementById('ironII-hydroxide-ppt');*/
let ironIISmallPpt = document.getElementById('ironII-hydroxide-small-ppt');
let ironIIOutline = document.getElementById('ironII-outline');

/*ironIII*/

let ironIIISolution = document.getElementById('ironIII-solution');
/*let ironIIIHydroxide = document.getElementById('ironIII-hydroxide-ppt');*/
let ironIIISmallPpt = document.getElementById('ironIII-hydroxide-small-ppt');
let ironIIIOutline = document.getElementById('ironIII-outline');

/*aluminium*/

let aluminiumSolution = document.getElementById('aluminium-solution');
/*let aluminiumHydroxide = document.getElementById('aluminium-hydroxide-ppt');*/
let aluminiumSmallPpt = document.getElementById('aluminium-hydroxide-small-ppt');
let aluminiumOutline = document.getElementById('aluminium-outline');


/*reset button*/

let startOver = document.getElementById('reset-NaOH-drops');


cobaltSmallPpt.hidden = true;
copperSmallPpt.hidden = true;
ironIISmallPpt.hidden = true;
ironIIISmallPpt.hidden = true;
aluminiumSmallPpt.hidden = true;

/*metal ID buttons and label*/


document.getElementById('cobalt-ID-1').hidden = true;
document.getElementById('copper-ID-1').hidden = true;
document.getElementById('ironII-ID-1').hidden = true;
document.getElementById('ironIII-ID-1').hidden = true;
document.getElementById('aluminium-ID-1').hidden = true;

/*
let identifyCopper1 = document.getElementById('Cu-ID-button1')

let copperLabel1 = document.getElementById('copper-ID-1');

copperLabel1.hidden = true;

let identifyIronTwo1 = document.getElementById('FeII-ID-button1')

let ironIILabel1 = document.getElementById('ironII-ID-1');

ironIILabel1.hidden = true;

let identifyIronThree1 = document.getElementById('FeIII-ID-button1')

let ironIIILabel1 = document.getElementById('ironIII-ID-1');

ironIIILabel1.hidden = true;

let identifyAluminium1 = document.getElementById('Al-ID-button1')

let aluminiumLabel1 = document.getElementById('aluminium-ID-1');

aluminiumLabel1.hidden = true;

*/

/* variables addition of XS NaOH */

/*cobalt*/

let cobaltSolution2 = document.getElementById('cobalt-solution2');
let cobaltSmallPpt2 = document.getElementById('cobalt-hydroxide-small-ppt2');
let cobaltPpt2 = document.getElementById('cobalt-hydroxide-ppt2');
let cobaltOutline2 = document.getElementById('cobalt-outline2');

/*copper*/

let copperSolution2 = document.getElementById('copper-solution2');
let copperSmallPpt2 = document.getElementById('copper-hydroxide-small-ppt2');
let copperPpt2 = document.getElementById('copper-hydroxide-ppt2');
let copperOutline2 = document.getElementById('copper-outline2');

/*ironII*/

let ironIISolution2 = document.getElementById('ironII-solution2');
let ironIISmallPpt2 = document.getElementById('ironII-hydroxide-small-ppt2');
let ironIIPpt2 = document.getElementById('ironII-hydroxide-ppt2');
let ironIIPptOxidised2 = document.getElementById('ironII-hydroxide-oxidised-ppt2');
let ironIIOutline2 = document.getElementById('ironII-outline2');

/*ironIII*/

let ironIIISolution2 = document.getElementById('ironIII-solution2');
let ironIIISmallPpt2 = document.getElementById('ironIII-hydroxide-small-ppt2');
let ironIIIPpt2 = document.getElementById('ironIII-hydroxide-ppt2');
let ironIIIOutline2 = document.getElementById('ironIII-outline2');

/*aluminium*/

let aluminiumSolution2 = document.getElementById('aluminium-solution2');
let aluminiumSmallPpt2 = document.getElementById('aluminium-hydroxide-small-ppt2');
let aluminiumPpt2 = document.getElementById('aluminium-hydroxide-ppt2');
let aluminiumOutline2 = document.getElementById('aluminium-outline2');

/*reset button*/

let startOver2 = document.getElementById('reset-XSNaOH');

cobaltSmallPpt2.hidden = true;
copperSmallPpt2.hidden = true;
ironIISmallPpt2.hidden = true;
ironIIISmallPpt2.hidden = true;
aluminiumSmallPpt2.hidden = true;


cobaltPpt2.hidden = true;
copperPpt2.hidden = true;
ironIIPptOxidised2.hidden = true;
ironIIIPpt2.hidden = true;
aluminiumPpt2.hidden = true;

/*metal ID buttons and label*/

document.getElementById('cobalt-ID-2').hidden = true;
document.getElementById('copper-ID-2').hidden = true;
document.getElementById('ironII-ID-2').hidden = true;
document.getElementById('ironIII-ID-2').hidden = true;
document.getElementById('aluminium-ID-2').hidden = true;

/*

let identifyCobalt2 = document.getElementById('Co-ID-button2')

let cobaltLabel2 = document.getElementById('cobalt-ID-2');

cobaltLabel2.hidden = true;

let identifyCopper2 = document.getElementById('Cu-ID-button2')

let copperLabel2 = document.getElementById('copper-ID-2');

copperLabel2.hidden = true;

let identifyIronTwo2 = document.getElementById('FeII-ID-button2')

let ironIILabel2 = document.getElementById('ironII-ID-2');

ironIILabel2.hidden = true;

let identifyIronThree2 = document.getElementById('FeIII-ID-button2')

let ironIIILabel2 = document.getElementById('ironIII-ID-2');

ironIIILabel2.hidden = true;

let identifyAluminium2 = document.getElementById('Al-ID-button2')

let aluminiumLabel2 = document.getElementById('aluminium-ID-2');

aluminiumLabel2.hidden = true;
*/

/*variables addition of a few drops of ammonia*/



/*cobalt*/

let cobaltSolution3 = document.getElementById('cobalt-solution3');
let cobaltSmallPpt3 = document.getElementById('cobalt-hydroxide-small-ppt3');
let cobaltOutline3 = document.getElementById('cobalt-outline3');


/*copper*/

let copperSolution3 = document.getElementById('copper-solution3');
let copperSmallPpt3 = document.getElementById('copper-hydroxide-small-ppt3');
let copperOutline3 = document.getElementById('copper-outline3');


/*ironII*/

let ironIISolution3 = document.getElementById('ironII-solution3');
let ironIISmallPpt3 = document.getElementById('ironII-hydroxide-small-ppt3');
let ironIIOutline3 = document.getElementById('ironII-outline3');


/*ironIII*/

let ironIIISolution3 = document.getElementById('ironIII-solution3');
let ironIIISmallPpt3 = document.getElementById('ironIII-hydroxide-small-ppt3');
let ironIIIOutline3 = document.getElementById('ironIII-outline3');


/*aluminium*/

let aluminiumSolution3 = document.getElementById('aluminium-solution3');
let aluminiumSmallPpt3 = document.getElementById('aluminium-hydroxide-small-ppt3');
let aluminiumOutline3 = document.getElementById('aluminium-outline3');


/*reset button*/

let startOver3 = document.getElementById('reset-NH3-drops');


cobaltSmallPpt3.hidden = true;
copperSmallPpt3.hidden = true;
ironIISmallPpt3.hidden = true;
ironIIISmallPpt3.hidden = true;
aluminiumSmallPpt3.hidden = true;

/*hidings for ID metal badges*/

document.getElementById('cobalt-ID-3').hidden = true;
document.getElementById('copper-ID-3').hidden = true;
document.getElementById('ironII-ID-3').hidden = true;
document.getElementById('ironIII-ID-3').hidden = true;
document.getElementById('aluminium-ID-3').hidden = true;

/*variables excess ammonia*/



/*cobalt*/

let cobaltSolution4 = document.getElementById('cobalt-solution4');
let cobaltSmallPpt4 = document.getElementById('cobalt-hydroxide-small-ppt4');
let cobaltAmminoComplex = document.getElementById('cobalt-ammino-complex');

/*copper*/

let copperSolution4 = document.getElementById('copper-solution4');
let copperSmallPpt4 = document.getElementById('copper-hydroxide-small-ppt4');
let copperAmminoComplex = document.getElementById('copper-ammino-complex');

/*ironII*/

let ironIISolution4 = document.getElementById('ironII-solution4');
let ironIISmallPpt4 = document.getElementById('ironII-hydroxide-small-ppt4');
let ironIIPpt4 = document.getElementById('ironII-hydroxide-ppt4');
let ironIIPptOxidised4 = document.getElementById('ironII-hydroxide-oxidised-ppt4');

/*ironIII*/

let ironIIISolution4 = document.getElementById('ironIII-solution4');
let ironIIISmallPpt4 = document.getElementById('ironIII-hydroxide-small-ppt4');
let ironIIIPpt4 = document.getElementById('ironIII-hydroxide-ppt4');

/*aluminium*/

let aluminiumSolution4 = document.getElementById('aluminium-solution4');
let aluminiumSmallPpt4 = document.getElementById('aluminium-hydroxide-small-ppt4');
let aluminiumPpt4 = document.getElementById('aluminium-hydroxide-ppt4');

/*reset button*/

let startOver4 = document.getElementById('reset-XSNH3');

cobaltSmallPpt4.hidden = true;
copperSmallPpt4.hidden = true;
ironIISmallPpt4.hidden = true;
ironIIISmallPpt4.hidden = true;
aluminiumSmallPpt4.hidden = true;


cobaltAmminoComplex.hidden = true;
copperAmminoComplex.hidden = true;
ironIIPptOxidised4.hidden = true;
ironIIIPpt4.hidden = true;
aluminiumPpt4.hidden = true;

/*hidings ID metal badges*/

document.getElementById('cobalt-ID-4').hidden = true;
document.getElementById('copper-ID-4').hidden = true;
document.getElementById('ironII-ID-4').hidden = true;
document.getElementById('ironIII-ID-4').hidden = true;
document.getElementById('aluminium-ID-4').hidden = true;

/*variables addition of sodium carbonate solution*/

/*cobalt*/

let cobaltSolution5 = document.getElementById('cobalt-solution5');
let cobaltCarbonatePpt = document.getElementById('cobalt-carbonate-ppt');
let cobaltOutline5 = document.getElementById('cobalt-outline5');


/*copper*/

let copperSolution5 = document.getElementById('copper-solution5');
let copperCarbonatePpt = document.getElementById('copper-carbonate-ppt');
let copperOutline5 = document.getElementById('copper-outline5');


/*ironII*/

let ironIISolution5 = document.getElementById('ironII-solution5');
let ironIICarbonatePpt = document.getElementById('ironII-hydroxide-ppt5');
let ironIIOutline5 = document.getElementById('ironII-outline5');


/*ironIII*/

let ironIIISolution5 = document.getElementById('ironIII-solution5');
let ironIIICarbonatePpt = document.getElementById('ironIII-hydroxide-effervescence');
let ironIIIOutline5 = document.getElementById('ironIII-outline5');


/*aluminium*/

let aluminiumSolution5 = document.getElementById('aluminium-solution5');
let aluminiumCarbonatePpt = document.getElementById('aluminium-hydroxide-effervescence');
let aluminiumOutline5 = document.getElementById('aluminium-outline5');

/*hidings ID metal badges*/

document.getElementById('cobalt-ID-5').hidden = true;
document.getElementById('copper-ID-5').hidden = true;
document.getElementById('ironII-ID-5').hidden = true;
document.getElementById('ironIII-ID-5').hidden = true;
document.getElementById('aluminium-ID-5').hidden = true;

/*reset button*/

let startOver5 = document.getElementById('reset-carbonate');


cobaltCarbonatePpt.hidden = true;
copperCarbonatePpt.hidden = true;
ironIICarbonatePpt.hidden = true;
ironIIICarbonatePpt.hidden = true;
aluminiumCarbonatePpt.hidden = true;


/*variables addition of hydrochloric acid*/

/*cobalt*/

let cobaltSolution0 = document.getElementById('cobalt-solution0');
let cobaltChloroComplex = document.getElementById('cobalt-chloro-complex');
let cobaltOutline0 = document.getElementById('cobalt-outline0');


/*copper*/

let copperSolution0 = document.getElementById('copper-solution0');
let copperChloroComplex = document.getElementById('copper-chloro-complex');
let copperOutline0 = document.getElementById('copper-outline0');


/*ironII*/

let ironIISolution0 = document.getElementById('ironII-solution0');
let ironIIOutline0 = document.getElementById('ironII-outline0');



/*ironIII*/

let ironIIISolution0 = document.getElementById('ironIII-solution0');
let ironIIIChloroComplex = document.getElementById('ironIII-chloro-complex');
let ironIIIOutline0 = document.getElementById('ironIII-outline0');


/*aluminium*/

let aluminiumSolution0 = document.getElementById('aluminium-solution0');
let aluminiumOutline0 = document.getElementById('aluminium-outline0');

/*metal ID button hidings*/

document.getElementById('cobalt-ID-0').hidden = true;
document.getElementById('copper-ID-0').hidden = true;
document.getElementById('ironII-ID-0').hidden = true;
document.getElementById('ironIII-ID-0').hidden = true;
document.getElementById('aluminium-ID-0').hidden = true;

/*reset button*/

let startOver0 = document.getElementById('reset-HCl');


cobaltChloroComplex.hidden = true;
copperChloroComplex.hidden = true;
ironIIIChloroComplex.hidden = true;


/*functions addition of a few drops NaOH*/

/*metal ID functions */
/*

let identifyCobalt1 = document.getElementById('Co-ID-button1')

let cobaltLabel1 = document.getElementById('cobalt-ID-1');

*/

function identifyCobalt1() {    
        document.getElementById('Co-ID-button1').hidden = true;
        document.getElementById('cobalt-ID-1').hidden = false;
        document.getElementById('Co-ID-button2').hidden = true;
        document.getElementById('cobalt-ID-2').hidden = false;        
};

function identifyCopper1() {
    document.getElementById('Cu-ID-button1').hidden = true;
    document.getElementById('copper-ID-1').hidden = false;
    document.getElementById('Cu-ID-button2').hidden = true;
    document.getElementById('copper-ID-2').hidden = false;
};

function identifyIronTwo1() {
    document.getElementById('FeII-ID-button1').hidden = true;
    document.getElementById('ironII-ID-1').hidden = false;
    document.getElementById('FeII-ID-button2').hidden = true;
    document.getElementById('ironII-ID-2').hidden = false;
};

function identifyIronThree1() {
    document.getElementById('FeIII-ID-button1').hidden = true;
    document.getElementById('ironIII-ID-1').hidden = false;
    document.getElementById('FeIII-ID-button2').hidden = true;
    document.getElementById('ironIII-ID-2').hidden = false;
};

function identifyAluminium1() {
    document.getElementById('Al-ID-button1').hidden = true;
    document.getElementById('aluminium-ID-1').hidden = false;
    document.getElementById('Al-ID-button2').hidden = true;
    document.getElementById('aluminium-ID-2').hidden = false;
};




/*observations*/

cobaltOutline.onclick = function () {
    cobaltSmallPpt.hidden = false;
    cobaltSmallPpt2.hidden = false;

};

copperOutline.onclick = function () {
    copperSmallPpt.hidden = false;
    copperSmallPpt2.hidden = false;

};

ironIIOutline.onclick = function () {
    ironIISmallPpt.hidden = false;
    ironIISmallPpt2.hidden = false;

};

ironIIIOutline.onclick = function () {
    ironIIISmallPpt.hidden = false;
    ironIIISmallPpt2.hidden = false;

};

aluminiumOutline.onclick = function () {
    aluminiumSmallPpt.hidden = false;
    aluminiumSmallPpt2.hidden = false;

};

/*reset button*/

startOver.onclick = function () {
    aluminiumSmallPpt.hidden = true;
    aluminiumSmallPpt2.hidden = true;

    copperSmallPpt.hidden = true;
    copperSmallPpt2.hidden = true;

    copperPpt2.hidden = true;

    cobaltSmallPpt.hidden = true;
    cobaltSmallPpt2.hidden = true;

    ironIIISmallPpt.hidden = true;
    ironIIISmallPpt2.hidden = true;
    
    ironIIIPpt2.hidden = true;
    ironIISmallPpt.hidden = true;
    ironIISmallPpt2.hidden = true;
    
    ironIIPptOxidised2.hidden = true;  
        
    cobaltPpt2.hidden = true;

  

    document.getElementById('Al-ID-button1').hidden = false;
    document.getElementById('aluminium-ID-1').hidden = true;
    document.getElementById('Al-ID-button2').hidden = false;
    document.getElementById('aluminium-ID-2').hidden = true;

    document.getElementById('Co-ID-button1').hidden = false;
    document.getElementById('cobalt-ID-1').hidden = true;
    document.getElementById('Co-ID-button2').hidden = false;
    document.getElementById('cobalt-ID-2').hidden = true;

    document.getElementById('Cu-ID-button1').hidden = false;
    document.getElementById('copper-ID-1').hidden = true;
    document.getElementById('Cu-ID-button2').hidden = false;
    document.getElementById('copper-ID-2').hidden = true;

    document.getElementById('FeII-ID-button1').hidden = false;
    document.getElementById('ironII-ID-1').hidden = true;
    document.getElementById('FeII-ID-button2').hidden = false;
    document.getElementById('ironII-ID-2').hidden = true;

    document.getElementById('FeIII-ID-button1').hidden = false;
    document.getElementById('ironIII-ID-1').hidden = true;
    document.getElementById('FeIII-ID-button2').hidden = false;
    document.getElementById('ironIII-ID-2').hidden = true;

    


};

/*functions addition excess NaOH*/

/*metal ID functions */
/*
identifyCobalt2.onclick = function () {
    identifyCobalt1.hidden = true;
    cobaltLabel1.hidden = false;
    identifyCobalt2.hidden = true;
    cobaltLabel2.hidden = false;
};

identifyCopper2.onclick = function () {
    identifyCopper1.hidden = true;
    copperLabel1.hidden = false;
    identifyCopper2.hidden = true;
    copperLabel2.hidden = false;
};

identifyIronTwo2.onclick = function () {
    identifyIronTwo1.hidden = true;
    ironIILabel1.hidden = false;
    identifyIronTwo2.hidden = true;
    ironIILabel2.hidden = false;
};

identifyIronThree2.onclick = function () {
    identifyIronThree1.hidden = true;
    ironIIILabel1.hidden = false;
    identifyIronThree2.hidden = true;
    ironIIILabel2.hidden = false;
};

identifyAluminium2.onclick = function () {
    identifyAluminium1.hidden = true;
    aluminiumLabel1.hidden = false;
    identifyAluminium2.hidden = true;
    aluminiumLabel2.hidden = false;
};

*/

cobaltSmallPpt2.onclick = function () {
    cobaltPpt2.hidden = false;
};

copperSmallPpt2.onclick = function () {
    copperPpt2.hidden = false;
};

ironIISmallPpt2.onclick = function () {
    ironIIPptOxidised2.hidden = false;
};

ironIIISmallPpt2.onclick = function () {
    ironIIIPpt2.hidden = false;
};

aluminiumSmallPpt2.onclick = function () {
    aluminiumSmallPpt2.hidden = true;
};



startOver2.onclick = function () {
    if (aluminiumSmallPpt.hidden === true) {
        aluminiumSmallPpt2.hidden = true;
    } else {
        aluminiumSmallPpt2.hidden = false;
    };
    /*aluminiumSmallPpt2.hidden = true;*/
    
    ironIIIPpt2.hidden = true;
    
    ironIIPptOxidised2.hidden = true;
    
    copperPpt2.hidden = true;
    
    cobaltPpt2.hidden = true;
    

};

/*functions addition few drops ammonia */

/*metal ID functions */
/*

let identifyCobalt1 = document.getElementById('Co-ID-button1')

let cobaltLabel1 = document.getElementById('cobalt-ID-1');

*/

function identifyCobalt3() {
    document.getElementById('Co-ID-button3').hidden = true;
    document.getElementById('cobalt-ID-3').hidden = false;
    document.getElementById('Co-ID-button4').hidden = true;
    document.getElementById('cobalt-ID-4').hidden = false;
};

function identifyCopper3() {
    document.getElementById('Cu-ID-button3').hidden = true;
    document.getElementById('copper-ID-3').hidden = false;
    document.getElementById('Cu-ID-button4').hidden = true;
    document.getElementById('copper-ID-4').hidden = false;
};

function identifyIronTwo3() {
    document.getElementById('FeII-ID-button3').hidden = true;
    document.getElementById('ironII-ID-3').hidden = false;
    document.getElementById('FeII-ID-button4').hidden = true;
    document.getElementById('ironII-ID-4').hidden = false;
};

function identifyIronThree3() {
    document.getElementById('FeIII-ID-button3').hidden = true;
    document.getElementById('ironIII-ID-3').hidden = false;
    document.getElementById('FeIII-ID-button4').hidden = true;
    document.getElementById('ironIII-ID-4').hidden = false;
};

function identifyAluminium3() {
    document.getElementById('Al-ID-button3').hidden = true;
    document.getElementById('aluminium-ID-3').hidden = false;
    document.getElementById('Al-ID-button4').hidden = true;
    document.getElementById('aluminium-ID-4').hidden = false;
};

/*observations*/

cobaltOutline3.onclick = function () {
    cobaltSmallPpt3.hidden = false;
    cobaltSmallPpt4.hidden = false;

};

copperOutline3.onclick = function () {
    copperSmallPpt3.hidden = false;
    copperSmallPpt4.hidden = false;

};

ironIIOutline3.onclick = function () {
    ironIISmallPpt3.hidden = false;
    ironIISmallPpt4.hidden = false;

};

ironIIIOutline3.onclick = function () {
    ironIIISmallPpt3.hidden = false;
    ironIIISmallPpt4.hidden = false;

};

aluminiumOutline3.onclick = function () {
    aluminiumSmallPpt3.hidden = false;
    aluminiumSmallPpt4.hidden = false;

};

/*reset button*/

startOver3.onclick = function () {
    aluminiumSmallPpt3.hidden = true;
    aluminiumSmallPpt4.hidden = true;
    ironIIISmallPpt3.hidden = true;
    ironIIISmallPpt4.hidden = true;
    ironIISmallPpt3.hidden = true;
    ironIISmallPpt4.hidden = true;
    copperSmallPpt3.hidden = true;
    copperSmallPpt4.hidden = true;
    cobaltSmallPpt3.hidden = true;
    cobaltSmallPpt4.hidden = true;
    cobaltAmminoComplex.hidden = true;
    copperAmminoComplex.hidden = true;
    aluminiumPpt4.hidden = true;
    ironIIPptOxidised4.hidden = true;
    ironIIIPpt4.hidden = true;

    document.getElementById('Al-ID-button3').hidden = false;
    document.getElementById('aluminium-ID-3').hidden = true;
    document.getElementById('Al-ID-button4').hidden = false;
    document.getElementById('aluminium-ID-4').hidden = true;

    document.getElementById('Co-ID-button3').hidden = false;
    document.getElementById('cobalt-ID-3').hidden = true;
    document.getElementById('Co-ID-button4').hidden = false;
    document.getElementById('cobalt-ID-4').hidden = true;

    document.getElementById('Cu-ID-button3').hidden = false;
    document.getElementById('copper-ID-3').hidden = true;
    document.getElementById('Cu-ID-button4').hidden = false;
    document.getElementById('copper-ID-4').hidden = true;

    document.getElementById('FeII-ID-button3').hidden = false;
    document.getElementById('ironII-ID-3').hidden = true;
    document.getElementById('FeII-ID-button4').hidden = false;
    document.getElementById('ironII-ID-4').hidden = true;

    document.getElementById('FeIII-ID-button3').hidden = false;
    document.getElementById('ironIII-ID-3').hidden = true;
    document.getElementById('FeIII-ID-button4').hidden = false;
    document.getElementById('ironIII-ID-4').hidden = true;

};

/*functions addition excess ammonia*/


cobaltSmallPpt4.onclick = function () {
    cobaltAmminoComplex.hidden = false;
    cobaltSmallPpt4.hidden = true;
};

copperSmallPpt4.onclick = function () {
    copperAmminoComplex.hidden = false;
    copperSmallPpt4.hidden = true;
};

ironIISmallPpt4.onclick = function () {
    ironIIPptOxidised4.hidden = false;
};

ironIIISmallPpt4.onclick = function () {
    ironIIIPpt4.hidden = false;
};

aluminiumSmallPpt4.onclick = function () {
    aluminiumPpt4.hidden = false;
};



startOver4.onclick = function () {
    if (aluminiumSmallPpt3.hidden === true) {
        aluminiumSmallPpt4.hidden = true;
    } else {
        aluminiumSmallPpt4.hidden = false;
    };
    if (cobaltSmallPpt3.hidden === true) {
        cobaltSmallPpt4.hidden = true;
    } else {
        cobaltSmallPpt4.hidden = false;
    };
    if (copperSmallPpt3.hidden === true) {
        copperSmallPpt4.hidden = true;
    } else {
        copperSmallPpt4.hidden = false;
    };
    /*aluminiumSmallPpt4.hidden = false;*/
    aluminiumPpt4.hidden = true;

    ironIIIPpt4.hidden = true;

    ironIIPptOxidised4.hidden = true;

    /*copperPpt4.hidden = true;*/
    /*copperSmallPpt4.hidden = false;*/
    copperAmminoComplex.hidden = true;

    /*cobaltPpt4.hidden = true;*/
    /*cobaltSmallPpt4.hidden = false;*/
    cobaltAmminoComplex.hidden = true;


};

/*functions addition of sodium carbonate*/

/*identity reveal*/

function identifyCobalt5() {
    document.getElementById('Co-ID-button5').hidden = true;
    document.getElementById('cobalt-ID-5').hidden = false;

};

function identifyCopper5() {
    document.getElementById('Cu-ID-button5').hidden = true;
    document.getElementById('copper-ID-5').hidden = false;

};

function identifyIronTwo5() {
    document.getElementById('FeII-ID-button5').hidden = true;
    document.getElementById('ironII-ID-5').hidden = false;

};

function identifyIronThree5() {
    document.getElementById('FeIII-ID-button5').hidden = true;
    document.getElementById('ironIII-ID-5').hidden = false;

};

function identifyAluminium5() {
    document.getElementById('Al-ID-button5').hidden = true;
    document.getElementById('aluminium-ID-5').hidden = false;

};

/*observations*/

cobaltOutline5.onclick = function () {
    cobaltCarbonatePpt.hidden = false;
    

};

copperOutline5.onclick = function () {
    copperCarbonatePpt.hidden = false;
    

};

ironIIOutline5.onclick = function () {
    ironIICarbonatePpt.hidden = false;
    

};

ironIIIOutline5.onclick = function () {
    ironIIICarbonatePpt.hidden = false;
    

};

aluminiumOutline5.onclick = function () {
    aluminiumCarbonatePpt.hidden = false;
    

};

startOver5.onclick = function () {
    cobaltCarbonatePpt.hidden = true;
    copperCarbonatePpt.hidden = true;
    ironIICarbonatePpt.hidden = true;
    ironIIICarbonatePpt.hidden = true;
    aluminiumCarbonatePpt.hidden = true;

    document.getElementById('Al-ID-button5').hidden = false;
    document.getElementById('aluminium-ID-5').hidden = true;


    document.getElementById('Co-ID-button5').hidden = false;
    document.getElementById('cobalt-ID-5').hidden = true;


    document.getElementById('Cu-ID-button5').hidden = false;
    document.getElementById('copper-ID-5').hidden = true;


    document.getElementById('FeII-ID-button5').hidden = false;
    document.getElementById('ironII-ID-5').hidden = true;


    document.getElementById('FeIII-ID-button5').hidden = false;
    document.getElementById('ironIII-ID-5').hidden = true;

};

/*functions addition of hydrochloric acid*/

/*identity reveal*/

function identifyCobalt0() {
    document.getElementById('Co-ID-button0').hidden = true;
    document.getElementById('cobalt-ID-0').hidden = false;
    
};

function identifyCopper0() {
    document.getElementById('Cu-ID-button0').hidden = true;
    document.getElementById('copper-ID-0').hidden = false;
  
};

function identifyIronTwo0() {
    document.getElementById('FeII-ID-button0').hidden = true;
    document.getElementById('ironII-ID-0').hidden = false;
   
};

function identifyIronThree0() {
    document.getElementById('FeIII-ID-button0').hidden = true;
    document.getElementById('ironIII-ID-0').hidden = false;
    
};

function identifyAluminium0() {
    document.getElementById('Al-ID-button0').hidden = true;
    document.getElementById('aluminium-ID-0').hidden = false;
   
};

/*observations*/

cobaltOutline0.onclick = function () {
    cobaltChloroComplex.hidden = false;
    cobaltSolution0.hidden = true;

};

copperOutline0.onclick = function () {
    copperChloroComplex.hidden = false;
    copperSolution0.hidden = true;

};

ironIIOutline0.onclick = function () {
    
    ironIISolution0.hidden = true;
    ironIIOutline0.hidden = true;

};

ironIIIOutline0.onclick = function () {
    ironIIIChloroComplex.hidden = false;
    ironIIISolution0.hidden = true;

};

aluminiumOutline0.onclick = function () {
    
    aluminiumSolution0.hidden = true;
    aluminiumOutline0.hidden = true;

};

startOver0.onclick = function () {
    aluminiumSolution0.hidden = false;
    aluminiumOutline0.hidden = false;
    copperSolution0.hidden = false;
    cobaltSolution0.hidden = false;
    ironIISolution0.hidden = false;
    ironIIOutline0.hidden = false;
    ironIIISolution0.hidden = false;


    ironIIIChloroComplex.hidden = true;
    copperChloroComplex.hidden = true;
    cobaltChloroComplex.hidden = true;

    document.getElementById('Al-ID-button0').hidden = false;
    document.getElementById('aluminium-ID-0').hidden = true;
    

    document.getElementById('Co-ID-button0').hidden = false;
    document.getElementById('cobalt-ID-0').hidden = true;
    

    document.getElementById('Cu-ID-button0').hidden = false;
    document.getElementById('copper-ID-0').hidden = true;
    

    document.getElementById('FeII-ID-button0').hidden = false;
    document.getElementById('ironII-ID-0').hidden = true;
   

    document.getElementById('FeIII-ID-button0').hidden = false;
    document.getElementById('ironIII-ID-0').hidden = true;
    

};