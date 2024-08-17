document.addEventListener('DOMContentLoaded', function() {
    const itemsPerPage = 15;
    let currentPage = 1;

    const table1 = document.getElementById('table');
    const rows1 = table1.querySelectorAll('tr');
    const headerRow = table1.querySelector('#title-table');

    function displayTable(page) {
        const start = (page - 1) * itemsPerPage + 1; // +1 to skip header row
        const end = start + itemsPerPage;
        const tableBody = document.querySelector('#table tbody');
        tableBody.innerHTML = '';

        // Add header row
        if (headerRow) {
            tableBody.innerHTML += headerRow.outerHTML;
        }

        // Paginate rows, skipping the header row
        const paginatedItems = Array.from(rows1).slice(start, end);
        paginatedItems.forEach(row => {
            const cells = row.querySelectorAll('td');
            const cell0 = cells[0].textContent.trim();
            const cell1 = cells[1].innerHTML.trim();
            const cell2 = cells[2].innerHTML.trim();

            const newRow = `<tr>
                <td>${cell0}</td>
                <td>${cell1}</td>
                <td>${cell2}</td>
            </tr>`;
            tableBody.innerHTML += newRow;
        });

        displayPagination();
    }

    function fullTable(page) {
        const tableBody = document.querySelector('#table tbody');
        tableBody.innerHTML = '';

        // Add header row
        if (headerRow) {
            tableBody.innerHTML += headerRow.outerHTML;
        }

        rows1.forEach(row => {
            const cells = row.querySelectorAll('td');
            const cell0 = cells[0].textContent.trim();
            const cell1 = cells[1].innerHTML.trim();
            const cell2 = cells[2].innerHTML.trim();

            const newRow = `<tr>
                <td>${cell0}</td>
                <td>${cell1}</td>
                <td>${cell2}</td>
            </tr>`;
            tableBody.innerHTML += newRow;
        });
    }

    function displayPagination() {
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        const totalPages = Math.ceil((rows1.length - 1) / itemsPerPage); // Adjusted for header row
        const maxPagesToShow = 5;

        let startPage = currentPage - 2;
        let endPage = currentPage + 2;

        if (startPage < 1) {
            startPage = 1;
            endPage = Math.min(totalPages, maxPagesToShow);
        }

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

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

    function checkAndDisplayTable() {
        const showCheckbox = document.getElementById('show');
        
        if (showCheckbox.checked) {
            const pagination = document.getElementById('pagination');
            const searchInput = document.getElementById('search');
            searchInput.style.display = 'block';
            pagination.style.display = 'none';
            fullTable(currentPage);
        } else {
            displayTable(currentPage);
            const searchInput = document.getElementById('search');
            searchInput.style.display = 'none';
            pagination.style.display = 'block';
        }
    }

    // Add event listener to the checkbox
    const showCheckbox = document.getElementById('show');
    showCheckbox.addEventListener('change', checkAndDisplayTable);

    // Initial table display based on checkbox state
    checkAndDisplayTable();
});
