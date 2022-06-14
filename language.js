
// these three const get our current year and our current month strings
const date = new Date().toISOString();
const curYr = parseInt(date.split("-")[0]);

console.log(curYr)
class Language {
    constructor(name, startYear, currentYear, projects, display) {
        this.name = name;
        this.startYear = startYear;
        this.currentYear = currentYear;
        this.projects = projects;
        this.display = display;
    }

    // function to calculate total experience for years if years are the same experience will return as 0
    calculateExperience() {
        // 
        if (this.currentYear === this.startYear) { return 0; }
        let totalYrExp = this.currentYear - this.startYear;
        return totalYrExp;
    }

    shouldDisplay(language) {
        const languageCard = $("#languages");
        const card = `<div id="language-card-wrapper">
        <h1>${language.name}</h1>
        <p>Started in ${language.startYear}</p>
        <p>Current Year: ${language.currentYear}</p>
        <p>Total Experience: ${language.calculateExperience()} year</p>
    </div>
    `;
        languageCard.empty().append(card);
    }


};

// number of projects is not accurate, just a pulled number for when the language is the MAIN language - ISSUE: Number of Projects
const languageArray = [];
languageArrayIndex = -1;
const html = new Language('HTML', 2021, curYr, 4, false);
languageArray.push(html);
const css = new Language('CSS', 2021, curYr, 3, false);
languageArray.push(css);

console.log(html)


html.shouldDisplay(html)


console.log(html.startYear);



const slideInterval = setInterval(() => {
    ++languageArrayIndex;
    if(languageArrayIndex >= languageArray.length) {
        languageArrayIndex = 0;
    }
   

    // Switch turns - here we can have the display switch from true to false
    let language = languageArray[languageArrayIndex]
    language.shouldDisplay(language)
    console.log (language)

}, 5000);



// const languageCard = $("#languages");

// const languageCardDisplay = (appendTo) => {
//     card = `<div id="language-card-wrapper">
//             <h1>${html.name}</h1>
//             <p>Started in ${html.startYear}</p>
//             <p>Current Year: ${html.currentYear}</p>
//             <p>Total Experience: ${html.calculateExperience()} year</p>
//         </div>
//     `

//     appendTo.append(card);
// };

// languageCardDisplay(languageCard);
