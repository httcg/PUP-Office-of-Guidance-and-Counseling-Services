import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

const appSettings = {
    databaseURL: "https://webdevform-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);

const inputFields = [
    "mathclub", "englishclub", "debateclub", "speechclub", "scienceclub",
    "otherclub", "otherclubtext", "quizzerclub", "favesubject", "leastfavesubject",
    "hobby1", "hobby2", "hobby3", "hobby4", "hobby5", "hobby6", "hobby7", "hobby8", 
    "hobby9", "hobby10", "athletics", "geeclub", "dramatics", "scouting", 
    "religiousorg", "otherinterest", "otherinteresttext", "chessclub", 
    "officer", "member", "otherpost", "otherposttext"
];

const submitButton5 = document.getElementById("submitform5");

submitButton5.addEventListener("click", function(event) {
    event.preventDefault();

    const confirmation = confirm("This is the last part of the form. Proceed to submit?");
    if (!confirmation) {
        console.log("Submission cancelled.");
        return;
    }

    inputFields.forEach(fieldId => {
        const inputFieldEl = document.getElementById(fieldId);
        if (inputFieldEl) {
            const inputValue = inputFieldEl.value;
            const fieldRef = ref(database, `interest info/${fieldId}`);
            push(fieldRef, inputValue);
        }
    });

    setTimeout(() => {
      alert("Your form has been successfully submitted.");
      window.location.href = "result.html";
    }, 1000);
});

function showConfirmationDialog(event) {
    event.preventDefault();
    const confirmation = confirm("Do you really want to leave this page? Your progress will not be saved.");
    if (confirmation) {
        window.location.href = event.target.href;
    }
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
    link.addEventListener('click', showConfirmationDialog);
});
