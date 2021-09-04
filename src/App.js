import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😍": "Smile face with heart eyes",
  "💙": "Love",
  "😀": "Grinning Face",
  "😷": "Face With Medical Mask",
  "😑": "annoyance",
  "🤯": "Exploing head ",
  "🥳": "partying face",
  "🤧": "sneezing face",
  ":')": "😂",
  ":‑|": "😐"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have value in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h2 className="title">Emoticons are your friends?</h2>
      <input placeholder="Type your Emoticon.." onChange={emojiHandler} />
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      
    </div>
  );
}
