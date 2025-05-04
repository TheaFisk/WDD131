

const themeSelect = document.getElementById('change-theme')
themeSelect.addEventListener('change', changeTheme);

function changeTheme() {
    const selectedTheme = themeSelect.value;
    const body = document.body;
    const logo = document.getElementById('logo');

    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'byui-logo_white.png'; 
    } else if (selectedTheme == 'party') {
        body.classList.add('party')
        logo.src = 'party-time.gif';
    } else {
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp';
    }
}

