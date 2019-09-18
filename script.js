function computerPlay(){
    let selection = Math.floor(Math.random() * (2) + 1);
    console.log(selection);
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
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            return "It's a tie!"
        } else if(computerSelection == "paper"){
            return "You lose! Paper beats rock.";
        } else if (computerSelection == "scissors"){
            return "You win! Rock beats scissors";
        } else{
            return "Something went wrong";
        }
    } else if (playerSelection == "paper"){
        if(computerSelection == "rock"){
            console.log("You win! Paper beats rock!");
            return "You win! Paper beats rock!"
        } else if(computerSelection == "paper"){
            console.log("It's a tie.");
            return "It's a tie.";
        } else if (computerSelection == "scissors"){
            console.log("You lose. Scissors beats paper");
            return "You lose. Scissors beats paper";
        } else{
            return "Something went wrong"
        }
    } else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            console.log("You lose. Rock beats scissors.");
            return "You lose. Rock beats scissors."
        } else if(computerSelection == "paper"){
            console.log("You win! Scissors beats paper");
            return "You win! Scissors beats paper";
        } else if (computerSelection == "scissors"){
            console.log("It's a tie.");
            return "It's a tie.";
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
        if(playRound(prompt("Choose rock, paper, or scissors"), cpSelect).charAt(4) == "w"){
            wins++;
        } else if(playRound(prompt("Choose rock, paper, or scissors"), cpSelect).charAt(4) == "l"){
            losses++;
        } else if(playRound(prompt("Choose rock, paper, or scissors"), cpSelect).charAt(0) == "t"){
            console.log("Tie")
        }else{
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