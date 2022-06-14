
// these three const get our current year and our current month strings
const date = new Date().toISOString();
const curYr = parseInt(date.split("-")[0]);

console.log(curYr)
class Language {
    constructor(name, startYear, currentYear, projects) {
        this.name = name;
        this.startYear = startYear;
        this.currentYear = currentYear;
        this.projects = projects;
    }

    // function to calculate total experience for years if years are the same experience will return as 0
    calculateExperience() {

        if (this.currentYear === this.startYear) {
            return 0;
        }
        let totalYrExp = this.currentYear - this.startYear;

        return totalYrExp;

    }
};

const html = new Language('HTML', 2021, curYr, 4);

console.log(html.startYear)


const languageCard = $("#languages");

const languageCardDisplay = (appendTo) => {
    card = `<div id="language-card-wrapper">
            <h1>${html.name}</h1>
            <p>Started in ${html.startYear}</p>
            <p>Current Year: ${html.currentYear}</p>
            <p>Total Experience: ${html.calculateExperience()} year</p>
        </div>
    `

    appendTo.append(card);
};

languageCardDisplay(languageCard);




