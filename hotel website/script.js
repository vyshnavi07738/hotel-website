function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let room = document.getElementById("room").value;

    if (name == "" || email == "" || phone == "" || room == "") {
        alert("Please fill all the required fields.");
        return false;
    }

    alert("Booking Request Submitted Successfully!");
    return true;
}