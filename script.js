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
let spans = document.createElement('span');

document.getElementById("buttonStart").addEventListener('click',function(){
    // Selection un element aléatoire dans le tableau des noms;
    word = wordHidden[Math.floor(Math.random() * wordHidden.length)];
   array2 =  word.split('');
   for (let i=0;i<array2.length;i++){
       array3.push(array2[i].toUpperCase());
   }
   for (let j=0; j<array3.length;j++){
    spans.innerHTML = "_"
    wordToFind.appendChild(spans);
       
   }
})
document.getElementById('validate').addEventListener('click',function(){
let answersInput = document.getElementById('answer').value.toUpperCase();
let index = array3.indexOf(answersInput);
 let answers = answersInput;
    console.log(answers);
    console.log(array3);
if (index>-1){
    wordToFind.appendChild(spans);
    spans.innerHTML= array3[index];

}


})
