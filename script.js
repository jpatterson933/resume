

const date = new Date();

const languages = [
    {
        languageName: "HTML",
        yearStarted: new Date(2021, 1),
        currentYear: new Date()
    }
]
const languageCard = document.getElementById('languages');

console.log(languages[0].yearStarted)
console.log(languages[0].currentYear)


