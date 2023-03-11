const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];

//Show New Quote
function newQuote() {
//Pick randon Quote from Api Array
  const	quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//Check if Author field is blank, replace with unknown
  if (!quote.author) {
  	authorText.textContent = 'Unknown';
  } else {
  	authorText.textContent = quote.author;
  }
  //Check Quote length to determine styling 
  if(quote.text.length > 120) {
  	quoteText.classList.add('long-quote');
  } else {
  	quoteText.classList.remove('long-quote');
  }
    quoteText.textContent = quote.text;		
}		

// Get Quotes from API
async function getQuotes() {
	const apiUrl = 'https://type.fit/api/quotes';
	try{
	  const	response = await fetch(apiUrl);
	  apiQuotes = await	response.json();
	  newQuote();						
	} catch(error) {
		//Catch Error Here !! :)
	}
}

// Tweet Quote
function tweetQuote(){
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
	window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);




//On Loading Page
getQuotes();
