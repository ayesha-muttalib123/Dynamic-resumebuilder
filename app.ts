


    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const work = (document.getElementById('work') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // Generate the resume display
        const resumeHtml = `
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>

            <div class="resume-section">
                <h3>Education</h3>
                <p>${education}</p>
            </div>

            <div class="resume-section">
                <h3>Work Experience</h3>
                <p>${work}</p>
            </div>

            <div class="resume-section">
                <h3>Skills</h3>
                <p>${skills}</p>
            </div>
        `;

        if (resumeDisplay) {
            resumeDisplay.innerHTML = resumeHtml;
        } else {
            console.log('The resume display element is missing');
        }
    });

