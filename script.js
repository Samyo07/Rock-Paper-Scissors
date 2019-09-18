function computerPlay(){
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
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase(); //Make sure isn't case sensitive
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            console.log("It's a tie");
            return "tie"
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
function game(){
    let wins = 0;
    let losses = 0;
    for(let x = 0; x < 5; x++){
        let cpSelect = computerPlay();
        let w = playRound(prompt("Choose rock, paper, or scissors"), cpSelect);
        if(w == "win"){
            wins++;
        } else if(w == "loss"){
            losses++;
        } else if(w == "tie"){
            //do nothing...
        } else{
            console.log("error with win/loss")
        }
    }
    if(wins > losses){
        alert("You won the game!\n" + wins + " Wins | " + losses + " losses.");
    } else if(losses > wins){
        return ("You lost the game\n" + wins + " Wins | " + losses + " losses.");
    } else{
        return "Tie\n" + wins + " Wins | " + losses + " losses.";
    }
}