// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Thank You message for WhatsApp
function thankYou() {
    alert("Thank you for reaching out! We will respond shortly.");
}

// Toggle Bank Details
function toggleBankDetails() {
    const bankDiv = document.getElementById('bankDetails');
    bankDiv.style.display = bankDiv.style.display === "none" ? "block" : "none";
}








