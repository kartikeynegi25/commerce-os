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

let currentStep = 2;

function advanceOrderStatus(){
    if (currentStep >= 5) return;
    currentStep++;

    const circle = document.getElementById('step-' + currentStep);
    circle.classList.remove('bg-gray-200', 'text-gray-500');
    circle.classList.add('bg-black', 'text-white');
    circle.textContent = '✓';

    const line = document.getElementById('line-' + (currentStep -1));
    line.classList.remove('bg-gray-200');
    line.classList.add('bg-black');

    const labels=['New', 'Confirmed', 'Packed', 'Shipped', 'Delivered'];
    const btn = document.getElementById('advanceBtn');

    if (currentStep >=5) {
        btn.textContent = 'Order Delivered ✓';
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        btn.textContent = 'Mark as ' + labels[currentStep];
    }
}