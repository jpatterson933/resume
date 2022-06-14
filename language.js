
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
        // 
        if (this.currentYear === this.startYear) { return 0; }
        let totalYrExp = this.currentYear - this.startYear;
        return totalYrExp;
    }

    shouldDisplay(language) {
        const languageCard = $("#languages");
        const card = `<div id="language-card-wrapper">
        <h1>${language.name}</h1>
        <p>Began learning in ${language.startYear}</p>
        <p>${language.calculateExperience()} year experience</p>
        <p>Total Projects with Language: ${language.projects}</p>
    </div>
    `;
        languageCard.empty().append(card);
    }


};

// number of projects is not accurate, just a pulled number for when the language is the MAIN language - ISSUE: Number of Projects
// our language classes
const html = new Language('HTML', 2021, curYr, 4);
const css = new Language('CSS', 2021, curYr, 3);
const javascript = new Language('Javascript', 2021, curYr, 25);
const jQuery = new Language('jQuery', 2021, curYr, 25);

// empty array where we push our languages into
const languageArray = [];
// we set our index to -1 so it starts at the first one which is 0
languageArrayIndex = -1;
// push language classes into our array
languageArray.push(html, css, javascript, jQuery);


// actual slide - wtf i did it!?! only took 6 months to figure out lol
const slideInterval = setInterval(() => {
    // increase our index (much like increasing i in a for loop)
    ++languageArrayIndex;
    // this says once we get our index to be greater to or equal the length of the array, we'll start back from first number in index [0]
    if(languageArrayIndex >= languageArray.length) {
        languageArrayIndex = 0;
    };

    // here we are basically reversing the push that was done earlier and assigning each class
    let language = languageArray[languageArrayIndex];
    // the we run the shouldDisplay that is inside the language classes
    language.shouldDisplay(language);

    // interval runs every 5 seconds
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
