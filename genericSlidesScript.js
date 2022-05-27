//hidden slides

//text-box-0 intro text

document.getElementById('text-box-0-slide-2').hidden = true;
document.getElementById('text-box-0-slide-3').hidden = true;

document.getElementById('back-button-0').style.cursor = "not-allowed";

//text-box-1 reactions with concentrated hydrochloric acid

document.getElementById('text-box-1-slide-2').hidden = true;
document.getElementById('text-box-1-slide-3').hidden = true;
document.getElementById('text-box-1-slide-4').hidden = true;
document.getElementById('text-box-1-slide-5').hidden = true;
document.getElementById('text-box-1-slide-6').hidden = true;
document.getElementById('text-box-1-slide-7').hidden = true;
document.getElementById('text-box-1-slide-8').hidden = true;
document.getElementById('text-box-1-slide-9').hidden = true;
document.getElementById('text-box-1-slide-10').hidden = true;

document.getElementById('back-button-1').style.cursor = "not-allowed";

document.getElementById('reset1').hidden = true;
document.getElementById('show1').hidden = true;

//text-box-2 reactions with a few drops sodium hydroxide 

document.getElementById('text-box-2-slide-2').hidden = true;
document.getElementById('text-box-2-slide-3').hidden = true;
document.getElementById('text-box-2-slide-4').hidden = true;
document.getElementById('text-box-2-slide-5').hidden = true;
document.getElementById('text-box-2-slide-6').hidden = true;
document.getElementById('text-box-2-slide-7').hidden = true;
document.getElementById('text-box-2-slide-8').hidden = true;
document.getElementById('text-box-2-slide-9').hidden = true;
document.getElementById('text-box-2-slide-10').hidden = true;

document.getElementById('back-button-2').style.cursor = "not-allowed";

document.getElementById('reset2').hidden = true;
document.getElementById('show2').hidden = true;

//text-box-3 reactions with excess sodium hydroxide

document.getElementById('text-box-3-slide-2').hidden = true;
document.getElementById('text-box-3-slide-3').hidden = true;
document.getElementById('text-box-3-slide-4').hidden = true;
document.getElementById('text-box-3-slide-5').hidden = true;
document.getElementById('text-box-3-slide-6').hidden = true;
document.getElementById('text-box-3-slide-7').hidden = true;
document.getElementById('text-box-3-slide-8').hidden = true;
document.getElementById('text-box-3-slide-9').hidden = true;

document.getElementById('back-button-3').style.cursor = "not-allowed";

document.getElementById('reset3.1').hidden = true;
document.getElementById('show3.1').hidden = true;

document.getElementById('reset3.2').hidden = true;
document.getElementById('show3.2').hidden = true;

//text-box-4 reactions with a few drops of ammonia

document.getElementById('text-box-4-slide-2').hidden = true;
document.getElementById('text-box-4-slide-3').hidden = true;
document.getElementById('text-box-4-slide-4').hidden = true;
document.getElementById('text-box-4-slide-5').hidden = true;
document.getElementById('text-box-4-slide-6').hidden = true;
document.getElementById('text-box-4-slide-7').hidden = true;
document.getElementById('text-box-4-slide-8').hidden = true;

document.getElementById('back-button-4').style.cursor = "not-allowed";

document.getElementById('reset4.1').hidden = true;
document.getElementById('show4.1').hidden = true;

document.getElementById('reset4.2').hidden = true;
document.getElementById('show4.2').hidden = true;

//text box 5 reactions with excess ammonia

document.getElementById('text-box-5-slide-2').hidden = true;
document.getElementById('text-box-5-slide-3').hidden = true;
document.getElementById('text-box-5-slide-4').hidden = true;
document.getElementById('text-box-5-slide-5').hidden = true;
document.getElementById('text-box-5-slide-6').hidden = true;
document.getElementById('text-box-5-slide-7').hidden = true;
document.getElementById('text-box-5-slide-8').hidden = true;
document.getElementById('text-box-5-slide-9').hidden = true;
document.getElementById('text-box-5-slide-10').hidden = true;

document.getElementById('back-button-5').style.cursor = "not-allowed";

document.getElementById('reset5.1').hidden = true;
document.getElementById('show5.1').hidden = true;

document.getElementById('reset5.2').hidden = true;
document.getElementById('show5.2').hidden = true;


//text box 6 Reactions with sodium carbonate

document.getElementById('text-box-6-slide-2').hidden = true;
document.getElementById('text-box-6-slide-3').hidden = true;
document.getElementById('text-box-6-slide-4').hidden = true;
document.getElementById('text-box-6-slide-5').hidden = true;
document.getElementById('text-box-6-slide-6').hidden = true;
document.getElementById('text-box-6-slide-7').hidden = true;
document.getElementById('text-box-6-slide-8').hidden = true;
document.getElementById('text-box-6-slide-9').hidden = true;
document.getElementById('text-box-6-slide-10').hidden = true;

