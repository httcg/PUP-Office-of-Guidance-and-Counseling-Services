import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
 
const appSettings = {
    databaseURL: "https://webdevform-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);
const personalinfoInDB = ref(database, "personalinfo");
const submitButton2 = document.getElementById("submitform2");

submitButton2.addEventListener("click", function(event) {
    event.preventDefault();

    const educationRows = document.getElementById("educationRows").children;

    // oop through each educational row
    for (let i = 0; i < educationRows.length; i++) {
        const educlevelField = educationRows[i].querySelector(`[name^="educlevel-"]`);
        const schoolField = educationRows[i].querySelector(`[name^="school-"]`);
        const schoolStatField = educationRows[i].querySelector(`[name^="school-stat-"]:checked`);

        if (educlevelField && schoolField && schoolStatField) {
            const educinputValue1 = educlevelField.value;
            const educinputValue2 = schoolField.value;
            const educinputValue3 = schoolStatField.value;

            // unique ID based on educlevel, school, and schoolstat
            const uniqueId = `${educinputValue1}_${educinputValue2}_${educinputValue3}`;

            const educationalInfoRef = ref(database, `educational info/${uniqueId}`);
            push(educationalInfoRef, {
                educlevel: educinputValue1,
                school: educinputValue2,
                schoolstat: educinputValue3
            });
        }
    }

    document.getElementById("myForm").submit();
    window.location.href = "family.html";
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

  