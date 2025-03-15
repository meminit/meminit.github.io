// literally just checks if a header exists and if not it will add the header

const header = document.querySelector('header')

async function loadHeader() {
    const newHeaderText = await fetch('/header', () => { 
        method: 'GET'
    });

    const res = await newHeaderText.text()


   
    document.body.innerHTML += res
}

if (!header) {
    loadHeader()
}