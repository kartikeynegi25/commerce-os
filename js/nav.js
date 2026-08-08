function filterTable(){
    const input = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(input) ? '' : 'none';
    });
}

function filterList(){
    const input = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('.inbox-row');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(input) ? '' : 'none';
    });
}

function toggleMobileMenu(){
    const sidebar = document.getElementById('sidebar')
    sidebar.classList.toggle('hidden');
}

function toggleEmptyState(){
    document.getElementById('inboxMessages').classList.toggle('hidden');
    document.getElementById('inboxEmpty').classList.toggle('hidden');
    document.getElementById('inboxEmpty').classList.toggle('flex');
}