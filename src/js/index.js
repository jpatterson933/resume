const shimmer = () => {
    // I want to switch classes on .contact-details>div
    // this returns an array of the 2nd, and third div children
    let contactDivs = document.querySelectorAll('.contact-details > div:nth-child(n+2):nth-child(-n+3)')
    // console.log(contactDivs, "contactDivs")
    contactDivs.forEach(div => {
        // toggle switches back and forth between classes
        div.classList.toggle('non-shimmer');
        div.classList.toggle('shimmer');
    });

}

// fade in resume page
window.addEventListener("load", function () {
    document.body.classList.add("fade-in");
});

setInterval(shimmer, 2000); // Run the function every 2 seconds (2000 milliseconds)
// get current date
const date = new Date()
const month = date.getMonth()
const year = date.getFullYear();
console.log(year)

const getMonthYear = () => {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    // return [month, year];
    return [month, year]
}
const returnExperienceString = (month, years) => {
    let message;
    switch (true) {
        case month >= 12:
            month = month - 12;
            if (month === 0) {
                years++;
                message = `${years} years experience built so far!`;
            } else {
                years++;
                message = `${years} years and ${month} months experience built so far!`;
            }
            break;
        default:
            message = `${years} years and ${month} months experience built so far!`;
            break;
    }
    return message;
};


class Language {
    constructor(name, startMonth, startYear) {
        this.name = name;
        this.startMonth = startMonth;
        this.startYear = startYear;
        this.currentYear = getMonthYear();
        this.gitLink = `<p><a href="https://jpatterson933.github.io/Stats-On-Github/" target="_blank" title="My Github Language Stats page created with Javascript - Donut Graphs"  id="gls" class="github-language-stats" >Github Language Stats</a></p>`
    }

    // function to calculate total experience for years if years are the same experience will return as 0
    calculateExperience() {
        if (this.currentYear[1] === this.startYear) { return 0 }
        // just assume the start month is 1 so january so anything 12 - 1) - currentMonth
        // no, we would just say x amount of months from experience
        let totalYrExp = this.currentYear[1] - this.startYear;
        let month = this.currentYear[0] + 1 + (12 - this.startMonth)

        return returnExperienceString(month, totalYrExp)
    }

    shouldDisplay(language) {
        const languageCard = $("#languages");

        // we want to append this to a new html element
        const card = `<div id="language-card-wrapper" class="fade-in">
        ${language.gitLink}
        <h1>${language.name}</h1>
        <p>${language.calculateExperience()}</p>
        <p>"I love to code"</p>
    </div>
    `;
        languageCard.empty().append(card);

        // Wait a short time for the content to be inserted before triggering the fade-in animation
        setTimeout(() => {
            console.log("test")
            const languageCardWrapper = $("#language-card-wrapper");
            languageCardWrapper.removeClass("fade-in");
            languageCardWrapper.addClass("fade-out");
        }, 1000); // 10 seconds (adjust as needed)
    }
};

const createLangHeader = () => {
    // grab our nav bar from our html
    const educationPanel = document.querySelector("header > nav")
    // Create the div element
    const languagesDiv = document.createElement('div');

    // Set the id attribute of the div element
    languagesDiv.setAttribute('id', 'languages');

    // Create the anchor element
    const githubStatsLink = document.createElement('a');

    // Set the href, target, title and text content attributes of the anchor element
    githubStatsLink.setAttribute('href', 'https://jpatterson933.github.io/Stats-On-Github/');
    githubStatsLink.setAttribute('target', '_blank');
    githubStatsLink.setAttribute('title', 'My Github Language Stats page created with Javascript');
    githubStatsLink.setAttribute('class', 'initial-github-stats');
    githubStatsLink.textContent = 'Github Language Stats';

    setTimeout(() => {
        languagesDiv.classList.add("fade-in");
    }, 10);

    // Add the anchor element as a child to the div element
    languagesDiv.appendChild(githubStatsLink);
    educationPanel.append(languagesDiv)
    // Wait a short time for the content to be inserted before triggering the fade-in animation

}


// number of projects is not accurate, just a pulled number for when the language is the MAIN language - ISSUE: Number of Projects
// our language classes
const python = new Language('Python', 11, 2022)
const react = new Language('React', 3, 2021)
const html = new Language('HTML', 1, 2020);
const css = new Language('CSS', 1, 2021);
const javascript = new Language('Javascript', 2, 2021);
const jQuery = new Language('jQuery', 2, 2021);
const bash = new Language('Bash Scripting', 10, 2022);
const powershell = new Language('PowerShell', 09, 2022);



const slideShow = () => {
    let count = false;
    // empty array where we push our languages into
    const languageArray = [];
    // we set our index to -1 so it s-tarts at the first one which is 0
    languageArrayIndex = -1;
    // push language classes into our array
    languageArray.push(html, css, javascript, jQuery, bash, powershell);

    // actual slide - wtf i did it!?! only took 6 months to figure out lol
    const slideInterval = setInterval(() => {

        if (count === false) {
            createLangHeader()
            count = true;
        }
        // increase our index (much like increasing i in a for loop)
        ++languageArrayIndex;
        // this says once we get our index to be greater to or equal the length of the array, we'll start back from first number in index [0]
        if (languageArrayIndex >= languageArray.length) {
            languageArrayIndex = 0;
        };
        // here we are basically reversing the push that was done earlier and assigning each class
        let language = languageArray[languageArrayIndex];

        // the we run the shouldDisplay that is inside the language classes
        language.shouldDisplay(language);
        // set interval time below
    }, 2500);

    return slideInterval
}

slideShow()