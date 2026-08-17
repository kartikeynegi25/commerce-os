// quick table search
function searchRows() {
    let q = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('tbody tr').forEach(r => {
        let txt = r.textContent.toLowerCase();
        r.style.display = txt.includes(q) ? '' : 'none';
    });
}

// inbox list filter
function searchInbox() {
    let q = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('.inbox-row').forEach(r => {
        let txt = r.textContent.toLowerCase();
        r.style.display = txt.includes(q) ? '' : 'none';
    });
}

// mobile sidebar toggle
function openMenu() {
    let bar = document.getElementById('sidebar');
    let shade = document.getElementById('mobileMenuBackdrop');
    if (bar) bar.classList.toggle('-translate-x-full');
    if (shade) shade.classList.toggle('hidden');
}

// custom toast notification pop
function alertPop(msg) {
    let pop = document.createElement('div');
    pop.className = 'fixed bottom-4 right-4 bg-[#1f5238] text-white text-sm font-bold px-4 py-3 rounded-xl shadow-lg z-50';
    pop.textContent = msg;
    document.body.appendChild(pop);
    setTimeout(() => pop.remove(), 2500);
}

// ai calling agent toggle
function switchCallAgent() {
    let statusText = document.getElementById('callingStatus');
    let btn = document.getElementById('callingBtn');
    let isLive = btn.textContent === 'Disconnect';

    let row = document.getElementById('callingBotRow');
    let toggle = document.getElementById('callingBotToggle');
    let sub = document.getElementById('callingBotSubtext');

    if (isLive) {
        btn.textContent = 'Connect';
        btn.className = 'btn-forest text-xs font-bold px-3 py-1.5 rounded-full transition';
        statusText.textContent = 'Not connected';
        statusText.className = 'text-xs text-stone-500 font-medium';
        alertPop('Calling agent disconnected');

        row.classList.add('opacity-50');
        toggle.disabled = true;
        toggle.classList.add('cursor-not-allowed');
        toggle.removeAttribute('onclick');
        toggle.classList.remove('bg-[#164028]');
        toggle.classList.add('bg-stone-200');
        toggle.querySelector('span').classList.remove('translate-x-5');
        sub.textContent = 'Connect an AI Calling Agent above to enable outbound COD calls';
        localStorage.setItem('callingConnected', 'false');
    } else {
        btn.textContent = 'Disconnect';
        btn.className = 'text-xs font-bold bg-red-600 text-white px-3 py-1.5 rounded-full hover:bg-red-700 transition';
        statusText.textContent = 'Connected';
        statusText.className = 'text-xs text-emerald-800 font-bold';
        alertPop('Calling agent connected!');

        row.classList.remove('opacity-50');
        toggle.disabled = false;
        toggle.classList.remove('cursor-not-allowed');
        toggle.setAttribute('onclick', "flipSwitch(this, 'callingBotOn')");
        sub.textContent = 'Let Nexus place outbound COD confirmation calls automatically';
        localStorage.setItem('callingConnected', 'true');
    }
}

// disconnect file sync
function dropDataSync() {
    let btn = document.getElementById('importBtn');
    let statusText = document.getElementById('importStatus');

    btn.textContent = 'Connect';
    btn.onclick = pickDataSync;
    btn.className = 'btn-forest text-xs font-bold px-3 py-1.5 rounded-full transition';
    statusText.textContent = 'CSV, Excel, Google Sheets';
    statusText.className = 'text-xs text-stone-500 font-medium';
    alertPop('Data source disconnected');
    localStorage.setItem('importConnected', 'false');
}

