import React, { useEffect, useState } from "react";
import './randomquotegenerator.css';
import programmingQuotes from "./randomquotes";



const RandomQuoteGenerator = () => {

    
    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * programmingQuotes.length);
        return programmingQuotes[randomIndex];
    
    }

    const [quote, setQuote] = useState(getRandomQuote());
    

    useEffect(() => {
        const interval = setInterval(() => {
          setQuote(getRandomQuote());
        }, 7000); // 24 hours in milliseconds
    
        return () => clearInterval(interval); // Clean up the interval on unmount
      }, []);


    return (
        <div id="quoteSection">
            <div className="quoteBar">
                <h3 className="quoteTitle">{quote.quote}</h3>
                <p className="quoteAuthor"> - {quote.author}</p>
            </div>
            
        </div>
    );
}

export default RandomQuoteGenerator;