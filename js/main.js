const skills = document.querySelectorAll('.skill-progress');

window.addEventListener('scroll', () => {
    skills.forEach(skill => {
        const position = skill.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight) {
            skill.style.width = skill.dataset.width;
        }
    });
});