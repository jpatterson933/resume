function createDegreeElement(degree, school, date) {
    let anchor = document.querySelector(['section > h1'])
    // create div with class 'degree'
    const degreeDiv = document.createElement('div');
    degreeDiv.setAttribute('class', 'degree');
    degreeDiv.setAttribute('role', 'listitem');

    // create degree title div
    const degreeTitleDiv = document.createElement('div');
    degreeTitleDiv.setAttribute('role', 'heading');
    degreeTitleDiv.setAttribute('aria-level', '3');
    degreeTitleDiv.textContent = degree;
    degreeDiv.appendChild(degreeTitleDiv);

    // create school and date divs using a loop
    const labels = ['University or College', 'Graduation Date'];
    const values = [school, date];

    for (let i = 0; i < labels.length; i++) {
        const label = labels[i];
        const value = values[i];

        const detailDiv = document.createElement('div');
        detailDiv.setAttribute('role', 'text');
        detailDiv.setAttribute('aria-label', label);
        detailDiv.textContent = value;
        degreeDiv.appendChild(detailDiv);
    }

    return degreeDiv;
}
const degrees = [
    {
        degree: 'Bachelor of Arts',
        school: 'UCLA',
        date: 'June 2016',
    },
    {
        degree: 'Full Stack Web Developer, Certificate',
        school: 'UCLA Extension',
        date: '2021',
    },
    {
        degree: 'Associate of Science, Computer Science',
        school: 'Santa Monica College',
        date: 'Started August 2022',
    },
    {
        degree: 'Cybersecurity',
        school: 'UCLA Extension',
        date: '2022 - Feb 2023',
    },
];


let currentIndex = 0;
const intervalDuration = 3000; // 3 seconds

function displayNextDegree() {
    const htmlAnchor = document.querySelector(['section > h1'])
    // console.log(htmlAnchor)
    const degree = degrees[currentIndex];
    const degreeElement = createDegreeElement(degree.degree, degree.school, degree.date);
    htmlAnchor.appendChild(degreeElement);

    // remove the degree element after a delay
    setTimeout(() => {
        htmlAnchor.removeChild(degreeElement);
    }, intervalDuration - 1000); // remove the element 1 second before the next one is added

    // increment the current index and loop back to the start if necessary
    currentIndex++;
    if (currentIndex >= degrees.length) {
        currentIndex = 0;
    }
}

// display the first degree immediately
displayNextDegree();

// display the rest of the degrees at intervals
setInterval(displayNextDegree, intervalDuration);

