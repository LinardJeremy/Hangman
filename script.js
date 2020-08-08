let wordHidden = [
    "Javascript",
    "HTML",
    "PHP",
    "Becode",
    "Coding",
    "CSS",
    "Programmeur",
    "Web",
    "Internet"
]
let completeWord = "";
let word ="";
let randWord = Math.random()*10;
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

document.getElementById("buttonStart").addEventListener('click',function(){
    // Selection un element aléatoire dans le tableau des noms;
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
})
document.getElementById('validate').addEventListener('click',function(){
    let answersInput = document.getElementById('answer').value.toUpperCase();
let index = array3.indexOf(answersInput);
    console.log(completeWord);
    if (answersInput === completeWord){
        wordToFind.innerHTML = completeWord;
    }
    if (index>=0){
        test[index]=array3[index];
   wordToFind.innerHTML = test.join('');
        array3[index]= null;
    }
    if (index<0){
        score++;
tryUse.innerHTML= score;

    }
    if (test.indexOf("_")===-1){
        document.getElementById("imgHangman").style.backgroundColor="red";
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
 document.getElementById("endGame").innerHTML ="Vous avez perdu désolé le mot était : " + completeWord;
    }

})