document.getElementById('back-button-6').style.cursor = "not-allowed";

document.getElementById('reset6.1').hidden = true;
document.getElementById('show6.1').hidden = true;

document.getElementById('reset6.2').hidden = true;
document.getElementById('show6.2').hidden = true;



//function to find unhidden slide


function findVisible(textBoxNumber) {
    
    var textBoxes = document.getElementById(`explanation-text-box-${textBoxNumber}`).getElementsByClassName('text-box');
    
    for (var i = 0; i < textBoxes.length; i++) {
        if (textBoxes[i].hidden === false) {
            return i;
        }
    }
}

///*`explanation-text-box-${textBoxNumber}`*/

//slide advance

function displayNext(textBoxNumber, textBoxDetails) {     
    
    var currentSlideCountingFromZero = findVisible(textBoxNumber);    
    var currentSlide = currentSlideCountingFromZero + 1;

    let lastPage = textBoxDetails['last page'];
    let observationPage = textBoxDetails['observation'];
    let comparisonPage = textBoxDetails['comparison'];
    let writtenResponsePage = textBoxDetails['written response'];
    let penultimatePage = lastPage - 1;

    //document.getElementById('text-box-1-slide-2').innerHTML = `last page: ${lastPage}, observationPage: ${observationPage}, comparisonPage: ${comparisonPage}, written response: ${writtenResponsePage}`;
    //document.getElementById(`next-button-${textBoxNumber}`).innerHTML = `${observationPage}`;

    if (currentSlide === observationPage) {
        
        submitObservations(textBoxNumber, observationPage);
        document.getElementById(`back-button-${textBoxNumber}`).style.cursor = "pointer";
        
    } else if (currentSlide === comparisonPage) {
        //document.getElementById('text-box-1-slide-3').innerHTML = `text box number: ${textBoxNumber}, current slide: ${currentSlide}, last page: ${lastPage}, observationPage: ${observationPage}, comparisonPage: ${comparisonPage}, written response: ${writtenResponsePage}`;
        submitComparison(textBoxNumber, comparisonPage);
        
        
    } else if (currentSlide === writtenResponsePage) {
        
        submitWRQ(textBoxNumber, writtenResponsePage);
    } else if (currentSlide === penultimatePage) {
        
        document.getElementById(`next-button-${textBoxNumber}`).style.cursor = "not-allowed";
        document.getElementById(`text-box-${textBoxNumber}-slide-${currentSlide}`).hidden = true;
        document.getElementById(`text-box-${textBoxNumber}-slide-${currentSlide + 1}`).hidden = false;
    } else if (currentSlide === lastPage) {
        
        document.getElementById(`next-button-${textBoxNumber}`).style.cursor = "not-allowed";
    } else if (currentSlide === 1) {
        
        document.getElementById(`text-box-${textBoxNumber}-slide-${currentSlide}`).hidden = true;
        document.getElementById(`text-box-${textBoxNumber}-slide-${currentSlide + 1}`).hidden = false;
        document.getElementById(`back-button-${textBoxNumber}`).style.cursor = "pointer";
    }
    
    else {
        
        document.getElementById(`text-box-${textBoxNumber}-slide-${currentSlide}`).hidden = true;
        document.getElementById(`text-box-${textBoxNumber}-slide-${currentSlide + 1}`).hidden = false;
    }
    
}

//click slides back

function displayLast(textBoxNumber, textBoxDetails) {
    var currentSlideCountingFromZero = findVisible(textBoxNumber);
    var currentSlide = currentSlideCountingFromZero + 1;
    let lastPage = textBoxDetails['last page'];

    if (currentSlide === lastPage) {
        document.getElementById(`text-box-${textBoxNumber}-slide-${currentSlide}`).hidden = true;
        document.getElementById(`text-box-${textBoxNumber}-slide-${currentSlide - 1}`).hidden = false;
        document.getElementById(`next-button-${textBoxNumber}`).style.cursor = "pointer";
    } else if (currentSlide === 2) {
        document.getElementById(`text-box-${textBoxNumber}-slide-${currentSlide}`).hidden = true;
        document.getElementById(`text-box-${textBoxNumber}-slide-${currentSlide - 1}`).hidden = false;
        document.getElementById(`back-button-${textBoxNumber}`).style.cursor = "not-allowed";
    } else if (currentSlide === 1) {
        return null;
    } else {
        document.getElementById(`text-box-${textBoxNumber}-slide-${currentSlide}`).hidden = true;
        document.getElementById(`text-box-${textBoxNumber}-slide-${currentSlide - 1}`).hidden = false;
    }

}

