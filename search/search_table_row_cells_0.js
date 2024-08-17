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
            tableBody.appendChild(headerRow.cloneNode(true)); // Use cloneNode to keep original header
        }

        // Paginate rows, skipping the header row
        const paginatedItems = Array.from(rows1).slice(start, end);
        paginatedItems.forEach(row => {
            tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
        });

        displayPagination();
    }

    function fullTable(page) {
        const tableBody = document.querySelector('#table tbody');
        tableBody.innerHTML = '';

        // Add header row
        if (headerRow) {
            tableBody.appendChild(headerRow.cloneNode(true)); // Use cloneNode to keep original header
        }

        rows1.forEach(row => {
            tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
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

});




// ΒΑΖΕΙ ΟΛΕς ΤΙς ΓΡΑΜΜΕΣ ΤΟΥ ΚΕΙΜΕΝΟΥ ΜΑΖΙ ΓΙΑ ΝΑ ΓΙΝΕΙ Η ΑΝΑΖΗΤΗΣΗ
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
            tableBody.appendChild(headerRow.cloneNode(true)); // Use cloneNode to keep original header
        }

        // Paginate rows, skipping the header row
        const paginatedItems = Array.from(rows1).slice(start, end);
        paginatedItems.forEach(row => {
            tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
        });

        displayPagination();
    }

    function fullTable() {
        const tableBody = document.querySelector('#table tbody');
        tableBody.innerHTML = '';

        // Add header row
        if (headerRow) {
            tableBody.appendChild(headerRow.cloneNode(true)); // Use cloneNode to keep original header
        }

        rows1.forEach(row => {
            tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
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
