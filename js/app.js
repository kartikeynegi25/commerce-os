function searchRows() {
    let q = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('tbody tr').forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
}

function searchInbox() {
    let q = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('.inbox-row').forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
}

function openMenu() {
    let bar = document.getElementById('sidebar');
    let shade = document.getElementById('mobileMenuBackdrop');
    if (bar) bar.classList.toggle('-translate-x-full');
    if (shade) shade.classList.toggle('hidden');
}

function alertPop(msg) {
    let pop = document.createElement('div');
    pop.className = 'fixed bottom-4 right-4 bg-[#1f5238] text-white text-sm font-bold px-4 py-3 rounded-xl shadow-lg z-50';
    pop.textContent = msg;
    document.body.appendChild(pop);
    setTimeout(() => pop.remove(), 2500);
}

function flipSwitch(btn, storageKey) {
    btn.classList.toggle('bg-[#164028]');
    btn.classList.toggle('bg-stone-200');
    btn.querySelector('span')?.classList.toggle('translate-x-5');
    let isOn = btn.classList.contains('bg-[#164028]');
    if (storageKey) localStorage.setItem(storageKey, isOn ? 'true' : 'false');
}

function switchQuietHours(btn) {
    flipSwitch(btn, 'quietHoursOn');
}

function switchWhatsapp() {
    let tag = document.getElementById('whatsappStatus');
    let bot = document.getElementById('whatsappBotToggle');
    let isConnected = tag.textContent.trim() === 'Connected';

    if (isConnected) {
        tag.textContent = 'Disconnected';
        tag.className = 'text-xs font-bold bg-red-100 text-red-700 px-3 py-1.5 rounded-full cursor-pointer';
        bot.disabled = true;
        bot.classList.remove('bg-[#164028]');
        bot.classList.add('bg-stone-200', 'opacity-50', 'cursor-not-allowed');
        bot.querySelector('span')?.classList.remove('translate-x-5');
        localStorage.setItem('whatsappConnected', 'false');
        alertPop('WhatsApp disconnected');
    } else {
        tag.textContent = 'Connected';
        tag.className = 'text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full cursor-pointer';
        bot.disabled = false;
        bot.classList.remove('opacity-50', 'cursor-not-allowed');
        localStorage.setItem('whatsappConnected', 'true');
        alertPop('WhatsApp connected!');
    }
}

function switchInstagram() {
    let tag = document.getElementById('instagramStatus');
    let bot = document.getElementById('instagramBotToggle');
    let isConnected = tag.textContent.trim() === 'Connected';

    if (isConnected) {
        tag.textContent = 'Disconnected';
        tag.className = 'text-xs font-bold bg-red-100 text-red-700 px-3 py-1.5 rounded-full cursor-pointer';
        bot.disabled = true;
        bot.classList.remove('bg-[#164028]');
        bot.classList.add('bg-stone-200', 'opacity-50', 'cursor-not-allowed');
        bot.querySelector('span')?.classList.remove('translate-x-5');
        localStorage.setItem('instagramConnected', 'false');
        alertPop('Instagram disconnected');
    } else {
        tag.textContent = 'Connected';
        tag.className = 'text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full cursor-pointer';
        bot.disabled = false;
        bot.classList.remove('opacity-50', 'cursor-not-allowed');
        localStorage.setItem('instagramConnected', 'true');
        alertPop('Instagram connected!');
    }
}

function switchCallAgent() {
    let btn = document.getElementById('callingBtn');
    let statusText = document.getElementById('callingStatus');
    let row = document.getElementById('callingBotRow');
    let toggle = document.getElementById('callingBotToggle');
    let sub = document.getElementById('callingBotSubtext');
    let isLive = btn.textContent.trim() === 'Disconnect';

    if (isLive) {
        btn.textContent = 'Connect';
        btn.className = 'btn-forest text-xs font-bold px-3 py-1.5 rounded-full transition';
        statusText.textContent = 'Not connected';
        statusText.className = 'text-xs text-stone-500 font-medium';
        row.classList.add('opacity-50');
        toggle.disabled = true;
        toggle.classList.add('cursor-not-allowed');
        toggle.classList.remove('bg-[#164028]');
        toggle.classList.add('bg-stone-200');
        toggle.querySelector('span')?.classList.remove('translate-x-5');
        sub.textContent = 'Connect an AI Calling Agent above to enable outbound COD calls';
        localStorage.setItem('callingConnected', 'false');
        alertPop('Calling agent disconnected');
    } else {
        btn.textContent = 'Disconnect';
        btn.className = 'text-xs font-bold bg-red-600 text-white px-3 py-1.5 rounded-full hover:bg-red-700 transition';
        statusText.textContent = 'Connected';
        statusText.className = 'text-xs text-emerald-800 font-bold';
        row.classList.remove('opacity-50');
        toggle.disabled = false;
        toggle.classList.remove('cursor-not-allowed');
        toggle.onclick = () => flipSwitch(toggle, 'callingBotOn');
        sub.textContent = 'Let Nexus place outbound COD confirmation calls automatically';
        localStorage.setItem('callingConnected', 'true');
        alertPop('Calling agent connected!');
    }
}

