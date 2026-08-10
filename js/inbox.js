

function toggleEmptyState(){
    document.getElementById('inboxMessages').classList.toggle('hidden');
    document.getElementById('inboxEmpty').classList.toggle('hidden');
    document.getElementById('inboxEmpty').classList.toggle('flex');
}

let savedStep = localStorage.getItem('orderStep');
let currentStep = savedStep ? Number(savedStep) : 2;



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
