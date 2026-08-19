// switch between the empty inbox screen and the message list
function toggleEmptyState() {
    let messageList = document.getElementById('inboxMessages');
    let emptyScreen = document.getElementById('inboxEmpty');

    if (messageList != null && emptyScreen != null) {
        messageList.classList.toggle('hidden');
        emptyScreen.classList.toggle('hidden');
        emptyScreen.classList.toggle('flex');
    }
}

function addChatBubble(messageText) {
    let chatFeed = document.getElementById('chatBox');
    
    if (chatFeed == null) {
        return;
    }

    let newBubble = document.createElement('div');
    newBubble.className = 'flex justify-end';
    
    newBubble.innerHTML = '' +
        '<div class="market-card rounded-tr-sm px-4 py-3 max-w-md bg-stone-100/80">' +
            '<p class="text-sm text-stone-900">' + messageText + '</p>' +
            '<p class="text-xs text-stone-400 mt-1">You · just now</p>' +
        '</div>';
        
    chatFeed.appendChild(newBubble);
    
    chatFeed.scrollTop = chatFeed.scrollHeight;
}

function sendReply() {
    let inputBox = document.getElementById('replyInput');
    
    if (inputBox == null) {
        return;
    }

    let textString = inputBox.value.trim();
    
    if (textString === "") {
        return; 
    }

    addChatBubble(textString);

    let storageKey = 'chatReplies_' + window.location.pathname;
    let savedStuff = localStorage.getItem(storageKey);
    let chatHistory = [];
    
    if (savedStuff != null) {
        chatHistory = JSON.parse(savedStuff);
    }
    
    chatHistory.push(textString);
    localStorage.setItem(storageKey, JSON.stringify(chatHistory));

    inputBox.value = '';
}

function loadSavedReplies() {
    let storageKey = 'chatReplies_' + window.location.pathname;
    let savedStuff = localStorage.getItem(storageKey);
    
    if (savedStuff != null) {
        let chatHistory = JSON.parse(savedStuff);
        
        // loop through and add them to screen
        for (let i = 0; i < chatHistory.length; i++) {
            addChatBubble(chatHistory[i]);
        }
    }
}