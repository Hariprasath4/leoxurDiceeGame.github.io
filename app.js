//diceeGameLogic
//by - Hariprasath M
//lastModifiedBy - 202206111230

// activating the refresh button
const button = document.querySelector('.reload .btn');

const refreshButton = () => {
    location.reload();
}

button.addEventListener('click',refreshButton)


//get the random value from 1 to 6 and stored in two variables:
// setTimeout("location.reload(true);", 1000);
// alert('start')
const randomNumber1 = Math.floor(Math.random() * 6)+1;
const randomNumber2 = Math.floor(Math.random() * 6)+1;
console.log(randomNumber1);
console.log(randomNumber2);


//seleting an element from the document and manipulating them with randomNumber variable
//Changing the images by calling them in the .setAttribute method.
document.querySelectorAll('img.img')[0].setAttribute("src",`images/dice${randomNumber1}.png`);
document.querySelectorAll('img.img')[1].setAttribute("src",`images/dice${randomNumber2}.png`);

//condition, if the player wins, there name will appears.
if (randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML = '🚩 Player 1 wins';
} else if (randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML = 'Player 2 wins 🚩';
} else document.querySelector('h1').innerHTML = 'Draw!';



