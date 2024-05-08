function calculateAge() {
  let birthDate = new Date(document.getElementById("birthDate").value);
  let today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let  months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }
  if (days < 0) {
    let lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
    days += lastMonth.getDate();
    months--;
  }

  let ageString = "";

  if (years > 0) {
    ageString += years + " an" + (years > 1 ? "s" : "") + ", ";
  }

  if (months > 0) {
    ageString += months + " mois, ";
  }

  if (days > 0) {
    ageString += days + " jour" + (days > 1 ? "s" : "");
  }

  document.getElementById("result").innerText = "Votre âge est : " + ageString;
}