// connect sheet / csv
function pickDataSync() {
    let choice = prompt('Pick source: "CSV", "Excel", or "Sheets"');
    if (!choice) return;

    let btn = document.getElementById('importBtn');
    let statusText = document.getElementById('importStatus');

    btn.textContent = 'Syncing...';
    btn.disabled = true;

    setTimeout(() => {
        btn.textContent = 'Disconnect';
        btn.onclick = dropDataSync;
        btn.disabled = false;
        btn.className = 'text-xs font-bold bg-red-600 text-white px-3 py-1.5 rounded-full hover:bg-red-700 transition';
        statusText.textContent = 'Synced via ' + choice + ' — 214 items ready';
        statusText.className = 'text-xs text-emerald-800 font-bold';
        alertPop('Loaded products from ' + choice);
        localStorage.setItem('importConnected', 'true');
        localStorage.setItem('importSource', choice);
    }, 1000);
}

// whatsapp connection toggle
function switchWhatsapp() {
    let tag = document.getElementById('whatsappStatus');
    let bot = document.getElementById('whatsappBotToggle');
    let on = tag.textContent === 'Connected';

    if (on) {
        tag.textContent = 'Disconnected';
        tag.className = 'text-xs font-bold bg-red-100 text-red-700 px-3 py-1.5 rounded-full cursor-pointer';
        alertPop('WhatsApp disconnected');

        bot.classList.remove('bg-[#164028]');
        bot.classList.add('bg-stone-200');
        bot.querySelector('span').classList.remove('translate-x-5');
        bot.disabled = true;
        bot.classList.add('opacity-50', 'cursor-not-allowed');

        localStorage.setItem('whatsappConnected', 'false');
    } else {
        tag.textContent = 'Connected';
        tag.className = 'text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full cursor-pointer';
        alertPop('WhatsApp connected!');

        bot.disabled = false;
        bot.classList.remove('opacity-50', 'cursor-not-allowed');
        localStorage.setItem('whatsappConnected', 'true');
    }
}

// instagram connection toggle
function switchInstagram() {
    let tag = document.getElementById('instagramStatus');
    let bot = document.getElementById('instagramBotToggle');
    let on = tag.textContent === 'Connected';

    if (on) {
        tag.textContent = 'Disconnected';
        tag.className = 'text-xs font-bold bg-red-100 text-red-700 px-3 py-1.5 rounded-full cursor-pointer';
        alertPop('Instagram disconnected');

        bot.classList.remove('bg-[#164028]');
        bot.classList.add('bg-stone-200');
        bot.querySelector('span').classList.remove('translate-x-5');
        bot.disabled = true;
        bot.classList.add('opacity-50', 'cursor-not-allowed');

        localStorage.setItem('instagramConnected', 'false');
    } else {
        tag.textContent = 'Connected';
        tag.className = 'text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full cursor-pointer';
        alertPop('Instagram connected!');

        bot.disabled = false;
        bot.classList.remove('opacity-50', 'cursor-not-allowed');
        localStorage.setItem('instagramConnected', 'true');
    }
}

// quiet hours toggle switch
function switchQuietHours(btn) {
    btn.classList.toggle('bg-[#164028]');
    btn.classList.toggle('bg-stone-200');
    btn.querySelector('span').classList.toggle('translate-x-5');
    let active = btn.classList.contains('bg-[#164028]');
    localStorage.setItem('quietHoursOn', active ? 'true' : 'false');
}

// generic toggle helper
function flipSwitch(btn, key) {
    btn.classList.toggle('bg-[#164028]');
    btn.classList.toggle('bg-stone-200');
    btn.querySelector('span').classList.toggle('translate-x-5');
    let active = btn.classList.contains('bg-[#164028]');
    localStorage.setItem(key, active ? 'true' : 'false');
}

// user info defaults
const defaultUser = {
    fullName: 'Kartikey Negi',
    email: 'kartikey@negimart.in',
    phone: '+91 98XXX XXXXX',
    businessName: 'Negi Mart'
};

function fetchUserData() {
    let raw = localStorage.getItem('userProfile');
    return raw ? { ...defaultUser, ...JSON.parse(raw) } : defaultUser;
}

function saveUserData(obj) {
    localStorage.setItem('userProfile', JSON.stringify(obj));
    renderUserUI();
}

