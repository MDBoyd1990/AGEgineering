function betterCountdown() {
    var currTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function() {
                //code goes here for timer
                document.getElementById("readyfortakeoff").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function() {
                document.getElementById("readyfortakeoff").innerHTML =
                    "Hang On We Are T-minus 5 seconds = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function() {
                document.getElementById("readyfortakeoff").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}

function whileCount() {
    var currTime = 10;
    var i = 1;
    while (i < 12) {
        if (i == 11) {
            setTimeout(function() {
                //code goes here for timer
                document.getElementById("readyfortakeoff").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function() {
                document.getElementById("readyfortakeoff").innerHTML =
                    "Hang On We Are T-minus 5 seconds = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function() {
                document.getElementById("readyfortakeoff").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
        i = i + 1;
    }
}

function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["longitude"].innerHTML = "Start pushed...";
    mySound = new sound("planes.mp3");
    // this is the sound of the planes taking off
    mySound.play();
    // this is the function button to start the take off
}

function stop() {
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elapsed:</td><td>15 seconds</td>";
    document.getElementById("data").rows["longitude"].innerHTML = "<td>Longitude:</td><td>0</td>";
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    mySound = new sound("planes.mp3");
    // this is the sound of the planes taking off
    mySound.stop();
    // this is to stop the planes sound
    mySound.currTime = 0;
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
            this.sound.play();
        }
        // this.stop = function() {
        //     this.sound.pause();
        // }
}

function checkCreds() {
    var firstName = document.getElementById("fName").value;
    // this is the box where you place your first name
    var lastName = document.getElementById("lName").value;
    // this is the box where you place your last name
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;

    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Full name has invalid number of characters!";
    } else if (badgeNumb > 999 || badgeNumb < 0) {
        document.getElementById("loginStatus").innerHTML = "Badge ID is  an invalid number!";
        // this is the alert if you did not meet the requirements for the Bdge ID
    } else {
        alert("Access Granted, Welcome " + fullName + "!");
        // when you successfully met the requirements you will receive the alert 
        location.replace("indexW4.html");
    }
}