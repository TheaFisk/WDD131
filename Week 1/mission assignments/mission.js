
const themeSelect = document.getElementById('change-theme')
themeSelect.addEventListener('change', changeTheme);

document.addEventListener('click', function (event) {
    const body = document.body;
    if (body.classList.contains('party')) {

        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;

        confetti({
            particleCount: 100,
            spread: 60,
            origin: { x:x, y:y }
        });
    }
});

function changeTheme() {
    const selectedTheme = themeSelect.value;
    const body = document.body;
    const logo = document.getElementById('logo');
    const celebrate = document.getElementById('celebrate');

    if (selectedTheme === 'dark') {
        body.classList.remove('party')
        body.classList.add('dark');
        logo.src = 'byui-logo_white.png'; 

    } else if (selectedTheme == 'party') {
        body.classList.remove('dark')
        body.classList.add('party')
        logo.src = 'rat-dance.gif';

        confetti({
            particleCount: 900,
            spread: 130,
            origin: { x: x , y: y}
          });
        
    } else {
        body.classList.remove('party')
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp';
    }
}

