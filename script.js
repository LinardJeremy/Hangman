let wordHidden = [
    "Javascript",
    "HTML",
    "PHP",
    "Becode",
    "Coding",
    "CSS",
    "Programmeur",
    "Web",
    "Internet",
    "xyphophore",
    "Caligula",
    "Marc-Antoine",
    "Marc-Aurele"
]
let completeWord = "";
let answerGiven = [];
let word ="";
array2 =[];
let answers = "";
array3 = [];
let wordToFind = document.getElementById("wordToFind");
let test = [];
let score = 0; 
let tryUse = document.getElementById('tryUse');
tryUse.innerHTML= score;
 document.getElementById("endGame").style.display = "none";
 let validate = document.getElementById("validate").disabled = true;
 let reset = document.getElementById("reset").style.display = "none";

document.getElementById("buttonStart").addEventListener('click',createArray);
document.getElementById("reset").addEventListener('click',createArray);

document.getElementById('validate').addEventListener('click',function(){
    let answersInput = document.getElementById('answer').value.toUpperCase();
   let index2 = answerGiven.indexOf(answersInput);
    if (answersInput===""){
        alert("Le champ doit contenir au moins une lettre");
    }
    if (answerGiven.indexOf(answersInput)<0) {
    answerGiven.push(answersInput);

    }
     else if (answerGiven.indexOf(answersInput)>=0){
       alert("Vous avez déjà donné cette lettre");
    //   console.log(answerGiven.indexOf(answersInput));
    }
    document.getElementById("answerGiven").innerHTML= answerGiven;
let index = array3.indexOf(answersInput);
    
    console.log(completeWord);
    if (answersInput === completeWord){
        wordToFind.innerHTML = completeWord;
    }
    
    for (let q=0;q<array3.length;q++){
        if (array3[q]===answersInput){
            test[q]=array3[q];
           wordToFind.innerHTML = test.join('');

        }
    }
    if (index<0 && answersInput!=completeWord && answersInput!="" && index2<0){
        score++;
tryUse.innerHTML= score;
    }
    
if (test.indexOf("_")===-1 ||answersInput === completeWord){
    document.getElementById("endGame").style.display = "block";
    document.getElementById("endGame").innerHTML ="Bravo ! Vous avez trouvé le mot! Cliquer sur reset pour recommencer"
    document.getElementById("validate").style.display = "none";
    document.getElementById("reset").style.display = "block";
document.getElementById('answer').style.display= "none";
document.getElementById('label').style.display= "none";



    
    }
    if (score==1){
        document.getElementById("imgHangman").style.backgroundImage= 'url(1.jpg)';
    }
    if (score==2){
        document.getElementById("imgHangman").style.backgroundImage= 'url(2.jpg)';
    }
    if (score==3){
        document.getElementById("imgHangman").style.backgroundImage= 'url(3.jpg)';
    }
    if (score==4){
        document.getElementById("imgHangman").style.backgroundImage= 'url(4.jpg)';
    }
    if (score==5){
        document.getElementById("imgHangman").style.backgroundImage= 'url(5.jpg)';
    }
    if (score==6){
        document.getElementById("imgHangman").style.backgroundImage= 'url(6.jpg)';
    }
    if (score==7){
        document.getElementById("imgHangman").style.backgroundImage= 'url(7.jpg)';
    }
    if (score==8){
        document.getElementById("imgHangman").style.backgroundImage= 'url(8.jpg)';
    }
    if (score==9){
        document.getElementById("imgHangman").style.backgroundImage= 'url(9.jpg)';
    }
    if (score==10){
        document.getElementById("imgHangman").style.backgroundImage= 'url(10.jpg)';
document.getElementById("motATrouver").style.display = "none";
        wordToFind.style.display = "none";
 document.getElementById("endGame").style.display = "block";
 document.getElementById("endGame").innerHTML ="Vous avez perdu le mot était : " + completeWord + "."+ " Cliquez sur reset pour recommencer";
 document.getElementById("validate").style.display = "none";
 document.getElementById("reset").style.display = "block";
document.getElementById('answer').style.display= "none";
document.getElementById('label').style.display= "none";




    }
    
document.getElementById('answer').value = "";

})

function createArray(){
    wordToFind.style.display = "block";
    document.getElementById("motATrouver").style.display = "block";
    document.getElementById('answer').style.display= "block";
    document.getElementById('label').style.display= "block";

    score = 0;
tryUse.innerHTML= score;
document.getElementById("imgHangman").style.backgroundImage= 'url(0.jpg)';
    array3 = [];
    test = [];
    answerGiven= [];
    document.getElementById("answerGiven").innerHTML= answerGiven;
    document.getElementById("validate").disabled = false;
    word = wordHidden[Math.floor(Math.random() * wordHidden.length)];
 document.getElementById("buttonStart").disabled = "true";

   array2 =  word.split('');
   for (let i=0;i<array2.length;i++){
       array3.push(array2[i].toUpperCase());
   }
   test =array3.map(element => element="_");
 completeWord = array3.join("");


   wordToFind.innerHTML = test.join('');
   if (document.getElementById('validate').style.display ==="none"){
       document.getElementById('validate').style.display ="block"
       document.getElementById('reset').style.display = "none"
 document.getElementById("endGame").style.display = "none";



   }
 }
