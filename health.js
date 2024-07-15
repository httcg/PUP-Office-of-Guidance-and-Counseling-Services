import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
 
const appSettings = {
    databaseURL: "https://webdevform-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);
const personalinfoInDB = ref(database, "personalinfo");

const inputFieldEl = document.getElementById("visionproblem")
const inputFieldEl2 = document.getElementById("reasonvision")
const inputFieldEl3 = document.getElementById("hearingproblem")
const inputFieldEl4 = document.getElementById("reasonhearing")
const inputFieldEl5 = document.getElementById("speechproblem")
const inputFieldEl6 = document.getElementById("reasonspeech")
const inputFieldEl7 = document.getElementById("genhealthproblem")
const inputFieldEl8 = document.getElementById("reasongenhealth")
const inputFieldEl9 = document.getElementById("psychiatrist_consulted")
const inputFieldEl10 = document.getElementById("psychologist_consulted")
const inputFieldEl11= document.getElementById("counselor_consulted")
const inputFieldEl12= document.getElementById("lastconsulted")
const inputFieldEl13= document.getElementById("purposeconsulted")
const inputFieldEl14= document.getElementById("otherpurposeconsult")

const submitButton4 = document.getElementById("submitform4")

submitButton4.addEventListener("click", function(event) {
    event.preventDefault();

    let inputValue1 = inputFieldEl.value
    let inputValue2 = inputFieldEl2.value
    let inputValue3 = inputFieldEl3.value
    let inputValue4 = inputFieldEl4.value
    let inputValue5 = inputFieldEl5.value
    let inputValue6 = inputFieldEl6.value
    let inputValue7 = inputFieldEl7.value
    let inputValue8 = inputFieldEl8.value
    let inputValue9 = inputFieldEl9.value
    let inputValue10 = inputFieldEl10.value
    let inputValue11 = inputFieldEl11.value
    let inputValue12 = inputFieldEl12.value
    let inputValue13 = inputFieldEl13.value
    let inputValue14 = inputFieldEl14.value

    const visionproblem = ref(database, "health info/eyes");
    const reasonvision = ref(database, "health info/eyes");
    const hearingproblem = ref(database, "health info/ears");
    const reasonhearing = ref(database, "health info/ears");
    const speechproblem = ref(database, "health info/mouth");
    const reasonspeech = ref(database, "health info/mouth");
    const genhealthproblem = ref(database, "health info/body");
    const reasongenhealth = ref(database, "health info/body");
    const psychiatrist_consulted = ref(database, "health info/consultation/with psychiatrist");
    const psychologist_consulted = ref(database, "health info/consultation/with psychologist");
    const counselor_consulted = ref(database, "health info/consultation/with counselor");
    const lastconsulted = ref(database, "health info/consultation");
    const purposeconsulted = ref(database, "health info/consultation");
    const otherpurposeconsult = ref(database, "health info/consultation");
    
    push(visionproblem, inputValue1)
    push(reasonvision, inputValue2)
    push(hearingproblem, inputValue3)
    push(reasonhearing, inputValue4)
    push(speechproblem, inputValue5)
    push(reasonspeech, inputValue6)
    push(genhealthproblem, inputValue7)
    push(reasongenhealth, inputValue8)
    push(psychiatrist_consulted, inputValue9)
    push(psychologist_consulted, inputValue10)
    push(counselor_consulted, inputValue11)
    push(lastconsulted, inputValue12)
    push(purposeconsulted, inputValue13)
    push(otherpurposeconsult, inputValue14)
    
    document.getElementById("myForm").submit(); 
    window.location.href = "interest.html"; 

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