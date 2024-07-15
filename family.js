import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
 
const appSettings = {
    databaseURL: "https://webdevform-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);
const personalinfoInDB = ref(database, "personalinfo");

const inputFieldEl = document.getElementById("fathername")
const inputFieldEl2 = document.getElementById("fatherage")
const inputFieldEl3 = document.getElementById("fstatus")
//const inputFieldEl4 = document.getElementById("civilstats")
const inputFieldEl5 = document.getElementById("fathereducattainment")
const inputFieldEl6 = document.getElementById("fatheroccupation")
const inputFieldEl7 = document.getElementById("fatheremployername")
const inputFieldEl8 = document.getElementById("fatheremployeraddress")
const inputFieldEl9 = document.getElementById("mothername")
const inputFieldEl10 = document.getElementById("motherage")
const inputFieldEl11= document.getElementById("mstatus")
const inputFieldEl12= document.getElementById("mothereducattainment")
const inputFieldEl13= document.getElementById("motheroccupation")
const inputFieldEl14= document.getElementById("motheremployername")
const inputFieldEl15= document.getElementById("motheremployeraddress")
const inputFieldEl16= document.getElementById("guardianname")
const inputFieldEl17= document.getElementById("guardianage")
const inputFieldEl18= document.getElementById("gstatus")
const inputFieldEl19= document.getElementById("guardianeducattainment")
const inputFieldEl20= document.getElementById("guardianoccupation")
const inputFieldEl21= document.getElementById("guardianemployername")
const inputFieldEl22= document.getElementById("guardianemployeraddress")
const inputFieldEl23= document.getElementById("childrenno")
const inputFieldEl24= document.getElementById("famsupport")
//const inputFieldEl25= document.getElementById("guardianemployeraddress")
const inputFieldEl26= document.getElementById("numberofbrothers")
const inputFieldEl27= document.getElementById("numberofsisters")
const inputFieldEl28= document.getElementById("whofinancesu")


const submitButton3 = document.getElementById("submitform3")

submitButton3.addEventListener("click", function(event) {
    
    let inputValue1 = inputFieldEl.value
    let inputValue2 = inputFieldEl2.value
    let inputValue3 = inputFieldEl3.value
    //let inputValue4 = inputFieldEl4.value
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
    let inputValue15 = inputFieldEl15.value
    let inputValue16 = inputFieldEl16.value
    let inputValue17 = inputFieldEl17.value
    let inputValue18 = inputFieldEl18.value
    let inputValue19 = inputFieldEl19.value
    let inputValue20 = inputFieldEl20.value
    let inputValue21 = inputFieldEl21.value
    let inputValue22 = inputFieldEl22.value
    let inputValue23 = inputFieldEl23.value
    let inputValue24 = inputFieldEl24.value
    //let inputValue25 = inputFieldEl25.value
    let inputValue26 = inputFieldEl26.value
    let inputValue27 = inputFieldEl27.value
    let inputValue28 = inputFieldEl28.value

    const fathername = ref(database, "family info/fatherinfo");
    const fatherage = ref(database, "family info/fatherinfo");
    const fstatus = ref(database, "family info/fatherinfo");
    const fathereducattainment = ref(database, "family info/fatherinfo");
    const fatheroccupation = ref(database, "family info/fatherinfo");
    const fatheremployername = ref(database, "family info/fatherinfo");
    const fatheremployeraddress = ref(database, "family info/fatherinfo");
    const mothername = ref(database, "family info/mother info");
    const motherage = ref(database, "family info/mother info");
    const mstatus = ref(database, "family info/mother info");
    const mothereducattainment = ref(database, "family info/mother info");
    const motheroccupation = ref(database, "family info/mother info");
    const motheremployername = ref(database, "family info/mother info");
    const motheremployeraddress = ref(database, "family info/mother info");
    const guardianname = ref(database, "family info/guardian info");
    const guardianage = ref(database, "family info/guardian info");
    const gstatus = ref(database, "family info/guardian info");
    const guardianeducattainment = ref(database, "family info/guardian info");
    const guardianoccupation = ref(database, "family info/guardian info");
    const guardianemployername = ref(database, "family info/guardian info");
    const guardianemployeraddress = ref(database, "family info/guardian info");
    const childrenno = ref(database, "family info/family ");
    const famsupport = ref(database, "family info/family");
    const numberofbrothers = ref(database, "family info/family");
    const numberofsisters = ref(database, "family info/family");
    const whofinancesu = ref(database, "family info/family");

   push(fathername, inputValue1)
   push(fatherage, inputValue2)
   push(fstatus, inputValue3)
   //push(civilstats, inputValue4)
   push(fathereducattainment, inputValue5)
   push(fatheroccupation, inputValue6)
   push(fatheremployername, inputValue7)
   push(fatheremployeraddress, inputValue8)
   push(mothername, inputValue9)
   push(motherage, inputValue10)
   push(mstatus, inputValue11)
   push(mothereducattainment, inputValue12)
   push(motheroccupation, inputValue13)
   push(motheremployername, inputValue14)
   push(motheremployeraddress, inputValue15)
   push(guardianname, inputValue16)
   push(guardianage, inputValue17)
   push(gstatus, inputValue18)
   push(guardianeducattainment, inputValue19)
   push(guardianoccupation, inputValue20)
   push(guardianemployername, inputValue21)
   push(guardianemployeraddress, inputValue22)
   push(childrenno, inputValue23)
   push(famsupport, inputValue24)
   push(numberofbrothers, inputValue26)
   push(numberofsisters, inputValue27)
   push(whofinancesu, inputValue28)

   document.getElementById("myForm").submit(); 
   window.location.href = "health.html"; 

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