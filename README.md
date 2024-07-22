# JavaScript complete
***
### To run, debug JavaScript indepedently from the browsers we can use *node* to run locally the JavaScript

#### From here's you can download NodeJS : <a>https://nodejs.org/en</a>
Verify the installation using this command into your terminal :
```cmd
node
```

#### npm (Node Package Manager) also included with the nodeJs that we can use to download and delete packages using the npm commands
```cmd
npm
```
## Hosting a local server from your machine using the framework 'express' : 
Download the express framework using the following command : 
```cmd
npm i express
```
Make a file with the extension of .js (index.js) and then paste the following code :
```cmd
const express = require('express');
const app = express();

// 3100 is your port for your live server
app.listen(3100, () => {
    console.log('Listenning on port 3100!');
});
```
Now, open your terminal and run this command to go live on your local server : 
```cmd
node index.js
```

#### Now, open your browser and search for : 
```search
localhost:3100
```