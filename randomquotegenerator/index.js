/*** 
 * `quotes` array 
***/

let quotes = [
    {
        quote: "While discipline and freedom seem like they sit on opposite sides of the spectrum, they are actually very connected.",
        source: "Jocko Willink",
        year: 2008
    },
    {
        quote: "The time to relax is when you don't have time for it.",
        source: "Sydney J. Harris",
        year: 1912
    },
    {
        quote: "If you choose to do something, Attack It",
        source: "David Goggins",
        citation: "-Can't Hurt Me",
        year: 2010
    },
    {
        quote: "I think it is possible for ordinary people to choose to be extraodinary",
        source: "Elon Musk"
    },
    {
        quote: "With self-descipline, anything is possible",
        source: "Unknown"
    }
];



/***
 * `getRandomQuote` function
***/

// Looping through quotes //

function getRandomQuote(arr){
    for(let i = 0; i < quotes.length; i++){
        let grabRandomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
        let quote = quotes[i];
        return grabRandomQuotes;
    }
}

getRandomQuote(quotes);


// calling loop function //


/***
 * `printQuote` function
***/

function printQuote(){
    let displayQuote = getRandomQuote(quotes);
    let html = '';
    html += '<p class="quote">' + displayQuote.quote + '</p>'
    html += '<p class="source">' + displayQuote.source + '</p>';
    html += '<p class="citation">' + displayQuote.citation + '</p>';
    html += '<p class="year">' + displayQuote.year + '</p>';

    if(displayQuote.source == undefined){
        console.log(displayQuote.source);
    }

    document.getElementById('quote-box').innerHTML = html; 
}

console.log(printQuote());



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);