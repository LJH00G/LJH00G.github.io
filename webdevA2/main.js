
/************************************
* initalisation
************************************/

// others
let temp1 = 0;
let renderFrameRate = 10; // in ms
let renderFrameRateInSecond = renderFrameRate / 1000;

// window and divice
let vwInPx = window.innerWidth;
const navWidthRatio = 17.5;
let device = "pc";

// nav
let posNInterP = 0;
let showNavInterPage = true;
const navInterPage = document.getElementById("NavInterPage");
const navInterPageArrow = document.getElementById("ArrowNInterP");
const navInterPageSpecific = [
    document.getElementById("NavInterPageSpecific1"),
    document.getElementById("NavInterPageSpecific2"),
    document.getElementById("NavInterPageSpecific3"),
    document.getElementById("NavInterPageSpecific4"),
    document.getElementById("NavInterPageSpecific5")
];

let posNInP = 0;
let showNavInPage = true;
const navInPage = document.getElementById("NavInPage");
let navInPageArrow = document.getElementById("ArrowNInP");
const navInPageSpecific = [
    document.getElementById("NavInPageSpecific1"),
    document.getElementById("NavInPageSpecific2"),
    document.getElementById("NavInPageSpecific3"),
    document.getElementById("NavInPageSpecific4"),
    document.getElementById("NavInPageSpecific5")
];
const nInPDynamicDiv = document.getElementById("NInPDynamicDiv");

// page
let currentPage = 1;
const pages = [
    document.getElementById("Page1"),
    document.getElementById("Page2"),
    document.getElementById("Page3"),
    document.getElementById("Page4"),
    document.getElementById("Page5")
];
const pagesNo = [
    1,
    2,
    3,
    4,
    5,
];
const sectionCount = [
    1,
    3,
    3,
    4,
    1,
];

// game
let inGame = false;
let currentAccuracy = 0;
let historyAccuracy = 0;
const gameGridContainer = document.getElementById("GameGridContainer");
const accuracyText = document.getElementById("AccuracyText");
const gameHitAreaL = document.getElementById("GameHitAreaLeft");
const gameHitAreaR = document.getElementById("GameHitAreaRight");
const startBtn = document.getElementById("StartBtn");
const endBtn = document.getElementById("EndBtn");
const musCastleFunk = new Audio("audio/mus_Castle_Funk_OST.ogg");
const musCastleFunkOffset = new Audio("audio/mus_Castle_Funk_OST.ogg");
const sfxLHit = new Audio("audio/sfx_Left_Hit.mp3");
const sfxRHit = new Audio("audio/sfx_Right_Hit.mp3");
let BPM = 125; /* variable */
let startGame = false;
let musTime = 0;
let musStart = false;
let timePerBeat = 60 / BPM;

