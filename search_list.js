// ανάθεση του DOM element με το αναγνωριστικό "searchInput" 
const searchInput = document.getElementById("searchInput");
// ανάθεση όλων των DOM elements τύπου "ul" στη μεταβλητή lists
const lists = document.querySelectorAll("ul");
// ανάθεση όλων  των DOM elements τύπου "li" στη μεταβλητή items.
const items = document.querySelectorAll("li");

searchInput.addEventListener("input", function() {
  //  μετατροπή σε πεζά γράμματα
  const searchValue = removeAccents(searchInput.value.toLowerCase());

  //  Η μέθοδος forEach καλείται στο lists για να εφαρμόσει την αναζήτηση σε κάθε λίστα.
  lists.forEach(function(list) {
    // Με την Array.from(list.getElementsByTagName("li")).forEach καλείται η μέθοδος forEach σε κάθε στοιχείο της λίστας.
    Array.from(list.getElementsByTagName("li")).forEach(function(item) {
      const itemText = removeAccents(item.textContent.toLowerCase());
      // Ελέγχεται αν το κείμενο του στοιχείου περιέχει την τιμή αναζήτησης, και αν ναι, 
      // η εμφάνιση του στοιχείου ορίζεται σε "block", αλλιώς η εμφάνιση του ορίζεται σε "none".
      if (itemText.includes(searchValue)) {
        item.style.display = "block"; // Εμφάνιση στοιχείου
      } else {
        item.style.display = "none"; // Απόκρυψη στοιχείου
      }
    });
  });
});
// Η συνάρτηση removeAccents δέχεται ένα κείμενο ως είσοδο και επιστρέφει το ίδιο κείμενο με αφαιρεμένους τους τόνους
// Η μέθοδος normalize("NFD") χρησιμοποιείται για να φέρει το κείμενο στην κανονική μορφή αποσύνθεσης (Normalization Form Decomposition). 
// Η μέθοδος replace(/[\u0300-\u036f]/g, "") χρησιμοποιείται για να αφαιρέσει τις διακριτικές σημάνσεις από το κείμενο.
// Η έκφραση /[\u0300-\u036f]/g αντιπροσωπεύει ένα εύρος Unicode που περιλαμβάνει τις διακριτικές σημάνσεις, 
// και η μέθοδος replace αντικαθιστά αυτές τις σημάνσεις με το κενό διάστημα, προκειμένου να τις αφαιρέσει από το κείμενο.
function removeAccents(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

