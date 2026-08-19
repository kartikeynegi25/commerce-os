// search for table rows
function searchRows() {
    let searchBox = document.getElementById('searchInput');
    let query = searchBox.value.toLowerCase();
    let allRows = document.querySelectorAll('tbody tr');

    for (let i = 0; i < allRows.length; i++) {
        let rowText = allRows[i].textContent.toLowerCase();
        
        if (rowText.includes(query)) {
            allRows[i].style.display = '';
        } else {
            allRows[i].style.display = 'none';
        }
    }
}

function searchInbox() {
    let searchBox = document.getElementById('searchInput');
    let query = searchBox.value.toLowerCase();
    let messageRows = document.querySelectorAll('.inbox-row');

    for (let i = 0; i < messageRows.length; i++) {
        let text = messageRows[i].textContent.toLowerCase();
        
        if (text.includes(query)) {
            messageRows[i].style.display = '';
        } else {
            messageRows[i].style.display = 'none';
        }
    }
}

function openMenu() {
    let sideBar = document.getElementById('sidebar');
    let darkBackground = document.getElementById('mobileMenuBackdrop');
    
    if (sideBar != null) {
        sideBar.classList.toggle('-translate-x-full');
    }
    if (darkBackground != null) {
        darkBackground.classList.toggle('hidden');
    }
}

function alertPop(messageText) {
    let popupBox = document.createElement('div');
    popupBox.className = 'fixed bottom-4 right-4 bg-[#1f5238] text-white text-sm font-bold px-4 py-3 rounded-xl shadow-lg z-50';
    popupBox.textContent = messageText;
    
    document.body.appendChild(popupBox);
    
    setTimeout(function() {
        popupBox.remove();
    }, 2500);
}

function flipSwitch(buttonElement, saveKey) {
    buttonElement.classList.toggle('bg-[#164028]');
    buttonElement.classList.toggle('bg-stone-200');
    
    let whiteCircle = buttonElement.querySelector('span');
    if (whiteCircle != null) {
        whiteCircle.classList.toggle('translate-x-5');
    }
    
    let isTurnedOn = buttonElement.classList.contains('bg-[#164028]');
    
    if (saveKey != null) {
        if (isTurnedOn) {
            localStorage.setItem(saveKey, 'true');
        } else {
            localStorage.setItem(saveKey, 'false');
        }
    }
}

function switchQuietHours(btn) {
    flipSwitch(btn, 'quietHoursOn');
}

function switchWhatsapp() {
    let statusLabel = document.getElementById('whatsappStatus');
    let botToggleBtn = document.getElementById('whatsappBotToggle');
    
    if (statusLabel.textContent.trim() === 'Connected') {
        statusLabel.textContent = 'Disconnected';
        statusLabel.className = 'text-xs font-bold bg-red-100 text-red-700 px-3 py-1.5 rounded-full cursor-pointer';
        
        botToggleBtn.disabled = true;
        botToggleBtn.classList.remove('bg-[#164028]');
        botToggleBtn.classList.add('bg-stone-200', 'opacity-50', 'cursor-not-allowed');
        
        let circle = botToggleBtn.querySelector('span');
        if (circle != null) {
            circle.classList.remove('translate-x-5');
        }
        
        localStorage.setItem('whatsappConnected', 'false');
        alertPop('WhatsApp disconnected');
        
    } else {
        statusLabel.textContent = 'Connected';
        statusLabel.className = 'text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full cursor-pointer';
        
        botToggleBtn.disabled = false;
        botToggleBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        
        localStorage.setItem('whatsappConnected', 'true');
        alertPop('WhatsApp connected!');
    }
}

