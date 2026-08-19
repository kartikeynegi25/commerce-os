let currentStep = Number(localStorage.getItem('orderStep')) || 2;
const stepNames = ['New', 'Confirmed', 'Packed', 'Shipped', 'Delivered'];

function advanceOrderStatus() {
    if (currentStep >= 5) return;
    currentStep++;
    localStorage.setItem('orderStep', currentStep.toString());
    renderPipeline();
}

function renderPipeline() {
    for (let i = 1; i <= 5; i++) {
        let dot = document.getElementById('step-' + i);
        let line = document.getElementById('line-' + (i - 1));

        if (dot) {
            if (i <= currentStep) {
                dot.className = 'w-8 h-8 rounded-full bg-[#164028] text-white flex items-center justify-center text-xs font-bold';
                dot.textContent = '✓';
            } else {
                dot.className = 'w-8 h-8 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center text-xs font-bold';
                dot.textContent = i;
            }
        }

        if (line) {
            line.className = `flex-1 h-0.5 ${i <= currentStep ? 'bg-[#164028]' : 'bg-stone-300'}`;
        }
    }

    let btn = document.getElementById('advanceBtn');
    if (btn) {
        if (currentStep >= 5) {
            btn.textContent = 'Order Delivered ✓';
            btn.disabled = true;
            btn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            btn.textContent = 'Mark as ' + stepNames[currentStep];
            btn.disabled = false;
            btn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }
}

function resetOrderStatus() {
    localStorage.removeItem('orderStep');
    currentStep = 2;
    renderPipeline();
}

document.addEventListener('DOMContentLoaded', renderPipeline);