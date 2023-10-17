
// Email

// prendo il campo input
const inputMail = document.getElementById('input-mail');
const btnInput = document.getElementById('btn-mail');
btnInput.addEventListener('click', checkMail);
const alert = document.querySelector('.alert');
// div col risultato
const resultMail = document.getElementById('result-mail');


// array email utente iscritto
let dbUserMail = [
    'pippo@disney.com',
    'paperino@disney.com',
    'minnie@dinsey.com',
    'paperina@dinsey.com',
    'topolino@dinsey.com',
    'michele@boolean.com'
];

//utilities


// stampo risultato presente

// stampo risultato non presente chiedendo di iscriversi


// function checkMail

function checkMail() {
    resultMail.classList.remove('alert-danger');
    resultMail.classList.remove('alert-success');
    resultMail.classList.add('d-none');
    let inputUser = inputMail.value;
    let bg, text;
    let flag = false;
    // confronto email inserita all'interno dell'input
    for (let i = 0; i < dbUserMail.length; i++) {
        const user = dbUserMail[i];
        if (user.toLowerCase() === inputUser.toLowerCase()) {
            flag = true;
        }
    }
    if (flag) {
        console.log('Trovato');
        bg = 'alert-success';
        text = ` Utente registrato. 
        Benvenuto  "${inputUser}"`;
    } else {
        console.log('non trovato');
        bg = 'alert-danger';
        text = ` Utente "${inputUser}" NON registrato. 
        Registrati per accedere `;
    }
    resultMail.classList.add(bg);
    resultMail.innerText = text;
    resultMail.classList.remove('d-none');


}

//gioco dei dadi

const btnDice = document.getElementById('btn-dice');
btnDice.addEventListener('click', playDice);

// prendo i div col risultato
const myResult = document.getElementById('my-result-dice');
const cpuResult = document.getElementById('cpu-result-dice');

function playDice() {
    myResult.classList.remove('text-success');
    myResult.classList.remove('text-danger');
    myResult.classList.remove('text-secondary');
    cpuResult.classList.remove('text-danger');
    cpuResult.classList.remove('text-secondary');
    cpuResult.classList.remove('text-success');
    const diceArr = [
        `<i class="fa-solid fa-dice-one fa-10x"></i>`,
        `<i class="fa-solid fa-dice-two fa-10x"></i>`,
        `<i class="fa-solid fa-dice-three fa-10x"></i>`,
        `<i class="fa-solid fa-dice-four fa-10x"></i>`,
        `<i class="fa-solid fa-dice-five fa-10x"></i>`,
        `<i class="fa-solid fa-dice-six fa-10x"></i>`
    ];



    let num1 = getRndInteger(1, 6);
    let num2 = getRndInteger(1, 6);
    let color1, color2, text;
    console.log(num1);
    console.log(num2);
    if (num1 > num2) {
        console.log('Hai Vinto');
        color1 = 'text-success';
        color2 = 'text-danger';
    } else if (num2 > num1) {
        console.log('Hai Perso');
        color1 = 'text-danger';
        color2 = 'text-success';
    } else {
        console.log('Pareggio');
        color1 = 'text-secondary'
        color2 = 'text-secondary';
    }
    myResult.classList.add(color1);
    cpuResult.classList.add(color2);
    myResult.innerHTML = diceArr[num1 - 1];
    cpuResult.innerHTML = diceArr[num2 - 1];
    // faccio apparire il risultato
    const diceResult = document.getElementById('result-dice');
    diceResult.classList.remove('d-none');


}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}