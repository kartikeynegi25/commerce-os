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

let savedStep = localStorage.getItem('orderStep');
let currentStep = savedStep ? Number(savedStep) : 2;

function advanceOrderStatus(){
    if (currentStep >= 5) return;
    currentStep++;
    localStorage.setItem('orderStep', currentStep.toString());

    const circle = document.getElementById('step-' + currentStep);
    circle.classList.remove('bg-gray-200', 'text-gray-500');
    circle.classList.add('bg-black', 'text-white');
    circle.textContent = '✓';

    const line = document.getElementById('line-' + (currentStep -1));
    line.classList.remove('bg-gray-200');
    line.classList.add('bg-black');

    updateButtonText();

}

function applyStatusVisuals(){
    for (let i= 3; i<=currentStep; i++){
        const circle = document.getElementById('step-' + i);
        circle.classList.remove('bg-gray-200', 'text-gray-500');
        circle.classList.add('bg-black', 'text-white');
        circle.textContent = '✓';

        const line = document.getElementById('line-' + (i-1));
        line.classList.remove('bg-gray-200');
        line.classList.add('bg-black');
    }

    updateButtonText();
}

function resetOrderStatus(){
    localStorage.removeItem('orderStep');
    currentStep = 2;
    location.reload();
}

function updateButtonText(){
     const labels = ['New', 'Confirmed', 'Packed', 'Shipped', 'Delivered'];
     const btn = document.getElementById('advanceBtn');

     if (currentStep >=5){
        btn.textContent = 'Order Delivered ✓';
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');
     } else {
        btn.textContent = 'Mark as ' + labels[currentStep];
     }
}

function sendReply(){
    const input = document.getElementById('replyInput');
    const message = input.value.trim();
    if (message === '') return;

    addBoxToChat(message);
    saveReplyToStorage(message);

    input.value = '';
}

function addBoxToChat(message){
    const boxWrap = document.createElement('div');
    boxWrap.className = 'flex justify-end';
    boxWrap.innerHTML = `
        <div class="bg-gray-100 border-gray-200 rounded-2xl rounded-tr-sm px-4 py-3 max-w-md">
             <p class="text-sm">${message}</p>
             <p class="text-xs text-gray-400 mt-1">You · just now</p>
        </div>
    `;
    document.getElementById('chatBox').appendChild(boxWrap);
}
            
function saveReplyToStorage(message){
    const key = 'chatReplies_' + window.location.pathname;
    const existing = JSON.parse(localStorage.getItem(key)) || [];
    existing.push(message);
    localStorage.setItem(key, JSON.stringify(existing));
}

function loadSavedReplies(){
    const key = 'chatReplies_' + window.location.pathname;
    const existing = JSON.parse(localStorage.getItem(key)) || [];
    existing.forEach(message => addBoxToChat(message));
}
