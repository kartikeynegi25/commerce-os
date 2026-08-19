let currentStep = 2;
let savedStep = localStorage.getItem('orderStep');

if (savedStep != null) {
    currentStep = parseInt(savedStep);
}

let stepNames = ['New', 'Confirmed', 'Packed', 'Shipped', 'Delivered'];

function advanceOrderStatus() {
    if (currentStep >= 5) {
        return; 
    }
    
    currentStep = currentStep + 1;
    localStorage.setItem('orderStep', currentStep);
    renderPipeline();
}

function renderPipeline() {
    for (let i = 1; i <= 5; i++) {
        let dot = document.getElementById('step-' + i);
        let line = document.getElementById('line-' + (i - 1));

        if (dot != null) {
            if (i <= currentStep) {
                dot.className = 'w-8 h-8 rounded-full bg-[#164028] text-white flex items-center justify-center text-xs font-bold';
                dot.textContent = '✓';
            } else {
                dot.className = 'w-8 h-8 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center text-xs font-bold';
                dot.textContent = i;
            }
        }

        if (line != null) {
            if (i <= currentStep) {
                line.className = 'flex-1 h-0.5 bg-[#164028]';
            } else {
                line.className = 'flex-1 h-0.5 bg-stone-300';
            }
        }
    }

    let nextButton = document.getElementById('advanceBtn');
    if (nextButton != null) {
        if (currentStep >= 5) {
            nextButton.textContent = 'Order Delivered ✓';
            nextButton.disabled = true;
            nextButton.classList.add('opacity-50');
            nextButton.classList.add('cursor-not-allowed');
        } else {
            nextButton.textContent = 'Mark as ' + stepNames[currentStep];
            nextButton.disabled = false;
            nextButton.classList.remove('opacity-50');
            nextButton.classList.remove('cursor-not-allowed');
        }
    }
}

// mostly for testing so i can start over
function resetOrderStatus() {
    localStorage.removeItem('orderStep');
    currentStep = 2;
    renderPipeline();
}

document.addEventListener('DOMContentLoaded', function() {
    renderPipeline();
});