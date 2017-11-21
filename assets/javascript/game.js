//Crystal Game - turned into a Peanuts Game


//This game is a variation on the Crystals Game. I changed the game so that users' goal is to reduce the randomly generated number
//by clicking one of the Peanuts characters to get the total to Zero "Days Left".  
//I've set up all the variables needed for the game 



//Variables for keeping track of the game
var wins = 0;
var loses = 0;
var total;
var charliebrownVal;
var lucyVal;
var snoopyVal;
var linusVal;



//Using document.ready to load the game!
$(document).ready(function () {
    console.log("ready!");

    //Need to set total as a global variable so that both loadGame and playGame can use it//
    function totalizer(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $('.characters').on("click", function () {
        var thisId = $(this).attr('id');

        if (thisId === "charliebrown") {
            total = total - charliebrownVal;
            console.log(total);
            console.log(charliebrownVal);
            $('#daysLeft').html(total);

        } else if (thisId === "lucy") {
            total = total - lucyVal;
            console.log(total);
            console.log(lucyVal);
            $('#daysLeft').html(total);

        } else if (thisId === "snoopy") {
            total = total - snoopyVal;
            console.log(total);
            console.log(snoopyVal);
            $('#daysLeft').html(total);

        } else if (thisId === "linus") {
            total = total - linusVal;
            console.log(total);
            console.log(linusVal);
            $('#daysLeft').html(total);

        } else {
            alert("Something Went Way Wrong");
        }
        checkWin();
    });

    //loadGame sets up the game with days left total, wins totals, loses totals. 
    function loadGame() {

        total = totalizer(19, 120);
        console.log(total);

        $("#daysLeft").html(total);
        $("#wins").html('<h1>' + "Wins: " + wins + '</h1>');
        console.log("here are my " + wins + " wins");
        $("#loses").html('<h1>' + "Loses: " + loses + '</h1>');
        console.log("here are my " + loses + " loses");
    }


    //Starts the game on click of any of the peanuts characters
    function playGame() {

        //Setting up the variables for the the four Peanuts Characters!
        charliebrownVal = Math.floor(Math.random() * 11) + 1;
        lucyVal = Math.floor(Math.random() * 11) + 1;
        snoopyVal = Math.floor(Math.random() * 11) + 1;
        linusVal = Math.floor(Math.random() * 11) + 1;

        //Just checking to make sure the characters have values
        console.log("Charlie Brown's Value " + charliebrownVal);
        console.log("Lucys's Value " + lucyVal);
        console.log("Snoopy's Value " + snoopyVal);
        console.log("Linus's Value " + linusVal);
    }

    loadGame();
    playGame();

    function checkWin() {
        if (total > 0) {
            return;
        } else if
                (total === 0) {
            wins++;
            $('#wins').html("Wins: " + wins);
            console.log("You Win!");
            alert("You Win!");
            // reset();
            loadGame();
            playGame();


        } else if
                (total < 0) {
            console.log("You Lose!");
            loses++;
            $('#loses').html("Loses: " + loses);
            alert("You Didn't Win, but Please Play Again")
            // reset();
            loadGame();
            playGame();
        }
    }

 
});