//submit observations

function submitObservations(textBoxNumber, observationPage) {
    var i = observationPage;
    document.getElementById(`text-box-${textBoxNumber}-slide-${i}`).hidden = true;
    document.getElementById(`text-box-${textBoxNumber}-slide-${i + 1}`).hidden = false;
    document.getElementById(`back-button-${textBoxNumber}`).style.cursor = `pointer`;
    document.getElementById(`display-Co-observation${textBoxNumber}`).innerHTML =
        document.getElementById(`Co-observation${textBoxNumber}`).value;
    document.getElementById(`display-Cu-observation${textBoxNumber}`).innerHTML =
        document.getElementById(`Cu-observation${textBoxNumber}`).value;
    document.getElementById(`display-FeII-observation${textBoxNumber}`).innerHTML =
        document.getElementById(`FeII-observation${textBoxNumber}`).value;
    document.getElementById(`display-FeIII-observation${textBoxNumber}`).innerHTML =
        document.getElementById(`FeIII-observation${textBoxNumber}`).value;
    document.getElementById(`display-Al-observation${textBoxNumber}`).innerHTML =
        document.getElementById(`Al-observation${textBoxNumber}`).value;
}

//written response

function submitWRQ(textBoxNumber, writtenResponsePage) {
    var i = writtenResponsePage;
    document.getElementById(`text-box-${textBoxNumber}-slide-${i}`).hidden = true;
    document.getElementById(`text-box-${textBoxNumber}-slide-${i + 1}`).hidden = false;
    document.getElementById(`display-WRQ${textBoxNumber}-equation`).innerHTML =
        document.getElementById(`WRQ${textBoxNumber}-ionic-equation-input`).value;
    document.getElementById(`display-WRQ${textBoxNumber}-explanation`).innerHTML =
        document.getElementById(`WRQ${textBoxNumber}-explanation-input`).value;
}

//submit comparison

function submitComparison(textBoxNumber, comparisonPage) {
    
    //document.getElementById('next-button-1').innerHTML = 'comparison';
    var i = comparisonPage;
    //document.getElementById('NaOH-section-title').innerHTML = `i + 1 = ${i + 1}`;
    document.getElementById(`text-box-${textBoxNumber}-slide-${i}`).hidden = true;
    document.getElementById(`text-box-${textBoxNumber}-slide-${i + 1}`).hidden = false;
    
    document.getElementById(`TB${textBoxNumber}-display-similarities`).innerHTML =
        document.getElementById(`TB${textBoxNumber}-similarities`).value;
    document.getElementById(`TB${textBoxNumber}-display-differences`).innerHTML =
        document.getElementById(`TB${textBoxNumber}-differences`).value;
}



const correctAnswerFinder = function (array) {
    
    let i;
    for (i = 0; i < array.length; i++) {
        if (array[i]['correct'] === 'y') {
            return array[i]['question'];
        }
    }
}

