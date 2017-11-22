//Crystal Game - turned into a Peanuts Game


//This game is a variation on the Crystals Game. I changed the game so that users' goal is to reduce the randomly generated number
//by clicking one of the Peanuts characters to get the total to Zero "Days Left".  




//Variables for keeping track of the game
var wins = 0;
var loses = 0;
var total;
var charliebrownVal;
var lucyVal;
var snoopyVal;
var linusVal;
var context;



//Using document.ready to load the game!
$(document).ready(function () {
    console.log("ready!");
    
    //Adding functionality so that I can provide two different games with two different difficulty levels.  
    $('#kidsCharacters, #adultsCharacters').hide();

    $('#kids, #adults').on("click", function() {
        reset($(this).attr('id'))
    });
    //Adults version has all four characters to choose from plus the full range of numbers to guess from. 
    function adultsGame() {
        loadGame();
        playGame();
        $('#kidsCharacters, #adultsCharacters').show();
    }
    //Kids version has only two characters to choose from with much smaller total number and smaller character values. 
    function kidsGame() {
        total = totalizer(9, 20);
        console.log(total);
        displaytoDom();
        snoopyVal = Math.floor(Math.random() * 6) + 1;
        linusVal = Math.floor(Math.random() * 6) + 1;
        $('#kidsCharacters').show();
    }
    //Created this function for everything that is pushed to the DOM
    function displaytoDom() {
        $("#daysLeft").html(total);
        $("#wins").html('<h1>' + "Wins: " + wins + '</h1>');
        console.log("here are my " + wins + " wins");
        $("#loses").html('<h1>' + "Loses: " + loses + '</h1>');
        console.log("here are my " + loses + " loses");
    }


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
        displaytoDom();
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

    function checkWin() {
        if (total > 0) {
            return;
        } else if
                (total === 0) {
            wins++;
            $('#wins').html("Wins: " + wins);
            console.log("You Win!");
            alert("You Win!");
            reset(context);

        } else if
                (total < 0) {
            console.log("You Lose!");
            loses++;
            $('#loses').html("Loses: " + loses);
            alert("You Didn't Win, but Please Play Again")
            reset(context);
        }
    }
    //Use of switch, case, and break were by the recommendation of my tutor.  This allowed me to create two versions of the game
    //and utilize the reset function to indicate which game the user is playing.  
    function reset(that)    {

        switch (that) {
            case "kids":
                kidsGame();
                context = "kids";
                break;
            case "adults":
                adultsGame();
                context = "adults";
                break;
        } 
    }

});
