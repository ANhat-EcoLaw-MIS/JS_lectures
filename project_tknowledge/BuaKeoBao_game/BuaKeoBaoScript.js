document.addEventListener("DOMContentLoaded", function() {
    // Improvements: Better logic - Incorporate a "repository" - local storage... (Later);
    const game = document.querySelector('#gameForm');
    const choiceButton = document.querySelectorAll('.choice-button');
    const insertion = document.getElementById('result-insert');
    let computerMove = '';
    let userMove = '';
    let textBox = document.querySelector("small");
    const textBoxDefault = textBox.innerText;
    game.addEventListener('submit', function(event) {whoWin(event)});
    choiceButton.forEach(button=>{
        button.addEventListener('click', function(event){
                textBox.innerText = textBoxDefault + button.innerText;
                computerMove = pickComputerMove();
                userMove= event.target.innerText;
            }
        )
    });

    function pickComputerMove() {
        const randomNumber = Math.random();
        if (randomNumber > 0 && randomNumber < 1 / 3) {
            computerMove = 'Búa';
        } else if (randomNumber < 2 / 3) {
            computerMove = 'Kéo';
        } else {
            computerMove = 'Bao';
        }
        return computerMove;
    }

    function whoWin(event){
        event.preventDefault();
        const default_string = `The user picked: ${userMove} - the computer picked: ${computerMove}`;
        let result = ''
        if (userMove === computerMove) {
            insertion.innerText = default_string + ' ' + 'the result is: Ties';
            return null;
        }

        if (userMove==='Búa'){
            if (computerMove==='Bao'){
                result ='Người dùng thua rồi !';
            }else{
                result ='Người dùng thắng rồi !';
            }
        }
        if (userMove==='Bao'){
            if (computerMove==='Kéo'){
                result = 'Người dùng thua rồi !';
            }else{
                result='Người dùng thắng rồi !';
            }
        }
        if (userMove==='Kéo'){
            if (computerMove==='Bao'){
                result='Người dùng thắng rồi !';
            }else{
                result='Người dùng thua rồi !';
            }
        }

        insertion.innerText = default_string + ' ' + result;

    }
}, false);