function displayAnswer(textBoxNumber, answersArray) {
    
    var submit = document.getElementById(`submit${textBoxNumber}`);
    var reset = document.getElementById(`reset${textBoxNumber}`);
    var correctAnswer = correctAnswerFinder(answersArray);
    
    
    if (document.getElementById(`text-box-${textBoxNumber}-option-3`).checked) {
        if (correctAnswer === 3) {
            document.getElementById(`text-box-${textBoxNumber}-answer-3`).style.border = '3px solid limegreen'
            document.getElementById(`text-box-${textBoxNumber}-result-3`).style.color = 'limegreen'
            document.getElementById(`text-box-${textBoxNumber}-result-3`).innerHTML = `Correct! ${answersArray[2]['text']}`
        } else {
            document.getElementById(`text-box-${textBoxNumber}-answer-3`).style.border = '3px solid yellow'
            document.getElementById(`text-box-${textBoxNumber}-result-3`).style.color = 'yellow'
            document.getElementById(`text-box-${textBoxNumber}-result-3`).innerHTML = `Incorrect selection! ${answersArray[2]['text']}`
            showCorrectAnswer(textBoxNumber, answersArray);
        }
        submit.hidden = true;
        reset.hidden = false;
    }
    if (document.getElementById(`text-box-${textBoxNumber}-option-2`).checked) {
        if (correctAnswer === 2) {
            document.getElementById(`text-box-${textBoxNumber}-answer-2`).style.border = '3px solid limegreen'
            document.getElementById(`text-box-${textBoxNumber}-result-2`).style.color = 'limegreen'
            document.getElementById(`text-box-${textBoxNumber}-result-2`).innerHTML = `Correct! ${answersArray[1]['text']}`
        } else {
            document.getElementById(`text-box-${textBoxNumber}-answer-2`).style.border = '3px solid yellow'
            document.getElementById(`text-box-${textBoxNumber}-result-2`).style.color = 'yellow'
            document.getElementById(`text-box-${textBoxNumber}-result-2`).innerHTML = `Incorrect selection! ${answersArray[1]['text']}`
            showCorrectAnswer(textBoxNumber, answersArray);
        }
        submit.hidden = true;
        reset.hidden = false;
    }
    if (document.getElementById(`text-box-${textBoxNumber}-option-1`).checked) {
        if (correctAnswer === 1) {
            document.getElementById(`text-box-${textBoxNumber}-answer-1`).style.border = '3px solid limegreen'
            document.getElementById(`text-box-${textBoxNumber}-result-1`).style.color = 'limegreen'
            document.getElementById(`text-box-${textBoxNumber}-result-1`).innerHTML = `Correct! ${answersArray[0]['text']}`
        } else {
            document.getElementById(`text-box-${textBoxNumber}-answer-1`).style.border = '3px solid yellow'
            document.getElementById(`text-box-${textBoxNumber}-result-1`).style.color = 'yellow'
            document.getElementById(`text-box-${textBoxNumber}-result-1`).innerHTML = `Incorrect selection! ${answersArray[0]['text']}`
            showCorrectAnswer(textBoxNumber, answersArray);
        }
        submit.hidden = true;
        reset.hidden = false;
    }
    if (document.getElementById(`text-box-${textBoxNumber}-option-4`).checked) {
        if (correctAnswer === 4) {
            document.getElementById(`text-box-${textBoxNumber}-answer-4`).style.border = '3px solid limegreen'
            document.getElementById(`text-box-${textBoxNumber}-result-4`).style.color = 'limegreen'
            document.getElementById(`text-box-${textBoxNumber}-result-4`).innerHTML = `Correct! ${answersArray[3]['text']}`
        } else {
            document.getElementById(`text-box-${textBoxNumber}-answer-4`).style.border = '3px solid yellow'
            document.getElementById(`text-box-${textBoxNumber}-result-4`).style.color = 'yellow'
            document.getElementById(`text-box-${textBoxNumber}-result-4`).innerHTML = `Incorrect selection! ${answersArray[3]['text']}`
            showCorrectAnswer(textBoxNumber, answersArray);
        }
        submit.hidden = true;
        reset.hidden = false;
    }
}


// show correct answer function


function showCorrectAnswer(textBoxNumber, answersArray) {
    var correctAnswer = correctAnswerFinder(answersArray);
    var submit = document.getElementById(`submit${textBoxNumber}`);
    var reset = document.getElementById(`reset${textBoxNumber}`);
    var show = document.getElementById(`show${textBoxNumber}`);

    show.hidden = false;
    show.addEventListener('click', () => {
        document.getElementById(`text-box-${textBoxNumber}-answer-${correctAnswer}`).style.border = '3px solid limegreen'
        document.getElementById(`text-box-${textBoxNumber}-result-${correctAnswer}`).style.color = 'limegreen'
        document.getElementById(`text-box-${textBoxNumber}-result-${correctAnswer}`).innerHTML = `Correct answer! ${answersArray[correctAnswer - 1]['text']}`

    });
};


//MCQ quiz reset button


function resetAnswer(textBoxNumber) {
    var submit = document.getElementById(`submit${textBoxNumber}`);
    var reset = document.getElementById(`reset${textBoxNumber}`);
    var show = document.getElementById(`show${textBoxNumber}`);
    reset.addEventListener('click', () => {
        show.hidden = true;
        document.getElementById(`text-box-${textBoxNumber}-answer-3`).style.border = '0px'
        submit.hidden = false;
        reset.hidden = true;
        document.getElementById(`text-box-${textBoxNumber}-answer-1`).style.border = '0px'
        document.getElementById(`text-box-${textBoxNumber}-result-1`).innerHTML = ''
        document.getElementById(`text-box-${textBoxNumber}-answer-2`).style.border = '0px'
        document.getElementById(`text-box-${textBoxNumber}-result-2`).innerHTML = ''
        document.getElementById(`text-box-${textBoxNumber}-answer-3`).style.border = '0px'
        document.getElementById(`text-box-${textBoxNumber}-result-3`).innerHTML = ''
        document.getElementById(`text-box-${textBoxNumber}-answer-4`).style.border = '0px'
        document.getElementById(`text-box-${textBoxNumber}-result-4`).innerHTML = ''
        document.getElementById(`text-box-${textBoxNumber}-option-1`).checked = false
        document.getElementById(`text-box-${textBoxNumber}-option-2`).checked = false
        document.getElementById(`text-box-${textBoxNumber}-option-3`).checked = false
        document.getElementById(`text-box-${textBoxNumber}-option-4`).checked = false
    });
}