// notes
let touch = false;
let noteBeat = [
    /* section a1 (bar 1) */
    1, 2.5, 3, 5, 6, 6.5, 7, 9, 10.5, 11, 13, 14, 14.5, 15, 16, 16.125, 18.5, 19, 20.5, 21.25, 22, 23, 24, 24.125, 26.5, 27, 28.5, 29.25, 30, 31, 32, 32.125, 34.5, 35, 36.5, 37.25, 37.75, 38.25, 39, 40, 43, 44, 46, 46.5, 47,
    /* section b1 (bar 13) */
    48.5, 49, 49.5, 50, 51, 52, 52.5, 53, 53.5, 53.75, 56.5, 57, 57.5, 58, 59, 60, 60.5, 61, 61.25, 61.75, 63, 63.5, 64.5, 65, 65.5, 66, 67, 68, 68.5, 69, 69.5, 69.75, 72.5, 73, 73.5, 74, 75, 76, 77, 77.5,
    /* section b2 (bar 21) */
    80.5, 81, 81.5, 82, 83, 84, 84.5, 85, 85.5, 85.75, 87, 88.5, 89, 89.5, 90, 91, 92, 92.5, 93, 93.25, 93.75, 94.5, 95, 95.5, 96.5, 97, 97.5, 98, 99, 100, 100.5, 101, 101.5, 101.75, 103, 104.5, 105, 105.5, 106, 107, 108, 109, 109.5, 111,
    /* section c1 (bar 29) */
    112.5, 113, 113.5, 114, 115, 115.5, 116, 116.5, 117, 118, 119, 119.75, 119.75, 124.5, 125, 125.5, 126, 127, 127.5, 128.5, 129, 129.5, 130, 131, 131.5, 132, 132.5, 133, 134, 135, 135.75, 135.75, 140, 140.5, 141, 141.5, 142, 143, 143.5,
    /* section c2 (bar 37) */
    144.5, 145, 145.5, 146, 147, 147.5, 148, 148.5, 149, 150, 151, 151.75, 151.75, 152.5, 153, 153.5, 154, 155, 155.5, 156.5, 157, 157.5, 158, 159, 159.5, 160.5, 161, 161.5, 162, 163, 163.5, 164, 164.5, 165, 166, 167, 167.75, 167.75, 168.5, 169, 169.5, 170, 171, 171.5, 172, 172, 172.5, 172.5, 173, 173, 173.5, 173.5, 174, 174, 175, 175.5,
    /* section a2 (bar 45) */
    177, 178.5, 179, 180.5, 181.5, 182, 182.75, 183.5, 184.5, 184.5, 187.5, 187.75, 188, 189, 190, 190.5, 191, 191.75, 193, 193, 196.5, 197, 197.5, 198, 199, 200, 200, 204, 206, 208, 212, 214, 216, 220, 222, 224, 224.125, 224.25, 228, 229, 230.5, 231.25, 232, 235, 236, 236,
    /* section b1 (bar 61) */
    240.5, 241, 241.5, 242, 243, 244, 244.5, 245, 245.5, 245.75, 248.5, 249, 249.5, 250, 251, 252, 252.5, 253, 253.25, 253.75, 255, 255.5, 256.5, 257, 257.5, 258, 259, 260, 260.5, 261, 261.5, 261.75, 264.5, 265, 265.5, 266, 267, 268, 269, 269.5,
    /* section b2 (bar 69) */
    272.5, 273, 273.5, 274, 275, 276, 276.5, 277, 277.5, 277.75, 279, 280.5, 281, 281.5, 282, 283, 284, 284.5, 285, 285.25, 285.75, 286.5, 287, 287.5, 288.5, 289, 289.5, 290, 291, 292, 292.5, 293, 293.5, 293.75, 295, 296.5, 297, 297.5, 298, 299, 300, 301, 301.5, 303,
    /* section c1 (bar 77) */
    304.5, 305, 305.5, 306, 307, 307.5, 308, 308.5, 309, 310, 311, 311.75, 311.75, 316.5, 317, 317.5, 318, 319, 319.5, 320.5, 321, 321.5, 322, 323, 323.5, 324, 324.5, 325, 326, 327, 327.75, 327.75, 332, 332.5, 333, 333.5, 334, 335, 335.5,
    /* section c2 (bar 85) */
    336.5, 337, 337.5, 338, 339, 339.5, 340, 340.5, 341, 342, 343, 343.75, 343.75, 344.5, 345, 345.5, 346, 347, 347.5, 348.5, 349, 349.5, 350, 351, 351.5, 352.5, 353, 353.5, 354, 355, 355.5, 356, 356.5, 357, 358, 359, 359.75, 359.75, 360.5, 361, 361.5, 362, 363, 363.5, 364, 364, 364.5, 364.5, 365, 365, 365.5, 365.5, 366, 366, 367, 367, 367.5, 367.5
];
let noteSide = [
    /* section a1 (bar 1) */
    "R","L","R","R", "L", "L", "R", "R", "L", "R", "R", "L", "L", "R", "L", "R", "L", "R", "R", "R", "L", "L", "L", "R", "L", "R", "R", "L", "L", "R", "R", "L", "L", "R", "L", "R", "R", "L", "R", "L", "L", "R", "L", "L", "R",
    /* section b1 (bar 13) */
    "L", "R", "R", "R", "L", "R", "L", "R", "R", "L", "L", "R", "R", "L", "L", "R", "L", "R", "L", "R", "R", "L", "L", "R", "R", "R", "L", "R", "L", "R", "R", "L", "L", "R", "R", "L", "L", "R", "L", "L",
    /* section b2 (bar 21) */
    "L", "R", "R", "R", "L", "R", "L", "R", "R", "L", "R", "L", "R", "R", "L", "L", "R", "L", "R", "L", "R", "R", "R", "L", "L", "R", "R", "R", "L", "R", "L", "R", "R", "L", "R", "L", "R", "R", "L", "L", "R", "L", "L", "R",
    /* section c1 (bar 29) */
    "L", "L", "R", "R", "R", "L", "L", "R", "L", "R", "L", "R", "L", "L", "R", "L", "R", "R", "L", "L", "L", "R", "R", "R", "L", "L", "R", "L", "R", "L", "R", "L", "L", "R", "R", "L", "L", "R", "L",
    /* section c2 (bar 37) */
    "L", "L", "R", "R", "R", "L", "L", "R", "L", "R", "L", "R", "L", "L", "L", "R", "R", "R", "L", "L", "R", "L", "R", "R", "L", "L", "L", "R", "R", "R", "L", "L", "R", "L", "R", "L", "R", "L", "L", "L", "R", "R", "R", "L", "L", "R", "L", "R", "L", "R", "L", "R", "L", "R", "R", "L",
    /* section a2 (bar 45) */
    "R", "L", "R", "R", "R", "L", "L", "R", "R", "L", "R", "L", "R", "R", "L", "R", "L", "L", "R", "L", "L", "L", "R", "R", "L", "L", "R", "R", "R", "L", "L", "R", "L", "L", "L", "L", "R", "L", "L", "R", "R", "L", "L", "R", "L", "R",
    /* section b1 (bar 61) */
    "L", "R", "R", "R", "L", "R", "L", "R", "R", "L", "L", "R", "R", "L", "L", "R", "L", "R", "L", "R", "R", "L", "L", "R", "R", "R", "L", "R", "L", "R", "R", "L", "L", "R", "R", "L", "L", "R", "L", "L",
    /* section b2 (bar 69) */
    "L", "R", "R", "R", "L", "R", "L", "R", "R", "L", "R", "L", "R", "R", "L", "L", "R", "L", "R", "L", "R", "R", "R", "L", "L", "R", "R", "R", "L", "R", "L", "R", "R", "L", "R", "L", "R", "R", "L", "L", "R", "L", "L", "R",
    /* section c1 (bar 77) */
    "L", "L", "R", "R", "R", "L", "L", "R", "L", "R", "L", "R", "L", "L", "R", "L", "R", "R", "L", "L", "L", "R", "R", "R", "L", "L", "R", "L", "R", "L", "R", "L", "L", "R", "R", "L", "L", "R", "L",
    /* section c2 (bar 85) */
    "L", "L", "R", "R", "R", "L", "L", "R", "L", "R", "L", "R", "L", "L", "L", "R", "R", "R", "L", "L", "R", "L", "R", "R", "L", "L", "L", "R", "R", "R", "L", "L", "R", "L", "R", "L", "R", "L", "L", "L", "R", "R", "R", "L", "L", "R", "L", "R", "L", "R", "L", "R", "L", "R", "R", "L", "R", "L"
];
console.log("noteBeat length:", noteBeat.length);
console.log("noteSide length:", noteSide.length);
let noteBeatInput = [];
let noteSideInput = [];
let noteHeight = 20; /* variable */
let gameContainerHeight = 400; /* variable */ 
let HitAreaPos = 350; /* variable */
HitAreaPos -= noteHeight; // nimus offset due to size of note
let hitAreaHeight = noteHeight + 10; // leave extra space besides notes height
let moveAreaHeight = HitAreaPos - hitAreaHeight / 2;
let missAreaHeight = gameContainerHeight - moveAreaHeight - hitAreaHeight;
let noteTotalMoveDist = gameContainerHeight - noteHeight; // minus offset due tosize of note
let noteInitPos = 295; /* variable */
let barAmountOnScreen = 3; /* variable */
let noteMoveTime = (60 / BPM) * barAmountOnScreen; // time to appear and reach the click zone in seconds
let noteMoveTimeFitFrameRate = noteMoveTime * (1 / renderFrameRateInSecond); // set to fit rander framerate
let spawnedLNoteCount = 0;
let spawnedRNoteCount = 0;
let spawnedSectionCount = 0;
let noteFadeInEndPos = 100; /* variable */
let noteFadeOutStartPos = HitAreaPos - noteHeight / 2;
let spawnOffset = Math.round(noteMoveTime * 0.975 * 1000);
let noteTimeoutId = [];
let sectionBarTimeoutId = [];
let musTimeoutId;
let hitLArea = false;
let hitRArea = false;
let lNotePosInLine = [];
let rNotePosInLine = [];
let notesCounted = 0;
let notesPerfect = 0;
let notesGood = 0;
let notesMiss = 0;