function pickDataSync() {
    let choice = prompt('Choose source (CSV, Excel, or Google Sheets):');
    if (!choice) return;

    let btn = document.getElementById('importBtn');
    let statusText = document.getElementById('importStatus');

    btn.textContent = 'Disconnect';
    btn.onclick = dropDataSync;
    btn.className = 'text-xs font-bold bg-red-600 text-white px-3 py-1.5 rounded-full hover:bg-red-700 transition';
    statusText.textContent = 'Synced via ' + choice + ' (214 items)';
    statusText.className = 'text-xs text-emerald-800 font-bold';

    localStorage.setItem('importConnected', 'true');
    localStorage.setItem('importSource', choice);
    alertPop('Loaded products from ' + choice);
}

function dropDataSync() {
    let btn = document.getElementById('importBtn');
    let statusText = document.getElementById('importStatus');

    btn.textContent = 'Connect';
    btn.onclick = pickDataSync;
    btn.className = 'btn-forest text-xs font-bold px-3 py-1.5 rounded-full transition';
    statusText.textContent = 'CSV, Excel, Google Sheets';
    statusText.className = 'text-xs text-stone-500 font-medium';

    localStorage.setItem('importConnected', 'false');
    alertPop('Data source disconnected');
}

const defaultUser = {
    fullName: 'Kartikey Negi',
    email: 'kartikey@negimart.in',
    phone: '+91 98XXX XXXXX',
    businessName: 'Negi Mart'
};

function loadUserData() {
    let saved = JSON.parse(localStorage.getItem('userProfile')) || defaultUser;

    let userInitials = saved.fullName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    let bizInitials = saved.businessName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    let firstName = saved.fullName.split(' ')[0];

    document.querySelectorAll('[data-user-avatar]').forEach(el => el.textContent = userInitials);
    document.querySelectorAll('[data-user-firstname]').forEach(el => el.textContent = firstName);
    document.querySelectorAll('[data-user-fullname]').forEach(el => el.textContent = saved.fullName);
    document.querySelectorAll('[data-user-business]').forEach(el => el.textContent = saved.businessName);
    document.querySelectorAll('[data-user-signedin]').forEach(el => el.textContent = `Signed in as ${saved.fullName}`);
    document.querySelectorAll('[data-user-email]').forEach(el => el.textContent = saved.email);
    document.querySelectorAll('[data-user-phone]').forEach(el => el.textContent = saved.phone);
    document.querySelectorAll('[data-business-avatar]').forEach(el => el.textContent = bizInitials);

    let form = document.getElementById('settingsForm');
    if (form) {
        form.fullName.value = saved.fullName || '';
        form.email.value = saved.email || '';
        form.phone.value = saved.phone || '';
        form.businessName.value = saved.businessName || '';
    }
}

function initSettings() {
    if (localStorage.getItem('whatsappConnected') === 'false') switchWhatsapp();
    if (localStorage.getItem('instagramConnected') === 'false') switchInstagram();
    if (localStorage.getItem('callingConnected') === 'true') switchCallAgent();
    if (localStorage.getItem('quietHoursOn') === 'true') {
        let btn = document.getElementById('quietHoursToggle');
        if (btn) flipSwitch(btn, 'quietHoursOn');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let current = window.location.pathname.split('/').pop() || 'dashboard.html';
    document.querySelectorAll('#sidebar nav a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === current);
    });

    loadUserData();

    let settingsForm = document.getElementById('settingsForm');
    if (settingsForm) {
        settingsForm.addEventListener('submit', e => {
            e.preventDefault();
            let data = {
                fullName: settingsForm.fullName.value,
                email: settingsForm.email.value,
                phone: settingsForm.phone.value,
                businessName: settingsForm.businessName.value
            };
            localStorage.setItem('userProfile', JSON.stringify(data));
            loadUserData();
            alertPop('Profile updated!');
        });
    }
});