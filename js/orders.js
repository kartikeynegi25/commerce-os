function advanceOrderStatus(){
    if (currentStep >= 5) return;
    currentStep++;
    localStorage.setItem('orderStep', currentStep.toString());

    const circle = document.getElementById('step-' + currentStep);
    circle.classList.remove('bg-gray-200', 'text-gray-500');
    circle.classList.add('bg-black', 'text-white');
    circle.textContent = '✓';

    const line = document.getElementById('line-' + (currentStep -1));
    line.classList.remove('bg-gray-200');
    line.classList.add('bg-black');

    updateButtonText();

}

function applyStatusVisuals(){
    for (let i= 3; i<=currentStep; i++){
        const circle = document.getElementById('step-' + i);
        circle.classList.remove('bg-gray-200', 'text-gray-500');
        circle.classList.add('bg-black', 'text-white');
        circle.textContent = '✓';

        const line = document.getElementById('line-' + (i-1));
        line.classList.remove('bg-gray-200');
        line.classList.add('bg-black');
    }

    updateButtonText();
}

function resetOrderStatus(){
    localStorage.removeItem('orderStep');
    currentStep = 2;
    location.reload();
}

function updateButtonText(){
     const labels = ['New', 'Confirmed', 'Packed', 'Shipped', 'Delivered'];
     const btn = document.getElementById('advanceBtn');

     if (currentStep >=5){
        btn.textContent = 'Order Delivered ✓';
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');
     } else {
        btn.textContent = 'Mark as ' + labels[currentStep];
     }
}