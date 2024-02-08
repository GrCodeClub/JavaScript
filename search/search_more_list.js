//------------1η ΑΝΑΖΗΤΗΣΗ-----------------------------------
// searchInput
// lists
const searchInput = document.getElementById("searchInput");
const lists = document.querySelectorAll(".list");

searchInput.addEventListener("input", function() {
  const searchValue = removeAccents(searchInput.value.toLowerCase());

  lists.forEach(function(list) {
    Array.from(list.getElementsByTagName("li")).forEach(function(item) {
      const itemText = removeAccents(item.textContent.toLowerCase());

      if (itemText.includes(searchValue)) {
        item.style.display = "block"; // Εμφάνιση στοιχείου
      } else {
        item.style.display = "none"; // Απόκρυψη στοιχείου
      }
    });
  });
});

function removeAccents(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

//------------2η ΑΝΑΖΗΤΗΣΗ-----------------------------------
// searchInput1
// lists1
const searchInput1 = document.getElementById("searchInput1");
const lists1 = document.querySelectorAll(".list1");

searchInput1.addEventListener("input", function() {
  const searchValue = removeAccents(searchInput1.value.toLowerCase());

  lists1.forEach(function(lists1) {
    Array.from(lists1.getElementsByTagName("li")).forEach(function(item) {
      const itemText = removeAccents(item.textContent.toLowerCase());

      if (itemText.includes(searchValue)) {
        item.style.display = "block"; // Εμφάνιση στοιχείου
      } else {
        item.style.display = "none"; // Απόκρυψη στοιχείου
      }
    });
  });
});

function removeAccents(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
