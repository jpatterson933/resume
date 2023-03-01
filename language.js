
// get current date
const date = new Date().toISOString();

class Language {
    constructor(name, startYear) {
        this.name = name;
        this.startYear = startYear;
        this.currentYear = parseInt(date.split("-")[0]); // grab the year from the iso string
        this.gitLink = `<p><a href="https://jpatterson933.github.io/Stats-On-Github/" target="_blank" title="My Github Language Stats page created with Javascript - Donut Graphs"  id="gls" class="github-language-stats" >Github Language Stats</a></p>`
    }

    // function to calculate total experience for years if years are the same experience will return as 0
    calculateExperience() {
        if (this.currentYear === this.startYear) { return 0; }
        let totalYrExp = this.currentYear - this.startYear;
        return totalYrExp;
    }

    shouldDisplay(language) {
        const languageCard = $("#languages");

        // we want to append this to a new html element
        const card = `<div id="language-card-wrapper">
        ${language.gitLink}
        <h1>${language.name}</h1>
        <p>My journey started in ${language.startYear}</p>
        <p>Year(s) experience: ${language.calculateExperience()}</p>
        <p>"I love to code"</p>
    </div>
    `;
        languageCard.empty().append(card);
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

    // Add the anchor element as a child to the div element
    languagesDiv.appendChild(githubStatsLink);
    educationPanel.append(languagesDiv)

}


// number of projects is not accurate, just a pulled number for when the language is the MAIN language - ISSUE: Number of Projects
// our language classes
const python = new Language('Python', 2022)
const react = new Language('React', 2021)
const html = new Language('HTML', 2020);
const css = new Language('CSS', 2021);
const javascript = new Language('Javascript', 2021);
const jQuery = new Language('jQuery', 2021);
const bash = new Language('Bash Scripting', 2022);
const powershell = new Language('PowerShell', 2022);



const slideShow = () => {
    let count = false;
    // empty array where we push our languages into
    const languageArray = [];
    // we set our index to -1 so it starts at the first one which is 0
    languageArrayIndex = -1;
    // push language classes into our array
    languageArray.push(html, css, javascript, jQuery, bash, powershell);

    // actual slide - wtf i did it!?! only took 6 months to figure out lol
    const slideInterval = setInterval(() => {

        if(count === false){
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