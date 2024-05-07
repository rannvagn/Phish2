document.addEventListener("DOMContentLoaded", function() {
    
    /* --- INITIAL POP UP --- */

    // pop-up when opening website
    function displayPopUp() {
    var popUp = document.querySelector('.pop-up');
    popUp.style.display = 'block';
    }

    // show pop-up when the page is loaded
    displayPopUp();

    // Get the button element (I'm ready button/start button)
    var startBtn = document.querySelector('.start-game-btn');

    // Add click function to the button
    startBtn.addEventListener('click', function() {
        // Hide pop-up when button is clicked
        var popUp = document.querySelector('.pop-up');
        popUp.style.display = 'none';
    });


    /* --- LAPTOP / FIRST PAGE --- */

    // Get the laptop container element
    var laptopContainer = document.querySelector('.laptop-container');
    
    // Add click function to laptop container
    laptopContainer.addEventListener('click', function() {
        // Show round-1 when laptop container is clicked
        round1.style.display = 'flex';
    });

    // Get the anchor tag inside .laptop-container
    var laptopStartGame = document.querySelector('.laptop-start-game');
    laptopStartGame.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        replaceDiv();
    });

    /* --- ROUNDS --- */

    // Get the round elements
    var round1 = document.querySelector('.round-1');
        
    // Initially hide the round elements
    round1.style.display = 'none';

    // Function to replace divs (rounds)
    function replaceDiv() {
        // Hide the laptop when clicked
        document.querySelector('.laptop-container').style.display = 'none';
            // Show round-1 when laptop is clicked
            document.querySelector('.round-1').style.display = 'block';
    }


    /* --- MAILS --- */

    // Get mail-1
    var mail1 = document.querySelector('.mail-1');
        // Get pop-up-1
        var popUp1 = document.querySelector('.pop-up-1');
            // Initially hide pop-up-1
            popUp1.style.display = 'none';

    // Function to hide pop-up-1 and change image to correct
    function hidePopUpAndCorrect() {
        // Hide pop-up-1
        popUp1.style.display = 'none';
            // Change image source of mail-1
            var mailImage = mail1.querySelector('img');
                mailImage.src = 'img/correct.png';
    }

    // Function to hide pop-up-1 and change image to wrong
    function hidePopUpAndWrong() {
        // Hide pop-up-1
        popUp1.style.display = 'none';
            // Change image source of mail-1
            var mailImage = mail1.querySelector('img');
                mailImage.src = 'img/wrong.png';
    }

    // Add click function to mail-1
    mail1.addEventListener('click', function() {
        // Show pop-up-1 when mail-1 is clicked
        popUp1.style.display = 'block';
    });

    // Add click function to sorting buttons for mail-1
    var safeButton = document.querySelector('.sort-safe');
        safeButton.addEventListener('click', function(event) {
            event.stopPropagation(); // // prevents pop-up from staying/appearing when sorting buttons are clicked
            hidePopUpAndCorrect();
    });

    var phishButton = document.querySelector('.sort-phish');
        phishButton.addEventListener('click', function(event) {
            event.stopPropagation(); // // prevents pop-up from staying/appearing when sorting buttons are clicked
            hidePopUpAndWrong();
    });

    // Get mail-2
    var mail2 = document.querySelector('.mail-2');
        // Get pop-up-2
        var popUp2 = document.querySelector('.pop-up-2');
            // Initially hide pop-up-2
            popUp2.style.display = 'none';

    // Function to hide pop-up-2 and change image to correct
    function hidePopUpAndCorrect2() {
        // Hide pop-up-2
        popUp2.style.display = 'none';
            // Change image source of mail-2
            var mailImage = mail2.querySelector('img');
                mailImage.src = 'img/correct.png';
    }

    // Function to hide pop-up-2 and change image to wrong
    function hidePopUpAndWrong2() {
        // Hide pop-up-2
        popUp2.style.display = 'none';
            // Change image source of mail-2
            var mailImage = mail2.querySelector('img');
                mailImage.src = 'img/wrong.png';
    }

    // Add click function to mail-2
    mail2.addEventListener('click', function() {
        // Show pop-up-2 when mail-2 is clicked
        popUp2.style.display = 'block';
    });

    // Add click function to sorting buttons for mail-2
    var safeButton2 = document.querySelector('.pop-up-2 .sort-safe');
        safeButton2.addEventListener('click', function(event) {
            event.stopPropagation(); // prevents pop-up from staying/appearing when sorting buttons are clicked
            hidePopUpAndWrong2();
    });

    var phishButton2 = document.querySelector('.pop-up-2 .sort-phish');
        phishButton2.addEventListener('click', function(event) {
            event.stopPropagation(); // prevents pop-up from staying/appearing when sorting buttons are clicked
    });

    // Get mail-3
    var mail3 = document.querySelector('.mail-3');
        // Get pop-up-3
        var popUp3 = document.querySelector('.pop-up-3');
            // Initially hide pop-up-3
            popUp3.style.display = 'none';

    // Function to hide pop-up-3 and change image to correct
    function hidePopUpAndCorrect3() {
        // Hide pop-up-3
        popUp3.style.display = 'none';
            // Change image source of mail-3
            var mailImage = mail3.querySelector('img');
                mailImage.src = 'img/correct.png';
    }

    // Function to hide pop-up-3 and change image to wrong
    function hidePopUpAndWrong3() {
        // Hide pop-up-3
        popUp3.style.display = 'none';
            // Change image source of mail-3
            var mailImage = mail3.querySelector('img');
                mailImage.src = 'img/wrong.png';
    }

    // Add click function to mail-3
    mail3.addEventListener('click', function() {
        // Show pop-up-3 when mail-3 is clicked
        popUp3.style.display = 'block';
    });

    // Add click function to sorting buttons for mail-3
    var safeButton3 = document.querySelector('.pop-up-3 .sort-safe');
        safeButton3.addEventListener('click', function(event) {
            event.stopPropagation(); // // prevents pop-up from staying/appearing when sorting buttons are clicked
            hidePopUpAndWrong3();
    });

    var phishButton3 = document.querySelector('.pop-up-3 .sort-phish');
        phishButton3.addEventListener('click', function(event) {
            event.stopPropagation(); // // prevents pop-up from staying/appearing when sorting buttons are clicked
            hidePopUpAndCorrect3();
    });

    // Get mail-4
    var mail4 = document.querySelector('.mail-4');
        // Get pop-up-4
        var popUp4 = document.querySelector('.pop-up-4');
            // Initially hide pop-up-4
            popUp4.style.display = 'none';

    // Function to hide pop-up-4 and change image to correct
    function hidePopUpAndCorrect4() {
        // Hide pop-up-4
        popUp4.style.display = 'none';
            // Change image source of mail-4
            var mailImage = mail4.querySelector('img');
                mailImage.src = 'img/correct.png';
    }

    // Function to hide pop-up-4 and change image to wrong
    function hidePopUpAndWrong4() {
        // Hide pop-up-4
        popUp4.style.display = 'none';
            // Change image source of mail-4
            var mailImage = mail4.querySelector('img');
                mailImage.src = 'img/wrong.png';
    }

    // Add click function to mail-4
    mail4.addEventListener('click', function() {
        // Show pop-up-4 when mail-4 is clicked
        popUp4.style.display = 'block';
    });

    // Add click function to sorting buttons for mail-4
    var safeButton4 = document.querySelector('.pop-up-4 .sort-safe');
        safeButton4.addEventListener('click', function(event) {
            event.stopPropagation(); // // prevents pop-up from staying/appearing when sorting buttons are clicked
            hidePopUpAndCorrect4();
    });

    var phishButton4 = document.querySelector('.pop-up-4 .sort-phish');
        phishButton4.addEventListener('click', function(event) {
            event.stopPropagation(); // prevents pop-up from staying/appearing when sorting buttons are clicked
            hidePopUpAndWrong4();
    });

});