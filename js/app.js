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

function showToast(message){
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-black text-white text-sm px-4 py-3 rounded-lg shadow-lg z-50';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2500);
}

function toggleIntegration(type){
    const statusEl = document.getElementById('callingStatus');
    const btnEl = document.getElementById('callingBtn');
    const isConnected = btnEl.textContent === 'Disconnect';

    const botRow = document.getElementById('callingBotRow');
    const botToggle = document.getElementById('callingBotToggle');
    const botSubtext = document.getElementById('callingBotSubtext');

    if (isConnected) {
        btnEl.textContent = 'Connect';
        btnEl.className = 'text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-full hover:bg-gray-800 transition';
        statusEl.textContent = 'Not connected';
        statusEl.className = 'text-xs text-gray-500';
        showToast('AI Calling Agent disconnected');

        botRow.classList.add('opacity-50');
        botToggle.disabled = true;
        botToggle.classList.add('cursor-not-allowed');
        botToggle.removeAttribute('onclick');
        botToggle.classList.remove('bg-gold');
        botToggle.classList.add('bg-gray-200');
        botToggle.querySelector('span').classList.remove('translate-x-5');
        botSubtext.textContent = 'Connect an AI Calling Agent above to enable outbound COD calls';
    } else {
        btnEl.textContent = 'Disconnect';
        btnEl.className = 'text-xs font-semibold bg-red-600 text-white px-3 py-1.5 rounded-full hover:bg-red-700 transition';
        statusEl.textContent = 'Connected';
        statusEl.className = 'text-xs text-emerald-600 font-medium';
        showToast('AI Calling Agent connected successfully');

        botRow.classList.remove('opacity-50');
        botToggle.disabled = false;
        botToggle.classList.remove('cursor-not-allowed');
        botToggle.setAttribute('onclick', "this.classList.toggle('bg-gold'); this.classList.toggle('bg-gray-200'); this.querySelector('span').classList.toggle('translate-x-5')");
        botSubtext.textContent = 'Let Nexus place outbound COD confirmation calls automatically';
    }
}

function disconnectDataImport(){
    const btnEl = document.getElementById('importBtn');
    const statusEl = document.getElementById('importStatus');

    btnEl.textContent = 'Connect';
    btnEl.onclick = connectDataImport;
    btnEl.className = 'text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-full hover:bg-gray-800 transition';
    statusEl.textContent = 'CSV, Excel, Google Sheets';
    statusEl.className = 'text-xs text-gray-500';
    showToast('Data Import disconnected');
}

