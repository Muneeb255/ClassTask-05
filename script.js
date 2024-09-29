function calculateAge() {
    const dob = document.getElementById('dob').value;
    const dobDate = new Date(dob);

    if (dobDate == 'Invalid Date' || !dob) {
        alert('Please select a valid date of birth');
        return;
    }

    const today = new Date();
    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Update the result in the UI
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
}
