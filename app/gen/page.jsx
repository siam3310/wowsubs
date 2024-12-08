<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Movie Post Generator</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        * { margin: 0; padding: 0; box-sizing: border-box; }\n        body { font-family: Arial, sans-serif; background: #f0f2f5; color: #333; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }\n        .container { max-width: 700px; width: 100%; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 20px; overflow: hidden; }\n        h2 { color: #4a90e2; margin-bottom: 20px; text-align: center; }\n        .input-group { margin-bottom: 15px; }\n        .input-group label { font-weight: bold; display: block; margin-bottom: 5px; color: #555; }\n        .input-group input { width: 100%; padding: 10px; font-size: 16px; border: 1px solid #ddd; border-radius: 5px; transition: border-color 0.3s ease; }\n        .input-group input:focus { border-color: #4a90e2; outline: none; }\n        #generateBtn, #copyBtn, #addDownloadBtn, #addVideoBtn { width: 100%; padding: 12px; font-size: 16px; font-weight: bold; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px; transition: background-color 0.3s ease; }\n        #generateBtn { background-color: #4a90e2; color: #fff; }\n        #generateBtn:hover { background-color: #357abd; }\n        #copyBtn { background-color: #50c878; color: #fff; }\n        #copyBtn:hover { background-color: #3ba162; }\n        #addDownloadBtn, #addVideoBtn { background-color: #f0ad4e; color: #fff; }\n        #addDownloadBtn:hover, #addVideoBtn:hover { background-color: #e89d3f; }\n        #output { margin-top: 20px; padding: 15px; background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 5px; white-space: pre-wrap; font-family: 'Courier New', monospace; overflow-x: auto; max-height: 300px; }\n        @media (max-width: 768px) { .container { padding: 15px; } h2 { font-size: 1.5em; } #generateBtn, #copyBtn, #addDownloadBtn, #addVideoBtn { font-size: 14px; padding: 10px; } .input-group label, .input-group input { font-size: 14px; } }\n    "
    }}
  />
  <div className="container">
    <h2>Movie Post Generator</h2>
    <div className="input-group">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" placeholder="Enter movie name" />
    </div>
    <div className="input-group">
      <label htmlFor="published">Published Date</label>
      <input type="date" id="published" />
    </div>
    <div className="input-group">
      <label htmlFor="image">Image URL</label>
      <input type="text" id="image" placeholder="Enter image URL" />
    </div>
    <div className="input-group">
      <label htmlFor="tags">Tags (comma-separated)</label>
      <input
        type="text"
        id="tags"
        placeholder="e.g., kajal arefin ome,bangla,web-series,chorki"
      />
    </div>
    <div className="input-group">
      <label htmlFor="category">Category</label>
      <input
        type="text"
        id="category"
        placeholder="e.g., Bangla-Dubb,Bangla,Hindi,Hindi-Dubb"
      />
    </div>
    <div id="videoLinksContainer">
      <div className="input-group">
        <label>Video Server 1 URL</label>
        <input
          type="text"
          className="video-url"
          placeholder="Enter video URL"
        />
      </div>
    </div>
    <button id="addVideoBtn">Add Another Video Link</button>
    <div id="downloadLinksContainer">
      <div className="input-group">
        <label>Download Server 1 URL</label>
        <input
          type="text"
          className="download-url"
          placeholder="Enter download URL"
        />
      </div>
    </div>
    <button id="addDownloadBtn">Add Another Download Link</button>
    <button id="generateBtn">Generate Post</button>
    <button id="copyBtn">Copy to Clipboard</button>
    <h3>Generated Post:</h3>
    <pre id="output" />
  </div>
</>