function toggleWhatsapp(){
    const el = document.getElementById('whatsappStatus');
    const botToggle = document.getElementById('whatsappBotToggle');
    const isConnected = el.textContent === 'Connected';

    if (isConnected) {
        el.textContent = 'Disconnected';
        el.className = 'text-xs font-semibold bg-red-100 text-red-700 px-3 py-1.5 rounded-full cursor-pointer';
        showToast('WhatsApp disconnected — bot turned off');

        botToggle.classList.remove('bg-gold');
        botToggle.classList.add('bg-gray-200');
        botToggle.querySelector('span').classList.remove('translate-x-5');
        botToggle.disabled = true;
        botToggle.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        el.textContent = 'Connected';
        el.className = 'text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full cursor-pointer';
        showToast('WhatsApp connected');

        botToggle.disabled = false;
        botToggle.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

function toggleInstagram(){
    const el = document.getElementById('instagramStatus');
    const botToggle = document.getElementById('instagramBotToggle');
    const isConnected = el.textContent === 'Connected';

    if (isConnected) {
        el.textContent = 'Disconnected';
        el.className = 'text-xs font-semibold bg-red-100 text-red-700 px-3 py-1.5 rounded-full cursor-pointer';
        showToast('Instagram disconnected — bot turned off');

        botToggle.classList.remove('bg-gold');
        botToggle.classList.add('bg-gray-200');
        botToggle.querySelector('span').classList.remove('translate-x-5');
        botToggle.disabled = true;
        botToggle.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        el.textContent = 'Connected';
        el.className = 'text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full cursor-pointer';
        showToast('Instagram connected');

        botToggle.disabled = false;
        botToggle.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

function connectDataImport(){
    const source = prompt('Connect via: type "CSV", "Excel", or "Sheets"');
    if (!source) return;

    const btnEl = document.getElementById('importBtn');
    const statusEl = document.getElementById('importStatus');

    btnEl.textContent = 'Syncing...';
    btnEl.disabled = true;
    

    setTimeout(() => {
        btnEl.textContent = 'Disconnect';
        btnEl.onclick = disconnectDataImport;
        btnEl.disabled = false;
        btnEl.className = 'text-xs font-semibold bg-red-600 text-white px-3 py-1.5 rounded-full hover:bg-red-700 transition';
        statusEl.textContent = 'Synced via ' + source + ' — 214 products, last updated just now';
        statusEl.className = 'text-xs text-emerald-600 font-medium';
        showToast('Catalog synced from ' + source);
    }, 1200);
}

const DEFAULT_PROFILE = {
    fullName: 'Kartikey Negi',
    email: 'kartikey@negimart.in',
    phone: '+91 98XXX XXXXX',
    businessName: 'Negi Mart'
};

const storedName = localStorage.getItem('fullName') || 'Kartikey Negi';
const initials = storedName
  .split(' ')
  .map(part => part[0])
  .join('')
  .toUpperCase()
  .slice(0, 2) || 'KN';

document.querySelectorAll('[data-user-avatar]').forEach(el => {
  el.textContent = initials;
});

function getProfile() {
    const data = localStorage.getItem('userProfile');
    return data ? { ...DEFAULT_PROFILE, ...JSON.parse(data) } : DEFAULT_PROFILE;
}

function saveProfile(updatedData) {
    localStorage.setItem('userProfile', JSON.stringify(updatedData));
    syncUserProfileUI();
}

function syncUserProfileUI() {
    const profile = getProfile();
    
    const initials = profile.fullName
        .trim()
        .split(/\s+/)
        .map(part => part[0])
        .join('')
        .toUpperCase() || 'KN';

    const businessInitials = profile.businessName
        .trim()
        .split(/\s+/)
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2) || 'BM';

    const firstName = profile.fullName.split(' ')[0];

    document.querySelectorAll('[data-user-avatar]').forEach(el => el.textContent = initials);
    document.querySelectorAll('[data-user-firstname]').forEach(el => el.textContent = firstName);
    document.querySelectorAll('[data-user-fullname]').forEach(el => el.textContent = profile.fullName);
    document.querySelectorAll('[data-user-business]').forEach(el => el.textContent = profile.businessName);
    document.querySelectorAll('[data-user-signedin]').forEach(el => el.textContent = `Signed in as ${profile.fullName}`);
    document.querySelectorAll('[data-user-email]').forEach(el => el.textContent = profile.email);
    document.querySelectorAll('[data-user-phone]').forEach(el => el.textContent = profile.phone);
    document.querySelectorAll('[data-business-avatar]').forEach(el => {el.textContent = businessInitials;});

    const form = document.getElementById('settingsForm');
    if (form) {
        if (form.elements['fullName']) form.elements['fullName'].value = profile.fullName;
        if (form.elements['email']) form.elements['email'].value = profile.email;
        if (form.elements['phone']) form.elements['phone'].value = profile.phone;
        if (form.elements['businessName']) form.elements['businessName'].value = profile.businessName;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    syncUserProfileUI();

    const settingsForm = document.getElementById('settingsForm');
    if (settingsForm) {
        settingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(settingsForm);
            
            const updatedProfile = {
                fullName: formData.get('fullName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                businessName: formData.get('businessName')
            };

            saveProfile(updatedProfile);

            if (typeof showToast === 'function') {
                showToast('Account settings saved!');
            }
        });
    }
});