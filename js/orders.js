let currentStep = Number(localStorage.getItem('orderStep')) || 2;

function advanceOrderStatus() {
    if (currentStep >= 5) return;
    currentStep++;
    localStorage.setItem('orderStep', currentStep.toString());

    let dot = document.getElementById('step-' + currentStep);
    if (dot) {
        dot.classList.remove('bg-stone-200', 'bg-gray-200', 'text-stone-500', 'text-gray-500');
        dot.classList.add('bg-[#164028]', 'text-white');
        dot.textContent = '✓';
    }

    let line = document.getElementById('line-' + (currentStep - 1));
    if (line) {
        line.classList.remove('bg-stone-300', 'bg-gray-200');
        line.classList.add('bg-[#164028]');
    }

    updateButtonText();
}

function applyStatusVisuals() {
    for (let i = 3; i <= currentStep; i++) {
        let dot = document.getElementById('step-' + i);
        if (dot) {
            dot.classList.remove('bg-stone-200', 'bg-gray-200', 'text-stone-500', 'text-gray-500');
            dot.classList.add('bg-[#164028]', 'text-white');
            dot.textContent = '✓';
        }

        let line = document.getElementById('line-' + (i - 1));
        if (line) {
            line.classList.remove('bg-stone-300', 'bg-gray-200');
            line.classList.add('bg-[#164028]');
        }
    }

    updateButtonText();
}

function resetOrderStatus() {
    localStorage.removeItem('orderStep');
    currentStep = 2;
    location.reload();
}

function updateButtonText() {
    const steps = ['New', 'Confirmed', 'Packed', 'Shipped', 'Delivered'];
    const btn = document.getElementById('advanceBtn');
    if (!btn) return;

    if (currentStep >= 5) {
        btn.textContent = 'Order Delivered ✓';
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        btn.textContent = 'Mark as ' + steps[currentStep];
    }
}