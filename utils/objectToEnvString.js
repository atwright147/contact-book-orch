// from: https://stackoverflow.com/a/14615821/633056
const objectToEnvString = (envObject) => {
    const envArray = [];
    for (const prop in envObject)
        envArray.push(`${prop}="${envObject[prop]}"`);
    return envArray.join(' ');
}

module.exports = objectToEnvString;
