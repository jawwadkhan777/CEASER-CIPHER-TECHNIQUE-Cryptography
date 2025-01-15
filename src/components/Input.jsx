import React, { useState } from "react";
import Output from "./Output";

const Input = () => {
  const [message, setMessage] = useState("");
  const [output, setOutput] = useState("");
  // console.log(message)

  const shift = 3;

  // Caesar Cipher Encryption
  const encryptHandler = (e) => {
    e.preventDefault();
    const encryptedMesssage = message.split("").map((char) => {
      if(char.match(/[a-z]/)) {
        return String.fromCharCode(((char.charCodeAt(0)-97+shift)%26)+97)
      } else if(char.match(/[A-Z]/)) {
        return String.fromCharCode(((char.charCodeAt(0)-65+shift)%26)+65)
      } else {
        return char
      }
    }).join("")
    setOutput(encryptedMesssage)
    // console.log(output);
  };

  // Caesar Cipher Decryption
  function decrytHandler(event) {
    event.preventDefault();
    const decryptedMessage = message.split("").map((char) => {
      if(char.match(/[a-z]/)) {
        return String.fromCharCode(((char.charCodeAt(0)-97-shift+26)%26)+97)
      } else if(char.match(/[A-Z]/)) {
        return String.fromCharCode(((char.charCodeAt(0)-65-shift+26)%26)+65)
      } else {
        return char
      }
    }).join("")
    
    setOutput(decryptedMessage)
  }

  return (
    <div>
      <form>
        <label htmlFor="message">Enter Message</label>
        <textarea
          id="message"
          type="text"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="button">
          <button onClick={encryptHandler}>Encrypt</button>
          <button onClick={decrytHandler}>Decrypt</button>
        </div>
      </form>
      <Output output={output} />
    </div>
  );
};

export default Input;
