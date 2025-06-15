// Add event listener for form submission and add participant button
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = document.getElementById('submitButton');
    const summarySection = document.getElementById('summary');
    const addButton = document.getElementById('add');
    let participantCount = 1; // Start with 1 since we already have participant 1
    
    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Don't reload page
        
        // Get name from form
        const adultName = document.getElementById('adult_name').value;
        
        // Calculate total fees
        const total = totalFees();
        
        // Hide form and show summary
        form.style.display = 'none';
        displaySummary(adultName, total);
    });
    
    // Handle adding new participants
    addButton.addEventListener('click', function() {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
    });
});

function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
                <label for="fname${count}"> First Name<span>*</span></label>
                <input id="fname${count}" type="text" name="fname${count}" value="" required />
            </div>
            <div class="item activities">
                <label for="activity${count}">Activity #<span>*</span></label>
                <input id="activity${count}" type="text" name="activity${count}" />
            </div>
            <div class="item">
                <label for="fee${count}">Fee ($)<span>*</span></label>
                <input id="fee${count}" type="number" name="fee${count}" />
            </div>
            <div class="item">
                <label for="date${count}">Desired Date <span>*</span></label>
                <input id="date${count}" type="date" name="date${count}" />
            </div>
            <div class="item">
                <p>Grade</p>
                <select id="grade${count}" name="grade${count}">
                    <option selected value="" disabled selected></option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                </select>
            </div>
        </section>
    `;
}

function totalFees() {
    // Find all fee input elements
    let feeElements = document.querySelectorAll("[id^='fee']");
    let total = 0;
    
    // Loop through each fee element and add to total
    feeElements.forEach(function(input) {
        const value = parseFloat(input.value) || 0; // Convert to number, default to 0 if invalid
        total += value;
    });
    
    return total;
}

function displaySummary(name, total) {
    const summarySection = document.getElementById('summary');
    summarySection.innerHTML = `
        <h2>Registration Summary</h2>
        <p><strong>Primary Contact:</strong> ${name}</p>
        <p><strong>Total Fees:</strong> $${total.toFixed(2)}</p>
        <p>Thank you for registering!</p>
    `;
    summarySection.style.display = 'block';
}