gameGridContainer.style.gridTemplateRows = moveAreaHeight + "px " + hitAreaHeight + "px " + missAreaHeight + "px";

let cs = getComputedStyle(gameGridContainer);
console.log(cs.gridTemplateRows);
console.log(spawnOffset);

// game test (create input beat and sides for notes)
let gameTest = false;
let keyOrder = [
    false,
    false,
    false,
    false
];


/************************************
* nav anim
************************************/

navInterPageArrow.addEventListener("click", function() {toggleNavInterPage(0)});
navInPageArrow.addEventListener("click", function() {toggleNavInPage(0)});

function toggleNavInterPage(trigger) {
    const span = document.getElementsByClassName("ArrowSpan")[0];
    if (!showNavInterPage || trigger == 1) {
        showNavInterPage = true;
        span.innerHTML = "&lt";
    }
    else {
        showNavInterPage = false;
        span.innerHTML = "&gt";
    }
}

function toggleNavInPage(trigger) {
    const span = document.getElementsByClassName("ArrowSpan")[1];
    if (!showNavInPage  || trigger == 1) {
        showNavInPage = true;
        span.innerHTML = "&lt";
    }
    else {
        showNavInPage = false;
        span.innerHTML = "&gt";
    }
}

/* nav in page dynamic content */
function updateNInPDynamicDiv() {

    nInPDynamicDiv.replaceChildren();

    // <p class="FlexItem NavInPageFlexItem" id="ArrowNInP"><span class="ArrowSpan">&lt</span></p>
    const newP = document.createElement('p');

    newP.innerHTML = `<span class="ArrowSpan">&lt</span>`;
    newP.classList.add('FlexItem');
    newP.classList.add('NavInPageFlexItem');
    newP.id = 'ArrowNInP';

    nInPDynamicDiv.appendChild(newP);

    for (let i = 1; i <= sectionCount[currentPage - 1]; i++) {
        // <a href="#H1" class="FlexItem NavInPageFlexItem" id="NavInPageSpecific1">1</a>
        const newA = document.createElement('a');

        newA.textContent = i;
        newA.classList.add('FlexItem');
        newA.classList.add('NavInPageFlexItem');
        newA.id = 'NavInPageSpecific' + i;

        if (currentPage == 1) {
            newA.href = '#H' + i;
        }
        switch (currentPage) {
            case 1:
                newA.href = '#H' + i;
                newA.textContent = 'About Digital Music Composition';
                break;
            case 2:
                newA.href = '#DAW' + i;
                switch (i) {
                    case 1:
                        newA.textContent = 'Degital Audio Workspace - DAW';
                        break;
                    case 2:
                        newA.textContent = 'Importance of a Suitable DAW';
                        break;
                    case 3:
                        newA.textContent = 'How to Find a Suitable DAW for Yourself';
                        break;
                    default:
                        break;
                }
                break;
            case 3:
                newA.href = '#IM' + i;
                switch (i) {
                    case 1:
                        newA.textContent = 'Instruments & Melodies';
                        break;
                    case 2:
                        newA.textContent = 'Getting More Sounds & Instruments';
                        break;
                    case 3:
                        newA.textContent = 'Using the Right Melodies';
                        break;
                    default:
                        break;
                }
                break;
            case 4:
                newA.href = '#EA' + i;
                switch (i) {
                    case 1:
                        newA.textContent = 'Effects & Automations';
                        break;
                    case 2:
                        newA.textContent = 'Use of Effects';
                        break;
                    case 3:
                        newA.textContent = 'Use of Automations';
                        break;
                    case 4:
                        newA.textContent = 'Combining the Power of Effects and Automations';
                        break;
                    default:
                        break;
                }
                break;
            case 5:
                newA.href = '#GAME' + i;
                newA.textContent = 'Falling Notes';
                sfxLHit.volume = 0;
                sfxLHit.play();
                sfxRHit.volume = 0;
                sfxRHit.play();
                break;
            default:
                break;
        }

        nInPDynamicDiv.appendChild(newA);
    }

    navInPageArrow = document.getElementById("ArrowNInP");
    navInPageArrow.addEventListener("click", toggleNavInPage);
}
/**/

