document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the image link
    document.getElementById("CitiesText").addEventListener("click", NavToCities);
});
document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the image link
    document.getElementById("BenghaziText").addEventListener("click", NavToBenghaziHotels);
});
document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the image link
    document.getElementById("Hotel1Text").addEventListener("click", NavToHotel1);
});
document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the image link
    document.getElementById("Room1Text").addEventListener("click", NavToReservation);
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ConfirmationButton").addEventListener("click", SendSMS);
});

function NavToCities() {
    // Perform any actions you want before redirecting (if needed)

    // Redirect to the new page
    window.location.href = "Cities.html";
}
function NavToBenghaziHotels() {
    // Perform any actions you want before redirecting (if needed)

    // Redirect to the new page
    window.location.href = "BenghaziHotels.html";
}
function NavToHotel1() {
    // Perform any actions you want before redirecting (if needed)

    // Redirect to the new page
    window.location.href = "Hotel1.html";
}
function NavToReservation() {
    // Perform any actions you want before redirecting (if needed)

    // Redirect to the new page
    window.location.href = "ReservationPage.html";
}
function SendSMS() {
    const customerName = document.getElementById('CustomerName').value;
    const recipient = document.getElementById('CustomerPhoneNumber').value;

    const fullMessage = `Customer Name: ${customerName}\nPhone Number: ${recipient}`;

    fetch('http://localhost:5000/api/sms/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ recipient, message: fullMessage })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert('Error: ' + data.error);
        } else {
            alert('SMS sent successfully!');
        }
    })
    .catch(error => {
        alert('Error: ' + error.message);
    });
    window.location.href = "ConfirmationFeedback.html";
}