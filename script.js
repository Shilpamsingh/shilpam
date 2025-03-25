function calculateAge() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    if (!day || !month || !year) {
        document.getElementById("result").innerHTML = "Please enter a valid date of birth!";
        return;
    }

    let dob = new Date(year, month - 1, day);
    let today = new Date();

    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    if (ageDays < 0) {
        ageMonths -= 1;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    document.getElementById("result").innerHTML = 
        `Your Age: ${ageYears} Years, ${ageMonths} Months, ${ageDays} Days`;
}
