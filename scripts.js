document.addEventListener('DOMContentLoaded', function() {
    const timelineData = [
        {
            "date": "Apr 2024 - Feb 2025",
            "title": "Security Guard – Allied Universal, Kitchener, ON",
            "description": "Patrolled the delivery center, monitored surveillance systems, and ensured facility security. Managed security protocols, responded to incidents, and collaborated with staff to enhance workplace safety."
        },
        {
            "date": "Jan 2021 - Jan 2023",
            "title": "Production Line Worker – Egg Solutions, Elmira, ON",
            "description": "Exceeded production targets by 125% while maintaining 100% quality compliance. Assisted in launching energy-efficient appliances, assembled components using soldering techniques, and ensured quality control through blueprint interpretation."
        },
        {
            "date": "Jun 2017 - Dec 2021",
            "title": "IT Specialist – Visa Application Center, Istanbul, Turkey",
            "description": "Provided technical support, installed and maintained IT systems, and ensured network security. Assisted in system upgrades, implemented software solutions, and managed data security protocols."
        }
    ];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hidden

        // Click event to toggle visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });

    // Education Section - Toggle Description on Click
    const educationTitle = document.getElementById('education-toggle');
    const educationDesc = document.getElementById('education-desc');

    if (educationTitle) {
        educationTitle.addEventListener('click', function() {
            educationDesc.style.display = educationDesc.style.display === 'none' ? 'block' : 'none';
        });
    }
});
