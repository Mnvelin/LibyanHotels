// Wrap the code in an event listener for DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the image link
    document.getElementById("imageLink").addEventListener("click", NavToBenghaziHotels);
});
document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the image link
    document.getElementById("Hotel1Page").addEventListener("click", NavToHotel1Page);
});
document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the image link
    document.getElementById("Hotel2Page").addEventListener("click", NavToHotel2Page);
});
// Function to redirect to the new page
function NavToBenghaziHotels() {
    // Perform any actions you want before redirecting (if needed)

    // Redirect to the new page
    window.location.href = "BenghaziHotels.html";
}
function NavToHotel1Page() {
    // Perform any actions you want before redirecting (if needed)

    // Redirect to the new page
    window.location.href = "Hotel1Page.html";
}
function NavToHotel2Page() {
    // Perform any actions you want before redirecting (if needed)

    // Redirect to the new page
    window.location.href = "Hotel2Page.html";
}