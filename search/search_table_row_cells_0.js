const searchInput = document.getElementById("searchInput");
const table = document.getElementById("table");
const rows = table.getElementsByTagName("tr");

searchInput.addEventListener("input", function() {
  const searchValue = removeAccents(searchInput.value.toLowerCase());
  console.log("Search Value:", searchValue);
  const searchPhrases = searchValue.match(/\b[\w'-]+\b/g); // Φράσεις με βάση τα κενά
  console.log("Search Phrases:", searchPhrases);

  Array.from(rows).forEach(function(row, index) {
    let match = false;
    const firstCellText = removeAccents(row.cells[0].textContent.toLowerCase());
    console.log("Cell Text:", firstCellText);

    searchPhrases.forEach(function(phrase) {
      console.log("Current Phrase:", phrase);
      if (firstCellText.indexOf(phrase) === 0 || firstCellText.indexOf(' ' + phrase) !== -1) {
        match = true;
      }
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
