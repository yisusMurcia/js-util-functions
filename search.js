const search = (stringArray, wordToSearch) => {
    const results = [];
    const regexExp = new RegExp(wordToSearch, 'i');
    for(let string of stringArray){
        if(string.match(regexExp)){
            results.push(string);
        }
    }

    return results;
}
