StartNewGame(GameNumber){
    /* Start the game with the first movie in the list */
    for(GameNumber ; GameNumber < 6 ; GameNumber++){
            /* Make blanks based off of number of letters in movie title */ 
            for (let NumberOfBlanks = Movie[GameNumber].length ; NumberOfBlanks > 0 ; NumberOfBlanks-1){
                "_ " ;
            }
            let GuessesLeft = 5 ;
            let LettersLeft = NumberOfBlanks ;
            let WrongGuesses = "" ;
            if(GuessesLeft > 0 && LettersLeft > 0){
                /* Make the player guess a letter */
                const key = event.key ;
                /* If the player's guess is in word, then replace all appropriate underscores in the word with keys */
                if (Movie[GameNumber]){
                }
                /* If the player's guess isn't in the world, add that letter to the wrong pile and subtract one guess */
                else{
                    WrongGuesses = console.log(" " ${key} " " ${WrongGuesses}) ;
                    GuessesLeft = GuessesLeft - 1 ;
                    }   
            else if (LettersLeft = 0){
            /* Show the picture for that movie, increase one win and start a new game */
                Wins = Wins + 1 ;
                display.Picture[GameNumber] ;
                alert("You guessed right! Press g to continue...")
                const NextGame = event.key ; 
                while (NextGame !== "g"){
                    if(NextGame === "g"){
                        GameNumber = GameNumber + 1 ;
                    }
                    else{
                        alert("Please press g to continue...")
                    }
                }
            else if (GuessesLeft = 0){
                wins = Wins + 0 ;
            }
            }
    }               
            

    
}