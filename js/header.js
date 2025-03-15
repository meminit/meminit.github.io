// literally just checks if a header exists and if not it will add the header

const header = document.querySelector('header')

async function loadHeader() {
    const newHeaderText = await fetch('/header', () => { 
        method: 'GET'
    });

    const res = await newHeaderText.text()


   
    document.body.innerHTML += res

    const btnScriptFetch = await fetch('/js/pages.js', { 
        method: 'GET'
    });

    const btnScript = await btnScriptFetch.text()

    // yeah yeah I really dont care what you say about eval I'm using it
    eval(btnScript)
}

if (!header) {
    loadHeader()
}