/************************************
* page switch
************************************/

for (let i = 0; i < 5; i++) {
    navInterPageSpecific[i].addEventListener("click", function(){currentPage = pagesNo[i]; toggleNavInterPage(1); toggleNavInPage(1); updateNInPDynamicDiv();});
}

/************************************
* game events
************************************/

gameHitAreaL.addEventListener("touchstart", function() {if (!touch) {touchDetect("L")}})
gameHitAreaR.addEventListener("touchstart", function() {if (!touch) {touchDetect("R")}})
document.addEventListener("touchend", function() {touch = false;})
document.addEventListener("keydown", function(key) {
    if (currentPage == 5) {
        if (key.code == "KeyZ") {
            gameHitAreaL.classList.add("GameHitAnimH");
            setTimeout(function() {gameHitAreaL.classList.remove("GameHitAnimH")}, 100);
            sfxLHit.pause();
            sfxLHit.currentTime = 0;
            sfxLHit.play();
            hitLArea = true;
            setTimeout(function() {if (hitLArea) {hitLArea = false}}, 50);
        }
        if (key.code == "KeyX") {
            gameHitAreaR.classList.add("GameHitAnimH");
            setTimeout(function() {gameHitAreaR.classList.remove("GameHitAnimH")}, 100);
            sfxRHit.pause();
            sfxRHit.currentTime = 0;
            sfxRHit.play();
            hitRArea = true;
            setTimeout(function() {if (hitRArea) {hitRArea = false}}, 50);
        }
        if (key.code == "KeyA") {
            spawnHitEffect("L", "P");
        }
        if (key.code == "KeyD") {
            spawnHitEffect("R", "P");
        }
        if (key.code == "KeyQ") {
            spawnHitEffect("L", "G");
        }
        if (key.code == "KeyE") {
            spawnHitEffect("R", "G");
        }
    }
});

