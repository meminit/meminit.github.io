fetch('/data/tools.json').then(value => value.json()).then(response => {
    console.log('fetched')

    response.popular.forEach(element => {
        console.log('theres a popular')
        const newElement = document.createElement('div')
    });
})