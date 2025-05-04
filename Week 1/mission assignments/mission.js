

const themeSelect = document.getElementById('change-theme')
themeSelect.addEventListener('change', changeTheme);

function changeTheme() {
    const selectedTheme = themeSelect.value;
    const body = document.body;
    const logo = document.getElementById('logo');

    if (selectedTheme === 'dark') {
        body.classList.remove('party')
        body.classList.add('dark');
        logo.src = 'byui-logo_white.png'; 
    } else if (selectedTheme == 'party') {
        body.classList.remove('dark')
        body.classList.add('party')
        logo.src = 'byui-logo_blue.webp'; 
        //logo.src = 'party-time.gif';
    } else {
        body.classList.remove('party')
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp';
    }
}

