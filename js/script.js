
// Email

// prendo il campo input
const inputMail= document.getElementById('input-mail');
const btnInput= document.getElementById('btn-mail');
btnInput.addEventListener('click', checkMail);
const alert= document.querySelector('.alert');

// array email utente iscritto
let dbUserMail = ['pippo@disney.com', 'paperino@disney.com', 'minnie@dinsey.com', 'paperina@dinsey.com', 'topolino@dinsey.com', 'michele@boolean.com'];

//utilities
let flag;




// stampo risultato presente

// stampo risultato non presente chiedendo di iscriversi


// function checkMail

function checkMail(){
    let inputUser = inputMail.value;
    console.log(inputUser);
    // controllo email inserita all'interno dell'input
    for (let i = 0; i < dbUserMail.length-1; i++) {
    const user = dbUserMail[i];
    
    if (user.toLowerCase() === inputUser.toLowerCase()) {
        flag = true;
        console.log('Trovato');
    } else{
        console.log('non trovato');
    }
}
}