function toggleEmptyState() {
    let list = document.getElementById('inboxMessages');
    let empty = document.getElementById('inboxEmpty');

    if (list && empty) {
        list.classList.toggle('hidden');
        empty.classList.toggle('hidden');
        empty.classList.toggle('flex');
    }
}

function addChatBubble(text) {
    let feed = document.getElementById('chatBox');
    if (!feed) return;

    let bubble = document.createElement('div');
    bubble.className = 'flex justify-end';
    bubble.innerHTML = `
        <div class="market-card rounded-tr-sm px-4 py-3 max-w-md bg-stone-100/80">
            <p class="text-sm text-stone-900">${text}</p>
            <p class="text-xs text-stone-400 mt-1">You · just now</p>
        </div>
    `;
    feed.appendChild(bubble);
}

function sendReply() {
    let input = document.getElementById('replyInput');
    if (!input) return;

    let text = input.value.trim();
    if (!text) return;

    addChatBubble(text);

    let key = 'chatReplies_' + window.location.pathname;
    let history = JSON.parse(localStorage.getItem(key)) || [];
    history.push(text);
    localStorage.setItem(key, JSON.stringify(history));

    input.value = '';
}

function loadSavedReplies() {
    let key = 'chatReplies_' + window.location.pathname;
    let history = JSON.parse(localStorage.getItem(key)) || [];
    history.forEach(msg => addChatBubble(msg));
}