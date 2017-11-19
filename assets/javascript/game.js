//Crystal Game - turned into a Peanuts Game






//To generate the random number (daysleft)//




//Vars to generated
// daysLeft(19, 120);
// console.log(daysLeft(19, 120));
// var charliebrown = Math.floor(Math.random() * 11) + 1;
// var lucy = Math.floor(Math.random() * 11) + 1;
// var snoopuy = Math.floor(Math.random() * 11) + 1;
// var linus = Math.floor(Math.random() * 11) + 1;

//Variables for keeping track of the game
var wins = 0;
var loses = 0;
var daysGuessed = 0;





//Create the game Setup here
//Populate the DOM with a randomly generated daysleft
//Populate the DOM 

//So using document.ready to load the game!//


$(document).ready(function () {
    console.log("ready!");

    function daysLeft(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var total = daysLeft(19, 120); 


    function loadGame() {
        
        console.log(total);
        $("#daysLeft").html(total);
        console.log("how many" + '#daysleft');
        $("#wins").html('<h1>' + "Wins: " + wins + '</h1>');
        console.log("here are my " + wins + " wins");
        $("#loses").html('<h1>' + "Loses: " + loses + '</h1>');
        $("#daysGuessed").html('<h1>' + "Days Left in School: " + daysGuessed + '</h1>');
    }

    loadGame();

    function playGame() {
        var charliebrownVal = Math.floor(Math.random() * 11) + 1;
        var lucyVal = Math.floor(Math.random() * 11) + 1;
        var snoopyVal = Math.floor(Math.random() * 11) + 1;
        var linusVal = Math.floor(Math.random() * 11) + 1;

        console.log("Charlie Brown's Value " + charliebrownVal);
        console.log("Lucys's Value " + lucyVal);
        console.log("Snoopy's Value " + snoopyVal);
        console.log("Linus's Value " + linusVal);
        $('.characters').on("click", function () {
            var thisId = $(this).attr('id');
        if(thisId=== "charliebrown") {
            total = total-charliebrownVal;
            console.log(total);
            console.log(charliebrownVal);
            $('#daysLeft').html(total);
        } else if(thisId=== "lucy") {
            total = total-lucyVal;
            console.log(total);
            console.log(lucyVal);
            $('#daysLeft').html(total);
        } else if(thisId=== "snoopy") {
            total = total-snoopyVal;
            console.log(total);
            console.log(snoopyVal);
            $('#daysLeft').html(total);
        } else if(thisId=== "linus") {
            total = total-linusVal;
            console.log(total);
            console.log(linusVal);
            $('#daysLeft').html(total);
        } 
        
            
            
        })
    }

    playGame();








    // function checkWin() {

    // }






    // function checkLoss()    {

    // }








    // function reset()    {

    // }

});