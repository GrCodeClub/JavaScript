// <button id="scrollTopBtn">Πήγαινε στην κορυφή</button>

// Επιλέγουμε το κουμπί
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Εμφανίζουμε το κουμπί όταν ο χρήστης κάνει scroll κάτω από 20px
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};
// Όταν ο χρήστης κάνει κλικ στο κουμπί, πηγαίνει στην κορυφή της σελίδας
scrollTopBtn.onclick = function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Προσθέτει ομαλή κύλιση
  });
};
