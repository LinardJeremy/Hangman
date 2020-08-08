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
let word ="";
let randWord = Math.random()*10;
array2 =[];
let answers = "";
array3 = [];
let wordToFind = document.getElementById("wordToFind");
let test = [];

document.getElementById("buttonStart").addEventListener('click',function(){
    // Selection un element aléatoire dans le tableau des noms;
    word = wordHidden[Math.floor(Math.random() * wordHidden.length)];
   array2 =  word.split('');
   for (let i=0;i<array2.length;i++){
       array3.push(array2[i].toUpperCase());
   }
   test =array3.map(element => element="_");

   wordToFind.innerHTML = test.join('');
})
document.getElementById('validate').addEventListener('click',function(){
    let answersInput = document.getElementById('answer').value.toUpperCase();
let index = array3.indexOf(answersInput);
    console.log(array3);
    console.log(index);
    if (index>=0){
        test[index]=array3[index];
    }
    console.log(test);
   wordToFind.innerHTML = test.join('');


})
