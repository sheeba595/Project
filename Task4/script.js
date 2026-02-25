const table = document.getElementById('sortableTable');
const headers = table.querySelectorAll('th');
let sortDirection = {}; // Track direction per column

headers.forEach((header, index) => {
    sortDirection[index] = 'asc'; // default ascending

    header.addEventListener('click', () => {
        const type = header.dataset.type;
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));

        rows.sort((a, b) => {
            let aText = a.children[index].textContent;
            let bText = b.children[index].textContent;

            if (type === 'number') {
                aText = parseFloat(aText);
                bText = parseFloat(bText);
            }

            if (aText < bText) return sortDirection[index] === 'asc' ? -1 : 1;
            if (aText > bText) return sortDirection[index] === 'asc' ? 1 : -1;
            return 0;
        });

        // Append sorted rows
        rows.forEach(row => tbody.appendChild(row));

        // Toggle direction
        sortDirection[index] = sortDirection[index] === 'asc' ? 'desc' : 'asc';
    });
});