function toggleEmptyState() {
    let list = document.getElementById('inboxMessages');
    let empty = document.getElementById('inboxEmpty');

    if (list && empty) {
        list.classList.toggle('hidden');
        empty.classList.toggle('hidden');
        empty.classList.toggle('flex');
    }
}

function sendReply() {
    let box = document.getElementById('replyInput');
    if (!box) return;

    let text = box.value.trim();
    if (!text) return;

    addBoxToChat(text);
    saveReplyToStorage(text);

    box.value = '';
}

function addBoxToChat(text) {
    let feed = document.getElementById('chatBox');
    if (!feed) return;

    let bubbleWrap = document.createElement('div');
    bubbleWrap.className = 'flex justify-end';
    bubbleWrap.innerHTML = `
        <div class="market-card rounded-tr-sm px-4 py-3 max-w-md bg-stone-100/80">
            <p class="text-sm text-stone-900">${text}</p>
            <p class="text-xs text-stone-400 mt-1">You · just now</p>
        </div>
    `;
    feed.appendChild(bubbleWrap);
}

function saveReplyToStorage(text) {
    let pathKey = 'chatReplies_' + window.location.pathname;
    let history = JSON.parse(localStorage.getItem(pathKey)) || [];
    history.push(text);
    localStorage.setItem(pathKey, JSON.stringify(history));
}

function loadSavedReplies() {
    let pathKey = 'chatReplies_' + window.location.pathname;
    let history = JSON.parse(localStorage.getItem(pathKey)) || [];
    history.forEach(msg => addBoxToChat(msg));
}