startBtn.addEventListener("click", function() {
    if (!inGame) {
        renderGame();
        inGame = true;
    }
    else {
        endGame();
        renderGame();
        inGame = true;
    }
});
endBtn.addEventListener("click", function() {
    console.log(JSON.stringify(noteSideInput));
    console.log(JSON.stringify(noteBeatInput));
    endGame();
    inGame = false;
})

/************************************
* game functions
************************************/

function touchDetect(side) {
    touch = true;
    if (currentPage == 5) {
        if (side == "L") {
            gameHitAreaL.classList.add("GameHitAnimH");
            setTimeout(function() {gameHitAreaL.classList.remove("GameHitAnimH")}, 100);
            sfxLHit.pause();
            sfxLHit.currentTime = 0;
            sfxLHit.play();
            hitLArea = true;
            setTimeout(function() {if (hitLArea) {hitLArea = false}}, 50);
        }
        if (side == "R") {
            gameHitAreaR.classList.add("GameHitAnimH");
            setTimeout(function() {gameHitAreaR.classList.remove("GameHitAnimH")}, 100);
            sfxRHit.pause();
            sfxRHit.currentTime = 0;
            sfxRHit.play();
            hitRArea = true;
            setTimeout(function() {if (hitRArea) {hitRArea = false}}, 50);
        }
    }
}

function renderGame() {
    startBtn.textContent = "RESTART";
    sfxLHit.volume = 1;
    sfxLHit.currentTime = 0;
    sfxRHit.volume = 1;
    sfxRHit.currentTime = 0;
    musCastleFunkOffset.play();
    musCastleFunkOffset.volume = 0;
    if (gameTest) {
        musCastleFunk.play();
    }
    else {
        musTimeoutId = setTimeout(function() {musCastleFunk.play(); musStart = true;}, spawnOffset);
    }
    if (!gameTest) {
        renderSpawnNotes();
    }
}

function endGame() {
    startBtn.textContent = "START";
    clearTimeout(musTimeoutId);
    musCastleFunk.pause();
    musCastleFunk.currentTime = 0;
    musCastleFunkOffset.pause();
    musCastleFunkOffset.currentTime = 0;
    spawnedLNoteCount = 0;
    spawnedRNoteCount = 0;
    spawnedSectionCount = 0;
    lNotePosInLine = [];
    rNotePosInLine = [];
    notesCounted = 0;
    notesPerfect = 0;
    notesGood = 0;
    notesMiss = 0;
    startGame = false;

    for (let i = 0; i < noteTimeoutId.length; i++) {
        clearTimeout(noteTimeoutId[i]);
    }
    for (let i = 0; i < Math.round(musCastleFunkOffset.duration / (60 / BPM)); i++) {
        clearTimeout(sectionBarTimeoutId[i]);
    }
    noteBeatInput = [];
    noteSideInput = [];
}

function renderSpawnNotes() {
    for (let i = 0; i < noteBeat.length; i++) {
        noteTimeoutId[i] = setTimeout(function() { spawnNote(noteSide[i]) }, noteBeat[i] * timePerBeat * 1000);
    }
    let beat = -1;
    for (let i = 0; i < Math.round(musCastleFunkOffset.duration / (60 / BPM)); i++) {
        beat++;
        if (i % 4 == 0) {
            sectionBarTimeoutId[i] = setTimeout(function() { spawnBarSection(0) }, beat * timePerBeat * 1000);
        }
        else {
            sectionBarTimeoutId[i] = setTimeout(function() { spawnBarSection(1) }, beat * timePerBeat * 1000);
        }
    }
}

