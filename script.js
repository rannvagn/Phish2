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
        // Show the pop-up-1 element when mail-1 is clicked
        popUp1.style.display = 'block';
    });

    // Add click event listeners to sorting buttons
    var safeButton = document.querySelector('.sort-safe');
        safeButton.addEventListener('click', hidePopUpAndCorrect);

    var phishButton = document.querySelector('.sort-phish');
        phishButton.addEventListener('click', hidePopUpAndWrong);        

  
        // mail-2
        var mail2 = document.querySelector('.mail-2');
        var popUp2 = document.querySelector('.pop-up-2');
            popUp2.style.display = 'none';
                mail2.addEventListener('click', function() {
                    popUp2.style.display = 'block';
        });

        // mail-3
        var mail3 = document.querySelector('.mail-3');
        var popUp3 = document.querySelector('.pop-up-3');
            popUp3.style.display = 'none';
                mail3.addEventListener('click', function() {
                    popUp3.style.display = 'block';
        });

        // mail-4
            var mail4 = document.querySelector('.mail-4');
            var popUp4 = document.querySelector('.pop-up-4');
                popUp4.style.display = 'none';
                    mail4.addEventListener('click', function() {
                        popUp4.style.display = 'block';
        });





// Initially hide the continue button (to advance rounds)
var continueButton = document.querySelector('.continue-btn');
continueButton.style.display = 'none';

    // Append the continue button below the mail divs
    var round1 = document.querySelector('.round-1');
    round1.appendChild(continueButton);
});