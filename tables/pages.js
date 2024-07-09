
document.addEventListener('DOMContentLoaded', function() {

const itemsPerPage = 10;
let currentPage = 1;

function displayTable(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const tableBody = document.querySelector('#protocolTable tbody');
    tableBody.innerHTML = '';

    const paginatedItems = data.slice(start, end);
    for (const item of paginatedItems) {
        const row = `<tr>
            <td>${item.protocol}</td>
            <td>${item.description}</td>
        </tr>`;
        tableBody.innerHTML += row;
    }

    displayPagination();
}

function displayPagination() {
const pagination = document.getElementById('pagination');
pagination.innerHTML = '';

const totalPages = Math.ceil(data.length / itemsPerPage);
const maxPagesToShow = 5; // Ορίζουμε το μέγιστο πλήθος σελίδων που θα εμφανίζονται

let startPage = currentPage - 3; // Αρχίζουμε να μετράμε από την τρέχουσα σελίδα - 3
let endPage = currentPage + 2; // Τελειώνουμε στην τρέχουσα σελίδα + 2

// Βεβαιωνόμαστε ότι η startPage είναι τουλάχιστον 1
if (startPage < 1) {
startPage = 1;
endPage = Math.min(totalPages, maxPagesToShow); // Περιορίζουμε το τέλος στο maxPagesToShow
}

// Βεβαιωνόμαστε ότι η endPage είναι το πολύ totalPages
if (endPage > totalPages) {
endPage = totalPages;
startPage = Math.max(1, endPage - maxPagesToShow + 1); // Προσαρμόζουμε την startPage ανάλογα
}

// Δημιουργούμε τα κουμπιά για κάθε σελίδα
for (let i = startPage; i <= endPage; i++) {
const button = document.createElement('button');
button.textContent = i;
if (i === currentPage) {
button.disabled = true;
}
button.addEventListener('click', () => {
currentPage = i;
displayTable(currentPage);
});
pagination.appendChild(button);
}
}

displayTable(currentPage);

});