function spawnNote(side) {
    /* inits */
    const newNote = document.createElement('div');
    let notePos = noteInitPos;
    let alphaMax = 1;
    let alpha = 0;
    let color;
    let borderColor;
    if (side == "L") {
        color = "71, 145, 255,";
        borderColor = "40, 52, 143,";
        spawnedLNoteCount++;
    }
    else {
        color = "71, 194, 255,";
        borderColor = "37, 73, 131,";
        spawnedRNoteCount++;
    }

    /* note style */
    newNote.style.backgroundColor = `rgba(${color} ${alpha})`;
    newNote.style.border = `rgba(${borderColor} ${alpha}) solid 2.5px`;
    newNote.style.borderRadius = "5px";
    newNote.style.minHeight = noteHeight + "px";
    newNote.style.maxHeight = noteHeight + "px";
    newNote.style.minWidth = "80px";
    newNote.style.maxWidth = "80px";
    newNote.style.position = "absolute";
    newNote.style.top = notePos + "px";
    if (side == "L") {
        newNote.style.right = (vwInPx / 2) + "px";
        newNote.id = side + "Note" + spawnedLNoteCount;
        lNotePosInLine.push(newNote.id);
    }
    else {
        newNote.style.left = (vwInPx / 2) + "px";
        newNote.id = side + "Note" + spawnedRNoteCount;
        rNotePosInLine.push(newNote.id);
    }
    newNote.style.zIndex = 5;

    console.log("spawned note with id " + newNote.id);

    gameGridContainer.appendChild(newNote);

    /* note render */
    const newNoteIntervalId = setInterval(Render, renderFrameRate);
    function Render () {
        /* changes */
        notePos += HitAreaPos / noteMoveTimeFitFrameRate;
        if (notePos <= noteFadeInEndPos + noteInitPos) {
            alpha += ((HitAreaPos / noteMoveTimeFitFrameRate) * (gameContainerHeight / noteFadeInEndPos)) * (1/gameContainerHeight) * alphaMax;
        }
        if (notePos >= noteFadeOutStartPos + noteInitPos) {
            alpha -= ((HitAreaPos / noteMoveTimeFitFrameRate) * (gameContainerHeight / missAreaHeight)) * (1/gameContainerHeight) * alphaMax;
        }

        /* render change */
        newNote.style.top = notePos + "px";
        newNote.style.backgroundColor = `rgba(${color} ${alpha})`;
        newNote.style.borderColor = `rgba(${borderColor} ${alpha})`;

        /* missed without hit */
        if (notePos >= gameContainerHeight - (noteHeight / 2) + noteInitPos) {
            clearInterval(newNoteIntervalId);
            if (side == "L") {
                lNotePosInLine.shift();
            }
            else {
                rNotePosInLine.shift();
            }
            notesCounted++;
            notesMiss++;
            newNote.remove();
            clearInterval(newNoteIntervalId);
        }

        console.log(notePos);
        /* detect hit */
        if (side == "L") { 
            if (hitLArea && lNotePosInLine[0] == newNote.id && notePos >= (HitAreaPos + noteInitPos) - (hitAreaHeight * (15/10))) {
                hitLArea = false;
                lNotePosInLine.shift();
                notesCounted++;
                if (notePos >= (HitAreaPos + noteInitPos) - (hitAreaHeight * (10/10)) && notePos <= (HitAreaPos + noteInitPos) + (hitAreaHeight * (8/10))) {
                    if (notePos >= (HitAreaPos + noteInitPos) - (hitAreaHeight * (5/10)) && notePos <= (HitAreaPos + noteInitPos) + (hitAreaHeight * (3/10))) {
                        spawnHitEffect("L", "P");
                        notesPerfect++;
                    }
                    else {
                        spawnHitEffect("L", "G");
                        notesGood++;
                    }
                }
                else {
                    sfxLHit.pause();
                    notesMiss++;
                }
                newNote.remove();
                clearInterval(newNoteIntervalId);
            }
        }
        else {
            if (hitRArea && rNotePosInLine[0] == newNote.id && notePos >= (HitAreaPos + noteInitPos) - (hitAreaHeight * (15/10))) {
                hitRArea = false;
                rNotePosInLine.shift();
                notesCounted++;
                if (notePos >= (HitAreaPos + noteInitPos) - (hitAreaHeight * (10/10)) && notePos <= (HitAreaPos + noteInitPos) + (hitAreaHeight * (8/10))) {
                    if (notePos >= (HitAreaPos + noteInitPos) - (hitAreaHeight * (5/10)) && notePos <= (HitAreaPos + noteInitPos) + (hitAreaHeight * (3/10))) {
                        spawnHitEffect("R", "P");
                        notesPerfect++;
                    }
                    else {
                        spawnHitEffect("R", "G");
                        notesGood++;
                    }
                }
                else {
                    sfxRHit.pause();
                    notesMiss++;
                }
                newNote.remove();
                clearInterval(newNoteIntervalId);
            }
        }
    }
}

