import React, { useState } from "react";
import Data from "../quotes.json";

// FontAwesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const QuoteBox = () => {
  const [quotes, setQuotes] = useState(
    "Whatever the mind of man can conceive and believe, it can achieve."
  );
  const [author, setAuthor] = useState("Napoleon Hill");
  const [color, setColor] = useState("#2c3e50");

  const getQuote = () => {
    // Guardo la data
    const data = Data.quotes;
    const random = Math.floor(Math.random() * data.length);
    let quote = Data.quotes[random];
    return quote;
  };

  const handleChange = () => {
    const { author, quote } = getQuote();
    const colors = getColor();
    console.log(colors);
    setQuotes(quote);
    setAuthor(author);
    setColor(colors);
  };

  const getColor = () => {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  return (
    <div className="app-container" style={{ backgroundColor: color }}>
      <div className="container">
        <div className="card display-flex flex-direction justify-space-around ">
          <div style={{ color: color }}>
            <FontAwesomeIcon className="icon" icon={faQuoteLeft} size="2x" />{" "}
            {quotes}
          </div>

          <div className="display-flex justify-content-end">
            <div style={{ color: color }}>{author}</div>
          </div>

          <div className="display-flex justify-space-between">
            <div>
              <a
                style={{ backgroundColor: color }}
                href={`https://twitter.com/intent/tweet?text=${quotes}.. Author: ${author} `}
                target="blank"
              >
                <FontAwesomeIcon className="icon" icon={faHashtag} />
              </a>
            </div>

            <div>
              <button style={{ backgroundColor: color }} onClick={handleChange}>
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
