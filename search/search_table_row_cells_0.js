// Αναζητά το στοιχείο με ID "searchInput"
const searchInput = document.getElementById("searchInput");

// Αναζητά τον πίνακα με ID "table"
const table = document.getElementById("table");

// Παίρνει όλες τις γραμμές του πίνακα
const rows = table.getElementsByTagName("tr");

// Προσθέτει έναν Listener για το συμβάν εισαγωγής στο πεδίο αναζήτησης
searchInput.addEventListener("input", function() {
  // Παίρνει την τιμή αναζήτησης και την μετατρέπει σε πεζούς χαρακτήρες και αφαιρεί τις τόνους
  const searchValue = removeAccents(searchInput.value.toLowerCase());

  // Επαναλαμβάνει κάθε γραμμή του πίνακα
  Array.from(rows).forEach(function(row, index) {
    // Αρχικοποιεί τη μεταβλητή match σε false για κάθε γραμμή
    let match = false;

    // Παίρνει το κείμενο του πρώτου κελιού και το μετατρέπει σε πεζούς χαρακτήρες και αφαιρεί τις τόνους
    const firstCellText = removeAccents(row.cells[0].textContent.toLowerCase());

    // Ελέγχει εάν το κείμενο του 1ου κελιού περιέχει την τιμή αναζήτησης
    if (firstCellText.includes(searchValue)) {
      match = true; // Εάν υπάρχει αντιστοίχιση, ορίζει τη μεταβλητή match σε true
    }

    // Εάν υπάρχει αντιστοίχιση ή είμαστε στην 1η γραμμή, εμφανίζει την γραμμή, διαφορετικά την κρύβει
    if (match || index === 0) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
});

// Συνάρτηση που αφαιρεί τους τόνους από ένα κείμενο
function removeAccents(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