function switchInstagram() {
    let statusLabel = document.getElementById('instagramStatus');
    let botToggleBtn = document.getElementById('instagramBotToggle');
    
    if (statusLabel.textContent.trim() === 'Connected') {
        statusLabel.textContent = 'Disconnected';
        statusLabel.className = 'text-xs font-bold bg-red-100 text-red-700 px-3 py-1.5 rounded-full cursor-pointer';
        
        botToggleBtn.disabled = true;
        botToggleBtn.classList.remove('bg-[#164028]');
        botToggleBtn.classList.add('bg-stone-200', 'opacity-50', 'cursor-not-allowed');
        
        let circle = botToggleBtn.querySelector('span');
        if (circle != null) {
            circle.classList.remove('translate-x-5');
        }
        
        localStorage.setItem('instagramConnected', 'false');
        alertPop('Instagram disconnected');
        
    } else {
        statusLabel.textContent = 'Connected';
        statusLabel.className = 'text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full cursor-pointer';
        
        botToggleBtn.disabled = false;
        botToggleBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        
        localStorage.setItem('instagramConnected', 'true');
        alertPop('Instagram connected!');
    }
}

function switchCallAgent() {
    let mainBtn = document.getElementById('callingBtn');
    let statusText = document.getElementById('callingStatus');
    let botRow = document.getElementById('callingBotRow');
    let botToggle = document.getElementById('callingBotToggle');
    let botSubtext = document.getElementById('callingBotSubtext');
    
    if (mainBtn.textContent.trim() === 'Disconnect') {
        mainBtn.textContent = 'Connect';
        mainBtn.className = 'btn-forest text-xs font-bold px-3 py-1.5 rounded-full transition';
        statusText.textContent = 'Not connected';
        statusText.className = 'text-xs text-stone-500 font-medium';
        botRow.classList.add('opacity-50');
        
        botToggle.disabled = true;
        botToggle.classList.add('cursor-not-allowed');
        botToggle.classList.remove('bg-[#164028]');
        botToggle.classList.add('bg-stone-200');
        
        let circle = botToggle.querySelector('span');
        if (circle != null) {
            circle.classList.remove('translate-x-5');
        }
        
        botSubtext.textContent = 'Connect an AI Calling Agent above to enable outbound COD calls';
        localStorage.setItem('callingConnected', 'false');
        alertPop('Calling agent disconnected');
        
    } else {
        mainBtn.textContent = 'Disconnect';
        mainBtn.className = 'text-xs font-bold bg-red-600 text-white px-3 py-1.5 rounded-full hover:bg-red-700 transition';
        statusText.textContent = 'Connected';
        statusText.className = 'text-xs text-emerald-800 font-bold';
        botRow.classList.remove('opacity-50');
        
        botToggle.disabled = false;
        botToggle.classList.remove('cursor-not-allowed');
        botToggle.onclick = function() {
            flipSwitch(botToggle, 'callingBotOn');
        };
        
        botSubtext.textContent = 'Let Nexus place outbound COD confirmation calls automatically';
        localStorage.setItem('callingConnected', 'true');
        alertPop('Calling agent connected!');
    }
}

function pickDataSync() {
    let userInput = prompt('Choose source (CSV, Excel, or Google Sheets):');
    
    if (userInput != null && userInput !== "") {
        let theBtn = document.getElementById('importBtn');
        let theStatus = document.getElementById('importStatus');

        theBtn.textContent = 'Disconnect';
        theBtn.onclick = dropDataSync;
        theBtn.className = 'text-xs font-bold bg-red-600 text-white px-3 py-1.5 rounded-full hover:bg-red-700 transition';
        
        theStatus.textContent = 'Synced via ' + userInput + ' (214 items)';
        theStatus.className = 'text-xs text-emerald-800 font-bold';

        localStorage.setItem('importConnected', 'true');
        localStorage.setItem('importSource', userInput);
        alertPop('Loaded products from ' + userInput);
    }
}

function dropDataSync() {
    let theBtn = document.getElementById('importBtn');
    let theStatus = document.getElementById('importStatus');

    theBtn.textContent = 'Connect';
    theBtn.onclick = pickDataSync;
    theBtn.className = 'btn-forest text-xs font-bold px-3 py-1.5 rounded-full transition';
    
    theStatus.textContent = 'CSV, Excel, Google Sheets';
    theStatus.className = 'text-xs text-stone-500 font-medium';

    localStorage.setItem('importConnected', 'false');
    alertPop('Data source disconnected');
}

let defaultUserInfo = {
    fullName: 'Kartikey Negi',
    email: 'kartikey@negimart.in',
    phone: '+91 98XXX XXXXX',
    businessName: 'Negi Mart'
};

