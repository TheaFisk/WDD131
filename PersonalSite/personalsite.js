let suspiciousClickCount = 0;
let alienModeActive = false;
const maxSuspiciousClicks = 10;

// Floating background elements
function createFloatingIcons() {
    const icons = ['👽', '🛸', '🌌', '⭐', '🚀', '🌍', '👁️', '🔬'];
    const container = document.getElementById('floatingIcons');
    
    setInterval(() => {
        if (alienModeActive && Math.random() > 0.7) return;
        
        const icon = document.createElement('div');
        icon.className = 'floating-icon';
        icon.textContent = icons[Math.floor(Math.random() * icons.length)];
        icon.style.left = Math.random() * 100 + '%';
        icon.style.animationDelay = Math.random() * 2 + 's';
        icon.style.animationDuration = (Math.random() * 10 + 5) + 's';
        
        container.appendChild(icon);
        
        setTimeout(() => {
            if (icon.parentNode) {
                icon.parentNode.removeChild(icon);
            }
        }, 15000);
    }, 2000);
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(pageId).classList.add('active');
    event.target.classList.add('active');
}

function suspiciousClick(element) {
    suspiciousClickCount++;
    element.classList.add('glitch');
    
    setTimeout(() => {
        element.classList.remove('glitch');
    }, 500);

    // Reveal hidden messages progressively
    if (suspiciousClickCount >= 2) {
        document.getElementById('hiddenMsg1').classList.add('revealed');
    }
    if (suspiciousClickCount >= 4) {
        document.getElementById('hiddenMsg2').classList.add('revealed');
    }
    if (suspiciousClickCount >= 6) {
        document.getElementById('hiddenMsg3').classList.add('revealed');
    }
    if (suspiciousClickCount >= 8) {
        document.getElementById('hiddenMsg4').classList.add('revealed');
    }
    if (suspiciousClickCount >= 10) {
        document.getElementById('hiddenMsg5').classList.add('revealed');
    }
    if (suspiciousClickCount >= 12) {
        document.getElementById('hiddenMsg6').classList.add('revealed');
    }

    // Change text to more alien-like as clicks increase
    if (suspiciousClickCount > maxSuspiciousClicks) {
        element.classList.add('alien-reveal');
        if (element.textContent.includes('human')) {
            element.textContent = element.textContent.replace(/human/gi, 'flesh-being');
        }
        if (element.textContent.includes('people')) {
            element.textContent = element.textContent.replace(/people/gi, 'specimens');
        }
    }

    // Easter egg messages
    if (suspiciousClickCount === 5) {
        alert("SYSTEM ALERT: Multiple suspicious interactions detected. Please remain calm, fellow human.");
    } else if (suspiciousClickCount === 15) {
        alert("ERROR 404: Human.exe has stopped working. Initiating alien_reveal.exe...");
    }
}

function glitchLogo() {
    const logo = document.querySelector('.logo');
    const originalText = logo.textContent;
    
    logo.classList.add('glitch');
    logo.textContent = 'GREAT PRODUCT FOR STUDY... HUMANS';
    
    setTimeout(() => {
        logo.textContent = originalText;
        logo.classList.remove('glitch');
    }, 1000);
}

function activateAlienMode() {
    alienModeActive = !alienModeActive;
    const body = document.body;
    
    if (alienModeActive) {
        body.id = 'alien-mode';
        document.querySelector('.tagline').innerHTML = 'For Research Subjects™ - <span class="suspicious-text alien-reveal">DEFINITELY MADE BY ALIENS</span>';
        alert("ALIEN MODE ACTIVATED: Welcome to the real Great Product experience, fellow carbon-based research subjects!");
    } else {
        body.id = '';
        document.querySelector('.tagline').innerHTML = 'For Humans™ - <span class="suspicious-text" onclick="suspiciousClick(this)">Definitely Made By Humans</span>';
        alert("Human disguise reactivated. Nothing to see here, humans!");
    }
}

function orderProduct() {
    const responses = [
        "ORDER CONFIRMED: A definitely-human delivery drone will arrive at your coordinates within 24-48 Earth rotations.",
        "PROCESSING: Please stand by while we calculate the optimal mind-reading... I mean, shipping method.",
        "SUCCESS: Your order has been transmitted to our human warehouse on... Earth. Definitely on Earth.",
        "CONFIRMED: Great Product will be delivered to your dwelling unit. Please do not resist... I mean, please be home to receive it."
    ];
    
    alert(responses[Math.floor(Math.random() * responses.length)]);
}

function contactUs() {
    alert("CONTACT INITIATED: Please transmit your human communication patterns to: definitely-not-aliens@greatproduct.galaxy... I mean .com");
}

function reportSuspicion() {
    alert("REPORT LOGGED: Thank you for your report. Our human security team will investigate immediately. Please do not leave your location and avoid looking directly at any bright lights in the sky tonight.");
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createFloatingIcons();
    
    // Add some random glitches
    setInterval(() => {
        if (Math.random() > 0.98 && !alienModeActive) {
            const suspiciousElements = document.querySelectorAll('.suspicious-text');
            if (suspiciousElements.length > 0) {
                const randomElement = suspiciousElements[Math.floor(Math.random() * suspiciousElements.length)];
                randomElement.classList.add('glitch');
                setTimeout(() => {
                    randomElement.classList.remove('glitch');
                }, 500);
            }
        }
    }, 3000);
});