function renderUserUI() {
    let u = fetchUserData();
    
    let initials = u.fullName
        .trim()
        .split(/\s+/)
        .map(w => w[0])
        .join('')
        .toUpperCase() || 'KN';

    let bizInitials = u.businessName
        .trim()
        .split(/\s+/)
        .map(w => w[0])
        .join('')
        .toUpperCase()
        .slice(0, 2) || 'NM';

    let fname = u.fullName.split(' ')[0];

    document.querySelectorAll('[data-user-avatar]').forEach(el => el.textContent = initials);
    document.querySelectorAll('[data-user-firstname]').forEach(el => el.textContent = fname);
    document.querySelectorAll('[data-user-fullname]').forEach(el => el.textContent = u.fullName);
    document.querySelectorAll('[data-user-business]').forEach(el => el.textContent = u.businessName);
    document.querySelectorAll('[data-user-signedin]').forEach(el => el.textContent = `Signed in as ${u.fullName}`);
    document.querySelectorAll('[data-user-email]').forEach(el => el.textContent = u.email);
    document.querySelectorAll('[data-user-phone]').forEach(el => el.textContent = u.phone);
    document.querySelectorAll('[data-business-avatar]').forEach(el => el.textContent = bizInitials);

    let form = document.getElementById('settingsForm');
    if (form) {
        if (form.elements['fullName']) form.elements['fullName'].value = u.fullName;
        if (form.elements['email']) form.elements['email'].value = u.email;
        if (form.elements['phone']) form.elements['phone'].value = u.phone;
        if (form.elements['businessName']) form.elements['businessName'].value = u.businessName;
    }
}

function initSettings() {
    if (localStorage.getItem('whatsappConnected') === 'false') {
        document.getElementById('whatsappStatus')?.click();
    }
    if (localStorage.getItem('instagramConnected') === 'false') {
        document.getElementById('instagramStatus')?.click();
    }
    if (localStorage.getItem('callingConnected') === 'true') {
        document.getElementById('callingBtn')?.click();
        if (localStorage.getItem('callingBotOn') === 'true') {
            document.getElementById('callingBotToggle')?.click();
        }
    }
    if (localStorage.getItem('importConnected') === 'true') {
        let src = localStorage.getItem('importSource') || 'Sheets';
        let btn = document.getElementById('importBtn');
        let statusText = document.getElementById('importStatus');
        if (btn && statusText) {
            btn.textContent = 'Disconnect';
            btn.onclick = dropDataSync;
            btn.className = 'text-xs font-bold bg-red-600 text-white px-3 py-1.5 rounded-full hover:bg-red-700 transition';
            statusText.textContent = 'Synced via ' + src + ' — 214 items ready';
            statusText.className = 'text-xs text-emerald-800 font-bold';
        }
    }
    if (localStorage.getItem('quietHoursOn') === 'true') {
        document.getElementById('quietHoursToggle')?.click();
    }
    if (localStorage.getItem('whatsappBotOn') === 'false') {
        document.getElementById('whatsappBotToggle')?.click();
    }
    if (localStorage.getItem('instagramBotOn') === 'false') {
        document.getElementById('instagramBotToggle')?.click();
    }
}

// page setup
document.addEventListener('DOMContentLoaded', () => {
    let here = window.location.pathname.split('/').pop() || 'dashboard.html';
    document.querySelectorAll('#sidebar nav a').forEach(link => {
        if (link.getAttribute('href') === here) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    renderUserUI();

    let settingsForm = document.getElementById('settingsForm');
    if (settingsForm) {
        settingsForm.addEventListener('submit', e => {
            e.preventDefault();
            let fd = new FormData(settingsForm);
            saveUserData({
                fullName: fd.get('fullName'),
                email: fd.get('email'),
                phone: fd.get('phone'),
                businessName: fd.get('businessName')
            });
            alertPop('Profile updated!');
        });
    }
});