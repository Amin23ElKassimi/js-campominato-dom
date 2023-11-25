
// --------- Functions ---------

// Funzione 01       funzione che genera un nuovo elemento quadrato
function generateSquare() {
        const squareElement = document.createElement('div');
        squareElement.classList.add('square');
        return squareElement;
}
// Funzione 03       funzione che genera un nuovo elemento quadrato
function generateSquare2() {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square2');
    return squareElement;
}
// Funzione 03       funzione che genera un nuovo elemento quadrato
function generateSquare3() {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square3');
    return squareElement;
}
// Funzione 04       funzione che genera un nuovo numero
function generaNumeroRandomicoUnico(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// --------- Tags & Arrays
// --------- Tags & Arrays ---------

// recupero il parent all'interno del quale voglio inserire i miei elementi
const mainContentEl = document.querySelector('main .main-content');
// Play button
const play = document.getElementById('play');
// Score 
const outScore = document.getElementById('score');

// Array listaCoiNumeriGeneratiFinOra 
let listaCoiNumeriGeneratiFinOra = [];

// ######################## Algoritmi ########################


play.addEventListener('click', function(){
    // RESET
    mainContentEl.innerHTML = '';

    while(listaCoiNumeriGeneratiFinOra.length > 0) {
        listaCoiNumeriGeneratiFinOra.pop();
    }

    // Difficolta
    const difficulty = parseInt(document.getElementById('inDiffic').value);
    
  

    // Scores User
    let scorePoints = 0;

    if (difficulty === 1) {
        // # per 100 iterazioni...
        for (let i = 1 ; i <= 100 ; i++){

            // Funzione
            const currentSquare = generateSquare();

            // # inizializzo il suo contenuto per poterlo utilizzare anche piu' avanti
            const squareContent = i;
        
            // # aggiungo il contenuto all'elemento che voglio popolare
            currentSquare.innerHTML += `<span> ${squareContent} </span>`;
        
            // % quando clicco su una di queste celle
            currentSquare.addEventListener('click', function(){
                // % metto o tolgo la classe css clicked allo stesso elemento
                currentSquare.classList.toggle('clicked');
                // In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati:
                // - abbiamo calpestato una bomba
                // - la cella si colora di rosso e la partita termina.
                if (listaCoiNumeriGeneratiFinOra.includes(squareContent)) {
                    mainContentEl.innerHTML = '';
                    currentSquare.classList.add('bg-danger');
                    alert('Bomba! Game over!');
                    scorePoints = 0;
                    outScore.innerHTML = scorePoints;
                }
                else {
                    scorePoints += 1;
                    console.log(scorePoints);
                    outScore.innerHTML = scorePoints;
                }
            });
        
            // & aggiungo la cella completa all'elemento a cui voglio aggiungerla nel DOM.
            mainContentEl.appendChild(currentSquare);
            
        }
    }
    else if (difficulty === 2) {
        // # per 100 iterazioni...
        for (let i = 1 ; i <= 81 ; i++){
        // # creo un nuovo elemento quadrato, una nuova cella nel mio quadrato
            const currentSquare = generateSquare2();

            // # inizializzo il suo contenuto per poterlo utilizzare anche piu' avanti
            const squareContent = i;
        
            // # aggiungo il contenuto all'elemento che voglio popolare
            currentSquare.innerHTML += `<span> ${squareContent} </span>`;
        
            // % quando clicco su una di queste celle
            currentSquare.addEventListener('click', function(){
                // % metto o tolgo la classe css clicked allo stesso elemento
                currentSquare.classList.toggle('clicked');
                // In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati:
                // - abbiamo calpestato una bomba
                // - la cella si colora di rosso e la partita termina.
                if (listaCoiNumeriGeneratiFinOra.includes(squareContent)) {
                    currentSquare.classList.add('bg-danger');
                    alert('Bomba! Game over!');
                }
            });
        
            // & aggiungo la cella completa all'elemento a cui voglio aggiungerla nel DOM.
            mainContentEl.appendChild(currentSquare);
        }
    }
    else if (difficulty === 3) {
        // # per 100 iterazioni...
        for (let i = 1 ; i <= 49 ; i++){
        // # creo un nuovo elemento quadrato, una nuova cella nel mio quadrato
            const currentSquare = generateSquare3();

            // # inizializzo il suo contenuto per poterlo utilizzare anche piu' avanti
            const squareContent = i;
        
            // # aggiungo il contenuto all'elemento che voglio popolare
            currentSquare.innerHTML += `<span> ${squareContent} </span>`;
        
            // % quando clicco su una di queste celle
            currentSquare.addEventListener('click', function(){
                // % metto o tolgo la classe css clicked allo stesso elemento
                currentSquare.classList.toggle('clicked');
                // In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati:
                // - abbiamo calpestato una bomba
                // - la cella si colora di rosso e la partita termina.
                if (listaCoiNumeriGeneratiFinOra.includes(squareContent)) {
                    currentSquare.classList.add('bg-danger');
                    alert('Bomba! Game over!');
                }
            });
        
            // & aggiungo la cella completa all'elemento a cui voglio aggiungerla nel DOM.
            mainContentEl.appendChild(currentSquare);
        }
    }

    //  Generazione delle bombe in base al numero massimo delle caselle
    let arg2 = 100;
    if ( difficulty === 2 ) {
        arg2 = 81;
    }
    else if ( difficulty === 3 ) {
        arg2 = 49;
    }

    // --------- Algoritmo di conrollo dei numeri all'interno della lista dei numeri generati:---------
    while (listaCoiNumeriGeneratiFinOra.length < 16) {

        // Invocazione Fun. che genera un numero casuale tra 0 e 100
        const numgeneratd = generaNumeroRandomicoUnico(1,arg2);
        // Controllo se il numero generato è già presente nella lista
        if (!listaCoiNumeriGeneratiFinOra.includes(numgeneratd) ) {
            listaCoiNumeriGeneratiFinOra.push(numgeneratd);
        }
    }

});


// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati:
// - abbiamo calpestato una bomba
// - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
