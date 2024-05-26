let lastScrollTop = 0;
const navbar = document.getElementById('top-nav');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Downscroll
        navbar.style.top = '-80px'; // Adjust this value if your nav bar height is different
    } else {
        // Upscroll
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

// Get the modal
var modal = document.getElementById("signup-modal");

// Get the button that opens the modal
var btn = document.getElementById("open-signup");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle the sign-up form submission specifically for the modal
document.querySelector('.modal .signup-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    window.location.href = 'dashboard.html'; // Redirect to the dashboard page
});
