
/************************************
* initalisation
************************************/

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
    document.getElementById("NavInterPageSpecific4")
];

let posNInP = 0;
let showNavInPage = true;
const navInPage = document.getElementById("NavInPage");
let navInPageArrow = document.getElementById("ArrowNInP");
const navInPageSpecific = [
    document.getElementById("NavInPageSpecific1"),
    document.getElementById("NavInPageSpecific2"),
    document.getElementById("NavInPageSpecific3"),
    document.getElementById("NavInPageSpecific4")
];
const nInPDynamicDiv = document.getElementById("NInPDynamicDiv");

// page
let currentPage = 1;
const pages = [
    document.getElementById("Page1"),
    document.getElementById("Page2"),
    document.getElementById("Page3"),
    document.getElementById("Page4")
];
/**
const pagesClass = [
    Array.from(document.getElementsByClassName("Home")),
    Array.from(document.getElementsByClassName("DAW")),
    Array.from(document.getElementsByClassName("InstnMelo")),
    Array.from(document.getElementsByClassName("EfxnAuto"))
];
/**/
const pagesNo = [
    1,
    2,
    3,
    4
];
const sectionCount = [
    4,
    2,
    3,
    1,
];

// others
let temp1 = 0;


/************************************
* nav anim
************************************/

navInterPageArrow.addEventListener("click", toggleNavInterPage);
navInPageArrow.addEventListener("click", toggleNavInPage);

function toggleNavInterPage() {
    const span = document.getElementsByClassName("ArrowSpan")[0];
    if (showNavInterPage) {
        showNavInterPage = false;
        span.innerHTML = "&gt";
    }
    else {
        showNavInterPage = true;
        span.innerHTML = "&lt";
    }
}

function toggleNavInPage() {
    const span = document.getElementsByClassName("ArrowSpan")[1];
    if (showNavInPage) {
        showNavInPage = false;
        span.innerHTML = "&gt";
    }
    else {
        showNavInPage = true;
        span.innerHTML = "&lt";
    }
}

/* nav in page dynamic content */
function updateNInPDynamicDiv() {

    nInPDynamicDiv.replaceChildren();

    // <p class="FlexItem NavInPageFlexItem" id="ArrowNInP"><span class="ArrowSpan">&lt</span></p>
    const newP = document.createElement('p');

    newP.innerHTML = `<span class="ArrowSpan">&lt</span>`;
    newP.className = 'FlexItem';
    newP.className = 'NavInPageFlexItem';
    newP.id = 'ArrowNInP';

    nInPDynamicDiv.appendChild(newP);

    for (let i = 1; i <= sectionCount[currentPage - 1]; i++) {
        // <a href="" class="FlexItem NavInPageFlexItem" id="NavInPageSpecific1">1</a>
        const newA = document.createElement('a');

        newA.textContent = i;
        newA.className = 'FlexItem';
        newA.className = 'NavInPageFlexItem';
        newA.id = 'NavInPageSpecific' + i;

        // think of way to make this work // newA.href = '';

        nInPDynamicDiv.appendChild(newA);
    }

    navInPageArrow = document.getElementById("ArrowNInP");
    navInPageArrow.addEventListener("click", toggleNavInPage);
}
/**/

/************************************
* page switch
************************************/

navInterPageSpecific[0].addEventListener("click", function(){currentPage = pagesNo[0]; toggleNavInPage(); updateNInPDynamicDiv();});
navInterPageSpecific[1].addEventListener("click", function(){currentPage = pagesNo[1]; toggleNavInPage(); updateNInPDynamicDiv();});
navInterPageSpecific[2].addEventListener("click", function(){currentPage = pagesNo[2]; toggleNavInPage(); updateNInPDynamicDiv();});
navInterPageSpecific[3].addEventListener("click", function(){currentPage = pagesNo[3]; toggleNavInPage(); updateNInPDynamicDiv();});

/************************************
* update
************************************/

function Update() {
    const intervalId = setInterval(Render, 5);
    function Render () {

        // determine device
        vwInPx = window.innerWidth;
        if (vwInPx <= 800) {
            device = "phone";
        }
        else if (vwInPx <= 1600) {
            device = "tablet";
        }
        else {
            device = "pc";
        }
        /* test *
       console.log(vwInPx);
       console.log(device);
       /**/

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
        navInterPage.style.right = posNInterP + 'vw';
        navInPage.style.right = posNInP + 'vw';
        
        /**/
        // render current page
        for (let i = 0; i < pagesNo.length; i++) {
            if (currentPage == (i + 1)) {
                pages[i].style.display = "flex";
                //navInPageSpecific[i].style.display = "initial";
            }
            else {
                pages[i].style.display = "none";
                //navInPageSpecific[i].style.display = "none";
            }
        }
        /**/
    }
}

Update();