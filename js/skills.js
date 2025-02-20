document.querySelectorAll('.skill-category').forEach(item => {
    item.addEventListener('mouseenter', () => {
        console.log(`Hovered over ${item.querySelector('.skill-header').textContent}`);
    });
});

console.log("Skills section loaded successfully!");