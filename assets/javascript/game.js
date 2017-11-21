//Crystal Game - turned into a Peanuts Game


//This game is a variation on the Crystals Game. I changed the game so that users' goal is to reduce the randomly generated number
//by clicking one of the Peanuts characters to get the total to Zero "Days Left".  
//I've set up all the variables needed for the game 



//Variables for keeping track of the game
var wins = 0;
var loses = 0;
var total = 0;


//Using document.ready to load the game!
$(document).ready(function () {
    console.log("ready!");

    //Need to set total as a global variable so that both loadGame and playGame can use it//
    function total(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    total = total(19, 120);
    console.log(total);


    //loadGame sets up the game with days left total, wins totals, loses totals. 
    function loadGame() {

        $("#daysLeft").html(total);
        $("#wins").html('<h1>' + "Wins: " + wins + '</h1>');
        console.log("here are my " + wins + " wins");
        $("#loses").html('<h1>' + "Loses: " + loses + '</h1>');
        console.log("here are my " + loses + " loses");


    }


    //Starts the game on click of any of the peanuts characters
    function playGame() {

        //Setting up the variables for the the four Peanuts Characters!
        var charliebrownVal = Math.floor(Math.random() * 11) + 1;
        var lucyVal = Math.floor(Math.random() * 11) + 1;
        var snoopyVal = Math.floor(Math.random() * 11) + 1;
        var linusVal = Math.floor(Math.random() * 11) + 1;

        //Just checking to make sure the characters have values
        console.log("Charlie Brown's Value " + charliebrownVal);
        console.log("Lucys's Value " + lucyVal);
        console.log("Snoopy's Value " + snoopyVal);
        console.log("Linus's Value " + linusVal);

        //Uses "this" to assign the click on each character.  
        $('.characters').on("click", function () {
            var thisId = $(this).attr('id');
            if (thisId === "charliebrown") {
                total = total - charliebrownVal;
                console.log(total);
                console.log(charliebrownVal);
                checkWin();
                $('#daysLeft').html(total);
            } else if (thisId === "lucy") {
                total = total - lucyVal;
                console.log(total);
                console.log(lucyVal);
                checkWin();
                $('#daysLeft').html(total);
            } else if (thisId === "snoopy") {
                total = total - snoopyVal;
                console.log(total);
                console.log(snoopyVal);
                checkWin();
                $('#daysLeft').html(total);
            } else if (thisId === "linus") {
                total = total - linusVal;
                console.log(total);
                console.log(linusVal);
                checkWin();
                $('#daysLeft').html(total);
            } else {
                alert("Something Went Way Wrong");
            }
        });
    }

    loadGame();
    playGame();

    // Checks the game to see if the user wins if the total equals Zero and tells the user they lose if they below Zero.  
    // Still not working correct because the user can keep clicking characters and game keeps running. Does update the wins and loses, but doesn't reset the Days Left Number.
    function checkWin() {
        if (total > 0) {
            return;
        } else {
            if (total === 0) {
                wins++;
                $('#wins').html("Wins: " + wins);
                console.log("You Win!");
                alert("You Win!");
                // loadGame();
                reset();

            } else {
                loses++;
                console.log("You Lose!");
                $('#loses').html("Loses: " + loses);
                // loadGame();
                reset();

            }
        }
    }

    function reset()  {
        loadGame();
    }
});