function spawnBarSection(type) {
    /* inites */
    const newSection = document.createElement('div');
    let notePos = noteInitPos;
    let alphaMax = 1;
    let alpha = 0;
    spawnedSectionCount++;

    if (type == 0) {
        alphaMax = 1;
    }
    else {
        alphaMax = 0.5;
    }
    
    /* section bar style */
    newSection.style.backgroundColor = `rgba(76, 93, 133, ${alpha})`;
    newSection.style.minHeight = "10px";
    newSection.style.maxHeight = "10px";
    newSection.style.minWidth = "200px";
    newSection.style.maxWidth = "200px";
    newSection.style.position = "absolute";
    newSection.style.top = notePos + "px";
    newSection.style.left = (vwInPx / 2) - 100 - 10.5 + "px";
    newSection.style.zIndex = 2;
    newSection.id = "Section" + spawnedSectionCount;

    console.log("spawned note with id " + newSection.id);

    gameGridContainer.appendChild(newSection);

    /* render section bar */
    const newSectionIntervalId = setInterval(Render, renderFrameRate);
    function Render () {
        /* changes */
        notePos += HitAreaPos / noteMoveTimeFitFrameRate;
        if (notePos <= noteFadeInEndPos + noteInitPos) {
            alpha += ((HitAreaPos / noteMoveTimeFitFrameRate) * (gameContainerHeight / noteFadeInEndPos)) * (1/gameContainerHeight) * alphaMax;
        }
        if (notePos >= noteFadeOutStartPos + noteInitPos) {
            alpha -= ((HitAreaPos / noteMoveTimeFitFrameRate) * (gameContainerHeight / missAreaHeight)) * (1/gameContainerHeight) * alphaMax;
        }

        /* render changes */
        newSection.style.top = notePos + "px";
        newSection.style.backgroundColor = `rgba(76, 93, 133, ${alpha})`;

        /* delete when reach end */
        if (notePos >= gameContainerHeight - (noteHeight / 2) + noteInitPos) {
            clearInterval(newSectionIntervalId);
            newSection.remove();
        }
    }
}

function spawnHitEffect(side, type) {
    /* init */
    const newEffect = document.createElement('div');
    let effectPos = moveAreaHeight + noteInitPos + 2.5;
    let alpha = 1;
    let width = 100;
    let height = 0;
    let leftRight = -7.5;

    /* effect style */
    if (type == "P") {
        //newEffect.classList.add("GameHitAnimP");
        newEffect.style.backgroundColor = `rgba(255, 237, 119, ${alpha})`;
    }
    else {
        //newEffect.classList.add("GameHitAnimG");
        newEffect.style.backgroundColor = `rgba(206, 226, 255, ${alpha})`;
    }
    newEffect.style.minWidth = width + "px";
    newEffect.style.maxWidth = width + "px";
    newEffect.style.minHeight = height + "px";
    newEffect.style.maxHeight = height + "px";
    newEffect.style.position = "absolute";
    newEffect.style.top = effectPos + "px";
    newEffect.style.zIndex = 6;
    if (side == "L") {
        newEffect.style.right = (vwInPx / 2) + leftRight + "px";
    }
    else {
        newEffect.style.left = (vwInPx / 2) + leftRight + "px";
    }

    gameGridContainer.appendChild(newEffect);

    console.log("spawned hiteffect");
    console.log(effectPos);

    let animDuration = 200;
    const newEffectIntervalId = setInterval(Render, renderFrameRate);
    function Render() {
        /* changes */
        alpha -= renderFrameRate / animDuration;
        height += (renderFrameRate / animDuration) * 100;
        width -= (renderFrameRate / animDuration) * 100;
        effectPos -= (renderFrameRate / animDuration) * 100;
        leftRight += (renderFrameRate / animDuration) * 50;

        /* render changes */
        if (type == "P") {
            newEffect.style.backgroundColor = `rgba(255, 237, 119, ${alpha})`;
        }
        else {
            newEffect.style.backgroundColor = `rgba(206, 226, 255, ${alpha})`;
        }
        newEffect.style.minWidth = width + "px";
        newEffect.style.maxWidth = width + "px";
        newEffect.style.minHeight = height + "px";
        newEffect.style.maxHeight = height + "px";
        newEffect.style.top = effectPos + "px";
        if (side == "L") {
            newEffect.style.right = (vwInPx / 2) + leftRight + "px";
        }
        else {
            newEffect.style.left = (vwInPx / 2) + leftRight + "px";
        }

        /* delete when reach end */
        if (alpha <= 0) {
            clearInterval(newEffectIntervalId);
            newEffect.remove()
        }
    }
}

/************************************
* game test
************************************/

