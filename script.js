alert("enter game() in console to play Rock, Paper, Scissors.")

function computerPlay(){ //Determines if the computer will select rock, paper, or scissors randomly.
    let selection = Math.floor(Math.random() * (2) + 1);
    switch(selection){
        case 3:
            selection = "rock";
            break;
        case 2:
            selection = "paper";
            break;
        case 1:
            selection = "scissors";
            break;
        default:
            selection = "Error in computerPlay"
            break
    }
    return selection;
}
function playRound(playerSelection, computerSelection){ //deterimes who wins (Computer or Human) round based on arguements passed (rock, paper, or scissors) 
    playerSelection = playerSelection.toLowerCase(); //Make sure isn't case sensitive
    computerSelection = computerSelection;
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            console.log("It's a tie");
            return "tie" //Each return case from here down will include either "tie", "loss", or "win"
        } else if(computerSelection == "paper"){
            console.log("You lose. Paper beats rock");
            return "loss";
        } else if (computerSelection == "scissors"){
            console.log("You win! Rock beats scissors!");
            return "win";
        } else{
            return "Something went wrong";
        }
    } else if (playerSelection == "paper"){
        if(computerSelection == "rock"){
            console.log("You win! Paper beats rock!");
            return "win"
        } else if(computerSelection == "paper"){
            console.log("It's a tie.");
            return "tie";
        } else if (computerSelection == "scissors"){
            console.log("You lose. Scissors beats paper");
            return "loss";
        } else{
            return "Something went wrong"
        }
    } else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            console.log("You lose. Rock beats scissors.");
            return "loss"
        } else if(computerSelection == "paper"){
            console.log("You win! Scissors beats paper");
            return "win";
        } else if (computerSelection == "scissors"){
            console.log("It's a tie.");
            return "tie";
        } else{
            return "Something went wrong";
        }
    } else{
        return "Something went really wrong";
    }
}
function game(){ //sets up game of rock paper scissors with 5 rounds to play. Use this function in console to play game.
    let wins = 0; //tally wins and losses for end of game
    let losses = 0;
    for(let x = 0; x < 5; x++){ //5 rounds
        let cpSelect = computerPlay();
        let gameResult = playRound(prompt("Choose rock, paper, or scissors"), cpSelect);
        if(gameResult == "win"){
            wins++;
        } else if(gameResult == "loss"){
            losses++;
        } else if(gameResult == "tie"){
            //do nothing...
        } else{
            console.log("error with win/loss")
        }
    }
    if(wins > losses){
        alert("You won the game!\n" + wins + " Wins | " + losses + " losses.");
        return "You won the game!\n" + wins + " Wins | " + losses + " losses."; //Also returns result so game result is printed to the console.
    } else if(losses > wins){
        alert ("You lost the game\n" + wins + " Wins | " + losses + " losses.");
        return "You lost the game\n" + wins + " Wins | " + losses + " losses.";
    } else{
        alert ("Tie\n" + wins + " Wins | " + losses + " losses.");
        return "Tie\n" + wins + " Wins | " + losses + " losses.";
    }
}