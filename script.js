// Navbar scroll effect
const navbar = document.querySelector('.navigation-bar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {  // when user scrolls 50px down
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
//slider

// ===== SLIDER (RESPONSIVE) =====

let index = 0;
const total = document.querySelectorAll('.product-item').length;

function getVisibleProducts() {
  if (window.innerWidth <= 600) return 1;   // mobile
  if (window.innerWidth <= 900) return 2;   // tablet
  return 3;                                 // desktop
}

function getProductWidth() {
  if (window.innerWidth <= 600) return 280;
  return 310;
}

function slide(direction) {
  const visible = getVisibleProducts();
  const productWidth = getProductWidth();
  const maxIndex = Math.ceil(total / visible) - 1;

  index += direction;
  index = Math.max(0, Math.min(index, maxIndex));

  document.getElementById("productTrack").style.transform =
    `translateX(-${index * visible * productWidth}px)`;
}

// Reset slider on resize
window.addEventListener("resize", () => {
  index = 0;
  slide(0);
});


//contact form
function sendEmail() {
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value
    const status = document.getElementById("status")
    const output = document.getElementById("output")
    
    if (!username || !email || !message) {
        status.textContent = "Please fill all fields"
        return
    }

    
output.innerHTML = `
        Username: ${username}<br>
        Email: ${email}<br>
        Message: ${message}
    `
status.textContent = "Sending message..."
    emailjs.send("service_jc8x7wf", "template_4sqiy68", {
        username: username,
        email: email,
        message: message
    })
    .then(() => {
        status.textContent = "Message sent successfully ✅"
    })
    .catch(() => {
        status.textContent = "Failed to send message ❌"
    })
}