function loadUserData() {
    let storedData = localStorage.getItem('userProfile');
    let userData;
    
    if (storedData != null) {
        userData = JSON.parse(storedData);
    } else {
        userData = defaultUserInfo;
    }

    let nameWords = userData.fullName.split(' ');
    let firstName = nameWords[0];
    
    let userAvatarLetters = "";
    if (nameWords.length > 1) {
        userAvatarLetters = nameWords[0][0] + nameWords[1][0];
    } else {
        userAvatarLetters = nameWords[0][0] + nameWords[0][1];
    }
    userAvatarLetters = userAvatarLetters.toUpperCase();

    let bizWords = userData.businessName.split(' ');
    let bizAvatarLetters = "";
    if (bizWords.length > 1) {
        bizAvatarLetters = bizWords[0][0] + bizWords[1][0];
    } else {
        bizAvatarLetters = bizWords[0][0] + bizWords[0][1];
    }
    bizAvatarLetters = bizAvatarLetters.toUpperCase();

    let avatarIcons = document.querySelectorAll('[data-user-avatar]');
    for (let i = 0; i < avatarIcons.length; i++) {
        avatarIcons[i].textContent = userAvatarLetters;
    }

    let bizIcons = document.querySelectorAll('[data-business-avatar]');
    for (let i = 0; i < bizIcons.length; i++) {
        bizIcons[i].textContent = bizAvatarLetters;
    }

    let firstNames = document.querySelectorAll('[data-user-firstname]');
    for (let i = 0; i < firstNames.length; i++) {
        firstNames[i].textContent = firstName;
    }

    let fullNames = document.querySelectorAll('[data-user-fullname]');
    for (let i = 0; i < fullNames.length; i++) {
        fullNames[i].textContent = userData.fullName;
    }

    let bizNames = document.querySelectorAll('[data-user-business]');
    for (let i = 0; i < bizNames.length; i++) {
        bizNames[i].textContent = userData.businessName;
    }

    let signIns = document.querySelectorAll('[data-user-signedin]');
    for (let i = 0; i < signIns.length; i++) {
        signIns[i].textContent = "Signed in as " + userData.fullName;
    }

    let formEl = document.getElementById('settingsForm');
    if (formEl != null) {
        formEl.fullName.value = userData.fullName;
        formEl.email.value = userData.email;
        formEl.phone.value = userData.phone;
        formEl.businessName.value = userData.businessName;
    }
}

function initSettings() {
    if (localStorage.getItem('whatsappConnected') === 'false') {
        switchWhatsapp();
    }
    if (localStorage.getItem('instagramConnected') === 'false') {
        switchInstagram();
    }
    if (localStorage.getItem('callingConnected') === 'true') {
        switchCallAgent();
    }
    if (localStorage.getItem('quietHoursOn') === 'true') {
        let qButton = document.getElementById('quietHoursToggle');
        if (qButton != null) {
            flipSwitch(qButton, 'quietHoursOn');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    
    // highlight the current page in the sidebar menu
    let urlParts = window.location.pathname.split('/');
    let currentPage = urlParts[urlParts.length - 1];
    if (currentPage === "") {
        currentPage = 'dashboard.html';
    }
    
    let navLinks = document.querySelectorAll('#sidebar nav a');
    for (let i = 0; i < navLinks.length; i++) {
        let linkHref = navLinks[i].getAttribute('href');
        if (linkHref === currentPage) {
            navLinks[i].classList.add('active');
        } else {
            navLinks[i].classList.remove('active');
        }
    }

    loadUserData();

    let mainForm = document.getElementById('settingsForm');
    if (mainForm != null) {
        mainForm.addEventListener('submit', function(event) {
            event.preventDefault(); // stop page reload
            
            let myNewData = {
                fullName: mainForm.fullName.value,
                email: mainForm.email.value,
                phone: mainForm.phone.value,
                businessName: mainForm.businessName.value
            };
            
            localStorage.setItem('userProfile', JSON.stringify(myNewData));
            loadUserData();
            alertPop('Profile updated!');
        });
    }
});