document.addEventListener("keydown", function(key) {
    if (key.code == "KeyT" && keyOrder[2] == false) {
        keyOrder[0] = true;
        return;
    }
    else {
        if (key.code != "KeyT") {
            if (key.code == "KeyE" || key.code == "KeyS") {checked = false;}
            else {
            keyOrder[2] = false;
            keyOrder[1] = false;
            keyOrder[0] = false;
            return;
            }
        }
    }
    if (!checked) {
        if (key.code == "KeyE" && keyOrder[0] == true) {
            keyOrder[1] = true;
            return;
        }
        else {
            keyOrder[0] = false;
        }
    }
    if (!checked) {
        if (key.code == "KeyS" && keyOrder[1] == true) {
            keyOrder[2] = true;
            return;
        }
        else {
            keyOrder[1] = false;
            keyOrder[0] = false;
        }
    }
    if (!checked) {
        if (key.code == "KeyT" && keyOrder[2] == true) {
            keyOrder[3] = true;
        }
    }
    if (keyOrder[3] == true) {
        alert("activated game test ");
        gameTest = true;
        keyOrder[3] = false;
        keyOrder[2] = false;
        keyOrder[1] = false;
        keyOrder[0] = false;
    }
});

document.addEventListener("keydown", function(key) {
    if (startGame) {
        let beatHit = musTime / 1000 / timePerBeat;
        if (key.code == "KeyN") {
            
            noteSideInput.push("L");
            noteBeatInput.push(beatHit);
            console.log("L, " + beatHit);
        }
        if (key.code == "KeyM") {
            noteSideInput.push("R");
            noteBeatInput.push(beatHit);
            console.log("R, " + beatHit);
        }
    }
    if (gameTest) {
        if (key.code == "KeyN") {
            spawnNote("L");
        }
        if (key.code == "KeyM") {
            spawnNote("R");
        }
    }
});

/************************************
* update
************************************/

function Update() {

    //const updateIntervalId = setInterval(Render, renderFrameRate);
    Render();

    function Render () {

        // determine device
        vwInPx = window.innerWidth;
        if (vwInPx <= 800) {
            device = "phone";
        }
        else {
            device = "pc";
        }

        // render nav anim
        if (showNavInterPage) {
            posNInterP = 0;
        }
        else {
            posNInterP = navWidthRatio - (40/vwInPx)*100;
        }
        if (showNavInPage) {
            posNInP = (35/vwInPx)*100;
            if (!showNavInterPage) {
                posNInP = (65/vwInPx)*100 + navWidthRatio - (70/vwInPx)*100;
            }
        }
        else {
            posNInP = (32/vwInPx)*100 + navWidthRatio - (70/vwInPx)*100;
            if (!showNavInterPage) {
                posNInP = (65/vwInPx)*100 + navWidthRatio - (70/vwInPx)*100;
            }
        }
        navInterPage.style.left = -posNInterP + 'vw';
        navInPage.style.left = -posNInP + 'vw';
        
        // render current page
        for (let i = 0; i < pagesNo.length; i++) {
            if (currentPage == (i + 1)) {
                pages[i].style.display = "flex";
            }
            else {
                pages[i].style.display = "none";
            }
        }

        // game 
        if (inGame) {

            // game accuracy tracking
            currentAccuracy = 0;
            if (notesCounted > 0) {
                currentAccuracy = ((notesPerfect + notesGood * 0.5) / notesCounted * 100).toFixed(2);
            }
            if (historyAccuracy == 0) {
                accuracyText.textContent = `Accuracy / History: ${currentAccuracy}% / NIL`;
            }
            else {
                accuracyText.textContent = `Accuracy / History: ${currentAccuracy}% / ${historyAccuracy}%`;
            }

            // game init
            if (!startGame) {
                startGame = true;
                musStart = false;
            }
            else {
                musTime = Math.round((musCastleFunkOffset.currentTime) / renderFrameRateInSecond) * renderFrameRateInSecond * 1000;
            }

            if (musCastleFunk.duration - musCastleFunk.currentTime < 0.05) {
                setTimeout(function () {
                    const gameBottomText = document.getElementById("GameBottomText");
                    gameBottomText.innerHTML = "Congradulations! you have completed this cool little mini game ~~ &#9834";
                    if (currentAccuracy >= historyAccuracy) {
                        historyAccuracy = currentAccuracy;
                    }
                    accuracyText.textContent = `Accuracy / History: ${currentAccuracy}% / ${historyAccuracy}%`;
                }, 50 + timePerBeat * 1000);
            }
        }

        setTimeout(Render, renderFrameRate);
    }
}

Update();