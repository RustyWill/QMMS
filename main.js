// main.js
const { app, BrowserWindow, dialog } = require('electron');
const path = require('path');

let win; // Changed from const to let

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    },
    show: false // Don't show until ready
  });

  // Load the frontend build
  const indexPath = path.join(__dirname, 'frontend', 'build', 'index.html');
  
  win.loadFile(indexPath)
    .then(() => {
      console.log('Application loaded successfully');
      win.show(); // Show window after successful load
    })
    .catch(err => {
      console.error('Failed to load application:', err);
      
      // Show error dialog
      dialog.showErrorBox(
        'Application Error', 
        `Failed to load the application.\n\nError: ${err.message}\n\nPlease ensure the frontend is built by running:\nnpm run build`
      );
      
      // Try to load a fallback error page
      const errorHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>QMMS - Error</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; background: #1a1a1a; color: white; }
            .error { background: #ff4444; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .solution { background: #4444ff; padding: 20px; border-radius: 8px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <h1>QMMS Trading System - Error</h1>
          <div class="error">
            <h2>Application Failed to Load</h2>
            <p>The frontend build files could not be found.</p>
            <p><strong>Error:</strong> ${err.message}</p>
          </div>
          <div class="solution">
            <h2>Solution</h2>
            <p>Please run the following commands to build the frontend:</p>
            <pre>cd frontend
npm install
npm run build</pre>
            <p>Then restart the application.</p>
          </div>
        </body>
        </html>
      `;
      
      // Write temporary error file and load it
      const fs = require('fs');
      const tempErrorPath = path.join(__dirname, 'temp_error.html');
      fs.writeFileSync(tempErrorPath, errorHtml);
      win.loadFile(tempErrorPath);
      win.show();
    });

  // Handle window closed
  win.on('closed', () => {
    win = null; // Now this works because win is let, not const
  });

  // Development tools (remove in production)
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools();
  }
}

// App event handlers
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Security: Prevent new window creation
app.on('web-contents-created', (event, contents) => {
  contents.on('new-window', (event, navigationUrl) => {
    event.preventDefault();
    console.log('Blocked new window creation to:', navigationUrl);
  });
});
