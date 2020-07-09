const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
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
    // 1. Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    let responses = [];
    // 2. Configure it: GET-request for the URL /article/.../load
    xhr.open('GET', url);

    // 3. Send the request over the network
    xhr.send();

    // 4. This will be called after the response is received
    xhr.onload = function() {
    if (xhr.status != 200) { // analyze HTTP status of the response
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else { // show the result
        alert(`Done, got ${xhr.response.length} bytes (This means we finshed fetching the response, yei)`); // response is the server
        responses= JSON.parse(xhr.response);
        console.log(responses);
    }
    };

    xhr.onprogress = function(event) {
    if (event.lengthComputable) {
        alert(`Received ${event.loaded} of ${event.total} bytes ( this means we got the total size of the response; this means yei)`);
    } else {
        alert(`Received ${event.loaded} bytes`); // no Content-Length
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
    // 1. Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // 2. Configure it: GET-request for the URL /article/.../load
    xhr.open('GET', changeableUrl);

    // 3. Send the request over the network
    xhr.send();

    // 4. This will be called after the response is received
    xhr.onload = function() {
    if (xhr.status != 200) { // analyze HTTP status of the response
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else { // show the result
        alert(`Done, got ${xhr.response.length} bytes (This means we finshed fetching the response, yei)`); // response is the server
        responses= JSON.parse(xhr.response);
        }
    };

    xhr.onprogress = function(event) {
    if (event.lengthComputable) {
        alert(`Received ${event.loaded} of ${event.total} bytes ( this means we got the total size of the response; this means yei)`);
    } else {
        alert(`Received ${event.loaded} bytes`); // no Content-Length
    }

    };

    xhr.onerror = function() {
    alert("Request failed");
    };
}

function getTermQuotes() {

    let responses;
    let quote = 'ass'; 
    let changeableUrl = `${url}/search/${quote}`;
    // 1. Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // 2. Configure it: GET-request for the URL /article/.../load
    xhr.open('GET', changeableUrl);

    // 3. Send the request over the network
    xhr.send();

    // 4. This will be called after the response is received
    xhr.onload = function() {
    if (xhr.status != 200) { // analyze HTTP status of the response
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else { // show the result
        alert(`Done, got ${xhr.response.length} bytes (This means we finshed fetching the response, yei)`); // response is the server
        responses= JSON.parse(xhr.response);
        console.log(responses);
        }
    };

    xhr.onprogress = function(event) {
    if (event.lengthComputable) {
        alert(`Received ${event.loaded} of ${event.total} bytes ( this means we got the total size of the response; this means yei)`);
    } else {
        alert(`Received ${event.loaded} bytes`); // no Content-Length
    }

    };

    xhr.onerror = function() {
    alert("Request failed");
    };
}

