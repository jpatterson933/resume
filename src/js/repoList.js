import data from './repoList.json' assert { type: "json" }

function parseJSON(jsonData) {
    let totalObjects = 0;
    const languageTotals = new Map();

    jsonData.forEach((item) => {
        totalObjects++;
        const languageData = item.languageData;

        for (let language in languageData) {
            const count = languageData[language];
            const currentCount = languageTotals.get(language) || 0;
            languageTotals.set(language, currentCount + count);
        }
    });

    return {
        totalObjects: totalObjects,
        languageTotals: Object.fromEntries(languageTotals.entries()),
    };
}
const result = parseJSON(data);
console.log("Total objects: " + result.totalObjects);
console.log("Language totals: " + JSON.stringify(result.languageTotals));
