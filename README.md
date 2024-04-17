### JATE - Just Another Text Editor
JATE is a Progressive Web Application (PWA) that allows users to create notes or code snippets on-the-go with or without an internet connection. Once installed, it provides a reliable way to write and save your text data directly to your browser's IndexedDB, ensuring that your data is retained across sessions.

#Features
Edit Text: Simple, distraction-free text editor for notes and code snippets.
Offline Functionality: Works offline thanks to service worker caching.
Data Persistence: Uses IndexedDB to save and retrieve your data automatically.
Installable: Can be installed on your desktop or mobile device as a PWA.
Installation
Prerequisites
Node.js (recommended version 12.x or higher)
npm (Node Package Manager)
Getting Started
To get a local copy up and running follow these simple steps.

Clone the repository

bash
Copy code
git clone [https://github.com/yourusername/JATE.git](https://github.com/BryceGitHuba/Text-Editor)
cd JATE
Navigate to the Client Directory

bash
Copy code
cd client
Install NPM packages

bash
Copy code
npm install
Run the application

To start the application in development mode with hot-reloading, run:

bash
Copy code
npm run dev
To build the application for production, run:

bash
Copy code
npm run build
This will generate all the files necessary to deploy the application in the dist directory.

Open the Application

After running the development server, open your browser and navigate to:

arduino
Copy code
http://localhost:3000
#Usage
Once you have the application running, you can start typing in the text editor area. Your text will be automatically saved to IndexedDB as you type. If you close the browser or go offline, your data will persist and be available the next time you open the application.

Deployment
To deploy JATE, you'll need to serve the static files generated in the dist directory by the build process. This can be done through any static file server. For production environments, it's recommended to use a service like Render, Netlify, or Vercel.

Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
Distributed under the MIT License. See LICENSE for more information.
