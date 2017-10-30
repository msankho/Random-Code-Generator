
// An array of quotes
var quotes = 

[
	{
		"quote": "Moral indignation is jealousy with a halo.",
		"source": "H. G. Wells",
		"citation": "Some Citation",
		"year": "1866-1946",
		"tags": ["philosophical"] 
	},

	{
		"quote": "Glory is fleeting, but obscurity is forever.",
		"source": "Napoleon Bonaparte",
		"year": "1769-1821" ,
		"tags": ["philosophical"]
	},

	{
		"quote": "The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.",
		"source": "Bertrand Russell",
		"year": "1872-1970",
		"tags": ["philosophical", "political"]
	},

	{
		"quote": "When one person suffers from a delusion it is called insanity; when many people suffer from a delusion it is called religion.",
		"source": "Robert Pirsig",
		"citation": "Some Citation",
		"tags": ["philosophical", "religious"]
	},			
	{
		"quote": "The greater danger for most of us lies not in setting our aim too high and falling short, but in setting our aim too low, and achieving our mark.",
		"source": "Michelangelo",
		"year": "1475-1564",
		"tags": ["philosophical"] 
	},			
	{
		"quote": "Be yourself; everyone else is already taken.",
		"source": "Robert Pirsig",
		"year": "1948-",
		"tags": ["inspirational", "honesty"] 
	},			
	{
		"quote": "People demand freedom of speech to make up for the freedom of thought which they avoid.",
		"source": "Soren Aabye Kierkegaard",
		"year": "1813-1855",
		"tags": ["philosophical", "political"] 
	},			
	{
		"quote": "A people that values its privileges above its principles soon loses both.",
		"source": "Dwight D. Eisenhower",
		"citation": "Inaugural Address",
		"year": "January 20, 1953",
		"tags": ["philosophical", "business"] 
	},	
	{
		"quote": "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
		"source": "Bernard M. Baruch",
		"citation": "Inaugural Address",
		"tags": ["philosophical", "confidence"] 
	},			

];

// Generate a random color

function getRandomColor () {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for(i=0; i < 6; i++) {

		color += letters[Math.floor(Math.random() * 16)];
	}

	return color;

}

// Get a random quote from quotes array.

function getRandomQuote () {

	var totalQuotes = quotes.length;
	var randomNumber = Math.floor(Math.random() * totalQuotes);
	return(quotes[randomNumber]);
}


// Display the Quote 
// Function gets a random quote using getRandomQuote function and change the background color to a random color.

function printQuote() {

	var quote = getRandomQuote();
	var bkgColor = getRandomColor();


	// construct a string of quote to be displayed
	var htmlString = "<p class ='quote'>" + quote['quote'] + "</p>";
	htmlString += "<p class='source'>" + quote['source'];

	// if the 'citation' 
	if(quote['citation']) {
			htmlString += "<span class='citation'>" + quote['citation'] + "</span>";
	}

	if(quote['year']) {
			htmlString += "<span class='year'>" + quote['year'] + "</span>";
	}

	document.getElementById('quote-box').innerHTML = htmlString;

	// Change the background if the random color returned is not white.
	if(bkgColor != "#FFFFFF"){
		document.body.style.backgroundColor = bkgColor;
	}
}


// event listener to respond to "Show another quote" button clicks
// Display a random quote when "Show another quote" button is pressed.

document.getElementById('loadQuote').addEventListener("click", printQuote);

// Display a random quote after every 30 seconds.
window.setInterval(printQuote, 30000);
