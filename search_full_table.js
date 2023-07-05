const searchInput = document.getElementById("searchInput");
const table = document.getElementById("table");
const rows = table.getElementsByTagName("tr");

searchInput.addEventListener("input", function() {
  const searchValue = removeAccents(searchInput.value.toLowerCase());
  const searchWords = searchValue.split(" ");

  Array.from(rows).forEach(function(row) {
    let match = false;

    Array.from(row.getElementsByTagName("td")).forEach(function(cell) {
      const cellText = removeAccents(cell.textContent.toLowerCase());

      searchWords.forEach(function(word) {
        if (cellText.includes(word)) {
          match = true;
        }
      });
    });

    if (match) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
});

function removeAccents(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
