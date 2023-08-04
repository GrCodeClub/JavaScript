const searchInput = document.getElementById("searchInput");
const table = document.getElementById("table");
const rows = table.getElementsByTagName("tr");

searchInput.addEventListener("input", function() {
  const searchValue = removeAccents(searchInput.value.toLowerCase());
  const searchWords = searchValue.split(" ");

  Array.from(rows).forEach(function(row, index) {
    if (index === 0) {
      row.style.display = "table-row";
      return;
    }

    let match = false;

    Array.from(row.cells).forEach(function(cell) {
      const cellText = removeAccents(cell.textContent.toLowerCase());

      searchWords.forEach(function(word) {
        if (cellText.includes(word)) {
          match = true;
        }
      });
    });

    if (match || index === 0) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
});

function removeAccents(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
