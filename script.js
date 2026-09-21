/* =========================================
   BIRTHDAY NAME
   CHANGE ONLY THIS
========================================= */

const birthdayName = "Maria";


/* =========================================
   GET ELEMENTS
========================================= */

const welcomeScreen =
    document.getElementById("welcomeScreen");

const birthdayScreen =
    document.getElementById("birthdayScreen");

const openButton =
    document.getElementById("openButton");

const birthdayNameElement =
    document.getElementById("birthdayName");

const confettiContainer =
    document.getElementById("confetti");

const birthdayMusic =
    document.getElementById("birthdayMusic");


/* =========================================
   SET BIRTHDAY NAME
========================================= */

birthdayNameElement.textContent = birthdayName;


/* =========================================
   OPEN GIFT
========================================= */

openButton.addEventListener("click", function () {

    /*
        Prevent clicking the gift
        multiple times
    */

    if (openButton.classList.contains("opened")) {
        return;
    }


    openButton.classList.add("opened");


    /*
        Start gift opening animation
    */

    openButton.classList.add("opening");


    /*
        Start music
    */

    if (birthdayMusic) {

        birthdayMusic.volume = 0.35;

        birthdayMusic.play().catch(function (error) {

            console.log(
                "Music could not start:",
                error
            );

        });

    }


    /*
        Wait for the gift animation
        before revealing birthday screen
    */

    setTimeout(function () {

        welcomeScreen.classList.add("hide");

        birthdayScreen.classList.add("show");

        createConfetti();

    }, 1200);

});


/* =========================================
   CREATE CONFETTI
========================================= */

function createConfetti() {

    /*
        Number of confetti pieces
    */

    const totalConfetti = 120;


    for (let i = 0; i < totalConfetti; i++) {

        const piece =
            document.createElement("span");


        /*
            Add CSS class
        */

        piece.classList.add("confetti");


        /*
            Random horizontal position
        */

        piece.style.left =
            Math.random() * 100 + "%";


        /*
            Random animation delay
        */

        piece.style.animationDelay =
            Math.random() * 2 + "s";


        /*
            Random animation duration
        */

        piece.style.animationDuration =
            (3 + Math.random() * 3) + "s";


        /*
            Random rotation
        */

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        /*
            Random size
        */

        const size =
            5 + Math.random() * 5;

        piece.style.width =
            size + "px";

        piece.style.height =
            (size * 1.5) + "px";


        /*
            Random color
        */

        piece.style.background =
            getRandomColor();


        /*
            Add to page
        */

        confettiContainer.appendChild(piece);

    }

}


/* =========================================
   RANDOM CONFETTI COLOR
========================================= */

function getRandomColor() {

    const colors = [

        "#f19ac5",
        "#a9a0f5",
        "#f4bd82",
        "#8ed7c7",
        "#f28fab",
        "#ffd166"

    ];


    const randomIndex =
        Math.floor(
            Math.random() * colors.length
        );


    return colors[randomIndex];

}


/* =========================================
   OPTIONAL:
   STOP MUSIC WHEN PAGE IS HIDDEN
========================================= */

document.addEventListener(
    "visibilitychange",
    function () {

        if (!birthdayMusic) {
            return;
        }


        if (document.hidden) {

            birthdayMusic.pause();

        }

    }
);
