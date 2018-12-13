$(document).ready(function(){

    var targetNumber = Math.floor((Math.random() * 100) +1);

    //Random number for each jewel between 1-12
    var num1 = Math.floor(Math.random() *12 + 1);
    var num2 = Math.floor(Math.random() *12 + 1);
    var num3 = Math.floor(Math.random() *12 + 1);
    var num4 = Math.floor(Math.random() *12 + 1);

    var userTotal = 0;
    var totalWins = 0;
    var totalLosses = 0;

    $("#number-to-guess").text(targetNumber);
    $("#totalWins").text(totalWins);
    $("#totalLosses").text(totalLosses);

    function reset() {
        targetNumber = Math.floor((Math.random() * 100) +1);
        console.log(targetNumber);
        $("#number-to-guess").text(targetNumber);
        num1 = Math.floor(Math.random() *12 + 1);
        num2 = Math.floor(Math.random() *12 + 1);
        num3 = Math.floor(Math.random() *12 + 1);
        num4 = Math.floor(Math.random() *12 + 1);
        userTotal = 0;
        $("#totalPoints").text(userTotal);
    }
    
    // Wins
    function winner() {
        alert("Winner Winner Chicken Dinner!!");
        totalWins++;
        $("#totalWins").text(totalWins);
        reset();
    }

    // Losses
    function loser() {
        alert("Sometimes you lose. Nothing you can do but admit it! Better luck next time!!");
        totalLosses++;
        $("#totalLosses").text(totalLosses);
        reset();
    }

    // On click event to crystals
    $("#crystal1").on("click", function onClick() {
        userTotal = userTotal + num1;
        
        $("#totalPoints").text(userTotal, targetNumber);
        console.log('onClick', userTotal, targetNumber);

        if (userTotal === targetNumber) {
            winner()
        } else if (userTotal > targetNumber) {
            loser()
        }
    });

    $("#crystal2").on("click", function onClick() {
        userTotal = userTotal + num2;
        
        $("#totalPoints").text(userTotal, targetNumber);
        console.log('onClick', userTotal, targetNumber);

        if (userTotal === targetNumber) {
            winner()
        } else if (userTotal > targetNumber) {
            loser()
        }
    });

    $("#crystal3").on("click", function onClick() {
        userTotal = userTotal + num3;
        
        $("#totalPoints").text(userTotal, targetNumber);
        console.log('onClick', userTotal, targetNumber);

        if (userTotal === targetNumber) {
            winner()
        } else if (userTotal > targetNumber) {
            loser()
        }
    });

    $("#crystal4").on("click", function onClick() {
        userTotal = userTotal + num4;
        
        $("#totalPoints").text(userTotal, targetNumber);
        console.log('onClick', userTotal, targetNumber);

        if (userTotal === targetNumber) {
            winner()
        } else if (userTotal > targetNumber) {
            loser()
        }
    });

});