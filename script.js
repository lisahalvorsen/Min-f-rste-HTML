function noLayout() {
  document.getElementById("cards").classList.value = "";
}

function verticalLayout() {
  noLayout();
  document.getElementById("cards").classList.add("vertical");
}

function horizontalLayout() {
  noLayout();
  document.getElementById("cards").classList.add("horizontal");
}

function gridLayout() {
  noLayout();
  document.getElementById("cards").classList.add("grid");
}

function blankAlle() {
  document.getElementById("showHeaderGreen").innerHTML = " ";
  document.getElementById("showHeaderBlue").innerHTML = " ";
  document.getElementById("showHeaderRed").innerHTML = " ";
  document.getElementById("showHeaderYellow").innerHTML = " ";
  document.getElementById("showHeaderDark").innerHTML = " ";
}

function showHeaderGreen() {
  blankAlle();
  document.getElementById("showHeaderGreen").innerHTML = /*HTML*/ `
    De to viktigste verktøyene vi skal bruke er disse:
    <ul>
        <li>
            Koderedigeringsprogrammet
            <a href="https://code.visualstudio.com/">Visual Studio Code</a>
            <br />
            Vi skal bruke noen <i>extensions</i>:
            <ul>
                <li>JavaScript-booster</li>
                <li>es6-string-html</li>
                <li>live-server</li>
                <li>live-share</li>
            </ul>
        </li>
        <li>Nettleseren Google Chrome
            <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a>
        </li>
    </ul>
    `;
}

function showHeaderBlue() {
  blankAlle();
  document.getElementById("showHeaderBlue").innerHTML = /*HTML*/ `
        Vi bruker HTML til å definere et dokument.
        <ul>
            <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
            <li>Tagger for grunnleggende formatering av tekst</li>
            <li><tt>&lt;div&gt;</tt></li>
            <li><tt>&lt;input type="text"&gt;</tt></li>
            <li><tt>&lt;button&gt;</tt></li>
            <li><a href="https://w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
            </li>
            <li><a href="w3schools.com/html/default.asp" target="_new">w3schools HTML Reference</a></li>
        </ul>
        `;
}

function showHeaderRed() {
  blankAlle();
  document.getElementById("showHeaderRed").innerHTML = /*HTML*/ `
    Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter utseende og lignende.
    <ul>
        <li><tt>background-color</tt></li>
        <li><tt>color</tt></li>
        <li><tt>padding</tt></li>
        <li><tt>margin</tt></li>
        <li><tt>border</tt></li>
        <li><tt>text-align</tt></li>
        <li><tt>font-size</tt></li>
        <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a>
        </li>
        <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a>
        </li>
        <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
        </li>
        <li><a href="https://www.w3schools.com/cssref/index.php" target="_new">W3Schools CSS
                Reference</a>
        </li>
    </ul>
        `;
}

function showHeaderYellow() {
  blankAlle();
  document.getElementById("showHeaderYellow").innerHTML = /*HTML*/ `
    Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende
                programmering
                ved
                å
                manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
                <ul>
                    <li><tt>background-color</tt></li>
                    <li><tt>color</tt></li>
                    <li><tt>padding</tt></li>
                    <li><tt>margin</tt></li>
                    <li><tt>border</tt></li>
                    <li><tt>border-radius</tt></li>
                    <li><tt>text-align</tt></li>
                    <li><tt>font-size</tt></li>
                    <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følget kurset
                        vårt på
                        Moodle.
                    </li>
                    <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                            Reference</a>
                    </li>
                </ul>
                `;
}

function showHeaderDark() {
  blankAlle();
  document.getElementById("showHeaderDark").innerHTML = /*HTML*/ `

    <div class="placement">
    <div id="head"></div>
<div id="body"></div>
<div id="legs"></div>
</div>

`;
  showHead1();
  showBody1();
  showLegs1();
}

showHead1();
function showHead1() {
  document.getElementById("head").innerHTML = /*HTML*/ `
    <div class="alignButtons">
    <button onclick="showHead4()">◀</button>
    <img src="img/head1.png" />
    <button onclick="showHead2()">▶</button>
</div>
    `;
}

function showHead2() {
  document.getElementById("head").innerHTML = /*HTML*/ `
    <div class="alignButtons">
    <button onclick="showHead1()">◀</button>
    <img src="img/head2.png" />
    <button onclick="showHead3()">▶</button>
</div>
    `;
}

function showHead3() {
  document.getElementById("head").innerHTML = /*HTML*/ `
    <div class="alignButtons">
    <button onclick="showHead2()">◀</button>
    <img src="img/head3.png" />
    <button onclick="showHead4()">▶</button>
</div>
    `;
}

function showHead4() {
  document.getElementById("head").innerHTML = /*HTML*/ `
    <div class="alignButtons">
    <button onclick="showHead3()">◀</button>
    <img src="img/head4.png" />
    <button onclick="showHead1()">▶</button>
</div>
    `;
}

showBody1();
function showBody1() {
  document.getElementById("body").innerHTML = /*HTML*/ `
    <div class="alignButtons">
    <button onclick="showBody4()">◀</button>
    <img src="img/body1.png" />
    <button onclick="showBody2()">▶</button>
</div>
    `;
}

function showBody2() {
  document.getElementById("body").innerHTML = /*HTML*/ `
    <div class="alignButtons">
    <button onclick="showBody1()">◀</button>
    <img src="img/body2.png" />
    <button onclick="showBody3()">▶</button>
</div>
    `;
}

function showBody3() {
  document.getElementById("body").innerHTML = /*HTML*/ `
    <div class="alignButtons">
    <button onclick="showBody2()">◀</button>
    <img src="img/Body3.png" />
    <button onclick="showBody4()">▶</button>
</div>
    `;
}

function showBody4() {
  document.getElementById("body").innerHTML = /*HTML*/ `
    <div class="alignButtons">
    <button onclick="showBody3()">◀</button>
    <img src="img/body4.png" />
    <button onclick="showBody1()">▶</button>
</div>
    `;
}

showLegs1();
function showLegs1() {
  document.getElementById("legs").innerHTML = /*HTML*/ `
    <div class="alignButtons">
    <button onclick="showLegs4()">◀</button>
    <img src="img/legs1.png" />
    <button onclick="showLegs2()">▶</button>
</div>
    `;
}

function showLegs2() {
  document.getElementById("legs").innerHTML = /*HTML*/ `
    <div class="alignButtons">
    <button onclick="showLegs1()">◀</button>
    <img src="img/legs2.png" />
    <button onclick="showLegs3()">▶</button>
    </div>
    `;
}

function showLegs3() {
  document.getElementById("legs").innerHTML = /*HTML*/ `
    <div class="alignButtons">
    <button onclick="showLegs2()">◀</button>
    <img src="img/Legs3.png" />
    <button onclick="showLegs4()">▶</button>
</div>
    `;
}

function showLegs4() {
  document.getElementById("legs").innerHTML = /*HTML*/ `
    <div class="alignButtons">
    <button onclick="showLegs3()">◀</button>
    <img src="img/legs4.png" />
    <button onclick="showLegs1()">▶</button>
</div>
    `;
}
