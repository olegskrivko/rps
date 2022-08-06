let rock = document.querySelector('.rock');
let rockImg = document.querySelector('.rock-img');
let paper = document.querySelector('.paper');
let paperImg = document.querySelector('.paper-img');
let scissors = document.querySelector('.scissors');
let scissorsImg = document.querySelector('.scissors-img');

let result = document.querySelector('.result');

let computer = document.querySelector('.computer');
let play = document.querySelector('.play');
let reset = document.querySelector('.btn-reset');
let computerImg = document.querySelector('.computer-img')

let pcScore =  document.querySelector('.pc-score');
let userScore =  document.querySelector('.user-score');
let drawScore =  document.querySelector('.draw-score');
let raundScore =  document.querySelector('.raund-score');

let userPoints = 0;
let pcPoints = 0;
let drawPoints = 0;
let raundPoints = 0;


// 0 = rock, 1 = paper, 2 = scissors

// ROCK
rock.addEventListener('click', () => {
    console.log('Your choice is Rock!');
    // rock.classList.add('btn-click-effect');
    computer.style.transform = 'rotateY(3.142rad)';
    paperImg.classList.add('opacity');
    scissorsImg.classList.add('opacity');
    if (getRandomInt(3) == 0) {
        console.log('Computer`s choice Rock!');
        computerImg.setAttribute('src', 'rock.png');
        result.innerHTML = 'It`s a draw!';
        console.log('It`s a draw!');
        drawPoints ++;
        
    } else if (getRandomInt(3) == 1) {
        console.log('Computer`s choice Paper!');
        computerImg.setAttribute('src', 'paper.png');
        result.innerHTML = 'Computer wins!';
        console.log('Computer wins!');
        pcPoints ++;
        // p.innerHTML = 0;
    } else { 
        console.log('Computer`s choice Scissors!');
        computerImg.setAttribute('src', 'scissors.png');
        result.innerHTML = 'You win!';
        console.log('You win!');
        userPoints ++;
    };
    raundPoints ++;
    pcScore.innerHTML = pcPoints;
    userScore.innerHTML = userPoints;
    drawScore.innerHTML = drawPoints;
    raundScore.innerHTML = raundPoints;
    
    function removeOpacity() {
        computerImg.setAttribute('src', 'question-mark.png');
        paperImg.classList.remove('opacity');
        scissorsImg.classList.remove('opacity');
        result.innerHTML = '';
        computer.style.transform = 'rotateY(0rad)';
    };
    
    setTimeout(removeOpacity, 1000);
});



// PAPER
paper.addEventListener('click', () => {
    computer.style.transform = 'rotateY(3.142rad)';
    rockImg.classList.add('opacity');
    scissorsImg.classList.add('opacity');
    console.log('Your choice is Paper');
    if (getRandomInt(3) == 0) {
        console.log('Computer`s choice Rock!');
        computerImg.setAttribute('src', 'rock.png');
        result.innerHTML = 'You win!';
        console.log('You win!');
        userPoints ++;
    } else if (getRandomInt(3) == 1) {
        console.log('Computer`s choice Paper!');
        computerImg.setAttribute('src', 'paper.png');
        result.innerHTML = 'It`s a draw!';
        console.log('It`s a draw!');
        drawPoints ++;
    } else { 
        console.log('Computer`s choice Scissors!');
        computerImg.setAttribute('src', 'scissors.png');
        result.innerHTML = 'Computer wins!';
        console.log('Computer wins!');
        pcPoints ++;
    };

    raundPoints ++;
    pcScore.innerHTML = pcPoints;
    userScore.innerHTML = userPoints;
    drawScore.innerHTML = drawPoints;
    raundScore.innerHTML = raundPoints;

    function removeOpacity() {
        computerImg.setAttribute('src', 'question-mark.png');
        rockImg.classList.remove('opacity');
        scissorsImg.classList.remove('opacity');
        result.innerHTML = '';
        computer.style.transform = 'rotateY(0rad)';
    };

    setTimeout(removeOpacity, 1000);
});
// SCISSORS
scissors.addEventListener('click', () => {
    computer.style.transform = 'rotateY(3.142rad)';
    rockImg.classList.add('opacity');
    paperImg.classList.add('opacity');
    console.log('Your choice is Scissors');
    if (getRandomInt(3) == 0) {
        console.log('Computer`s choice Rock!');
        computerImg.setAttribute('src', 'rock.png');
        result.innerHTML = 'Computer wins!';
        console.log('Computer wins!');
        pcPoints ++;
    } else if (getRandomInt(3) == 1) {
        console.log('Computer`s choice Paper!');
        computerImg.setAttribute('src', 'paper.png');
        result.innerHTML = 'You win!';
        console.log('You win!');
        userPoints ++;
    } else { 
        console.log('Computer`s choice Scissors!');
        result.innerHTML = 'It`s a draw!';
        computerImg.setAttribute('src', 'scissors.png')
        console.log('It`s a draw!');
        drawPoints ++;
    };

    raundPoints ++;
    pcScore.innerHTML = pcPoints;
    userScore.innerHTML = userPoints;
    drawScore.innerHTML = drawPoints;
    raundScore.innerHTML = raundPoints;

    function removeOpacity() {
        computerImg.setAttribute('src', 'question-mark.png');
        rockImg.classList.remove('opacity');
        paperImg.classList.remove('opacity');
        result.innerHTML = '';
        computer.style.transform = 'rotateY(0rad)';
        
    };
    setTimeout(removeOpacity, 1000);
});

// 0 = rock, 1 = paper, 2 = scissors
function getRandomInt(max) {
    let result = Math.floor(Math.random() * max);
    if (result == 0) {
        // console.log('PC choice is rock');
        return result
    } 
    else if (result == 1) {
        // console.log('PC choice is paper');
        return result
    } 
    else {
        // console.log('PC choice is scissors');
        return result
    }
  }

  reset.addEventListener('click', () => {
    userPoints = 0;
    pcPoints = 0;
    drawPoints = 0;
    raundPoints = 0;
    pcScore.innerHTML = pcPoints;
    userScore.innerHTML = userPoints;
    drawScore.innerHTML = drawPoints;
    raundScore.innerHTML = raundPoints;

  })