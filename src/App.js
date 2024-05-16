import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [inputFile, setInputFile] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFileChange = (event) => {
    setInputFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Text Input:', inputText);
    console.log('File Input:', inputFile);
    if (inputFile) {
      setFileUploaded(true);


      
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputText">Text Input:</label>
        <input type="text" id="inputText" name="inputText" value={inputText} onChange={handleTextChange} />
        
        <br />
        <br />

        <label htmlFor="inputFile">File Input:</label>
        <input type="file" id="inputFile" name="inputFile" onChange={handleFileChange} />
        
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
      {fileUploaded && <div>File uploaded successfully!</div>}
    </div>
  );
}

export default App;
