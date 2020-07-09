const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
let randomlyCreated = false;
let cardContainer = document.getElementById('card-container');
let cardContainerQuote = document.getElementById('card-container-quote');

let getSingleQuoteButton = document.getElementById("getSingleQuote");
getSingleQuoteButton.addEventListener('click', () => {
    getSingleQuote();
});

let getManyQuoteButton = document.getElementById("getManyQuotes");
getManyQuoteButton.addEventListener('click', () => {
    getManyQuotes();
});

let getTermQuote = document.getElementById("getTermQuote");
getTermQuote.addEventListener('click', () => {
    getTermQuotes();
});

function getSingleQuote() {

    randomlyCreated = true;
    let xhr = new XMLHttpRequest();
    let response;
    xhr.open('GET', url);

    xhr.send();

    xhr.onload = function() {
        if (xhr.status != 200) { 
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else { 
            alert(`Done, got ${xhr.response.length} bytes (This means we finshed fetching the response, yei)`); // response is the server
            response= JSON.parse(xhr.response);
            if(cardContainer.children.length > 0) {
                updateCard(cardContainer, response);
            } else {
                createTaskCard(cardContainer, response,randomlyCreated)
            }
        }
    };

    xhr.onprogress = function(event) {
        if (event.lengthComputable) {
            alert(`Received ${event.loaded} of ${event.total} bytes ( this means we got the total size of the response; this means yei)`);
        } else {
            alert(`Received ${event.loaded} bytes`);
        }

    };

    xhr.onerror = function() {
        alert("Request failed");
    };
}

function getManyQuotes() {

    let responses;
    let inputNumber = 63; // MAXIMUM VALUE IS 63 quotes
    let changeableUrl = `${url}/${inputNumber}`;
    let xhr = new XMLHttpRequest();

    xhr.open('GET', changeableUrl);

    xhr.send();

    xhr.onload = function() {
    if (xhr.status != 200) { 
        alert(`Error ${xhr.status}: ${xhr.statusText}`); 
    } else { 
        alert(`Done, got ${xhr.response.length} bytes (This means we finshed fetching the response, yei)`); // response is the server
        responses= JSON.parse(xhr.response);
        }
    };

    xhr.onprogress = function(event) {
    if (event.lengthComputable) {
        alert(`Received ${event.loaded} of ${event.total} bytes ( this means we got the total size of the response; this means yei)`);
    } else {
        alert(`Received ${event.loaded} bytes`); 
    }

    };

    xhr.onerror = function() {
    alert("Request failed");
    };
}

function getTermQuotes() {

    let inputQuote = prompt("Enter a word");
    let responses;
    let changeableUrl = `${url}/search/${inputQuote}`;
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET', changeableUrl);

    xhr.send();

    xhr.onload = function() {
        if (xhr.status != 200) { 
            alert(`Error ${xhr.status}: ${xhr.statusText}`); 
        } else { 
            alert(`Done, got ${xhr.response.length} bytes (This means we finshed fetching the response, yei)`); // response is the server
            responses= JSON.parse(xhr.response);
            for ( let response in responses) {
                createTaskCard(cardContainerQuote,responses[response], randomlyCreated);
            }

        }
    };

    xhr.onprogress = function(event) {
        if (event.lengthComputable) {
            alert(`Received ${event.loaded} of ${event.total} bytes ( this means we got the total size of the response; this means yei)`);
        } else {
            alert(`Received ${event.loaded} bytes`);
        }

    };

    xhr.onerror = function() {
        alert("Request failed");
    };
}

function createTaskCard(cardContainer, quote, randomlyCreated) {

    let card = document.createElement('div');

    if (randomlyCreated == true) {
        card.className = 'card border-primary mb-3';
        card.style = 'margin-top: 10px;'
    } else {
        card.className = 'card border-light mb-3';
        card.style = 'margin-top: 10px;'
    }
   
    let cardHeader = document.createElement('div');
    cardHeader.className = "card-header";
    cardHeader.textContent = "Header"

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let title = document.createElement('h5');
    title.textContent = 'Ron Swanson says';
    title.className = 'card-title';

    let color = document.createElement('p');
    color.textContent = quote;
    color.className = 'card-text';


    cardBody.appendChild(title);
    cardBody.appendChild(color);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    cardContainer.appendChild(card);
}

function updateCard(cardContainer, quote) {

    cardContainer.childNodes[0].childNodes[1].childNodes[1].textContent = quote;
}