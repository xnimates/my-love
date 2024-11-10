let selectedBoxes = [];
const correctAnswers = [1, 3, 6, 8, 9];

function startPuzzle() {
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
}

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        const number = parseInt(this.getAttribute('data-number'));

        if (selectedBoxes.includes(number)) {
            selectedBoxes = selectedBoxes.filter(n => n !== number);
            this.classList.remove('selected');
        } else {
            selectedBoxes.push(number);
            this.classList.add('selected');
        }

        if (isPuzzleSolved()) {
            showCongratulations();
        } else if (hasIncorrectSelection()) {
            alert("Alamak salah lah! Takpe, cube try lagi hehe...");
            resetSelections();
        }
    });
});

function isPuzzleSolved() {
    return correctAnswers.every(num => selectedBoxes.includes(num)) &&
           selectedBoxes.every(num => correctAnswers.includes(num));
}

function hasIncorrectSelection() {
    return selectedBoxes.some(num => !correctAnswers.includes(num));
}

function resetSelections() {
    selectedBoxes = [];
    document.querySelectorAll('.box').forEach(box => box.classList.remove('selected'));
}

function showCongratulations() {
    document.getElementById('congratsMessage').classList.remove('hidden');
}

function showAnimation() {
    document.getElementById('page2').classList.remove('active');
    document.getElementById('page3').classList.add('active');
    setTimeout(() => {
        document.getElementById('messageContainer').classList.remove('hidden');
    }, 2000);
}

window.onload = function() {
    document.getElementById('page1').classList.add('active');
};