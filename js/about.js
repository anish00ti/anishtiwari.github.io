// Smooth scroll to skills section
document.querySelector('.skills-button').addEventListener('click', function(e) {
    e.preventDefault();
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log("Skills section not found. Please add an element with id='skills'.");
    }
});

console.log("About section loaded successfully!");