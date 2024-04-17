//install.js
const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA

// Event handler for beforeinstallprompt event
// This event fires whenever the app meets the criteria for installability
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = event;
  // Update UI notify the user they can install the PWA
  butInstall.style.display = 'block';
});

// Implement the click event handler on the butInstall element
butInstall.addEventListener('click', async () => {
  // Hide our user interface that shows our install button
  butInstall.style.display = 'none';
  // Show the install prompt
  if (deferredPrompt) {
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    // Optionally, send analytics event with outcome of user choice
    console.log(`User response to the install prompt: ${outcome}`);
    // We've used up the prompt, clear it
    deferredPrompt = null;
  }
});

// Event handler for appinstalled event
// This event is fired when the app has been installed
window.addEventListener('appinstalled', (event) => {
  // Clear the deferredPrompt so it can be garbage collected
  deferredPrompt = null;
  // Optionally, send analytics to indicate successful installation
  console.log('PWA was installed', event);
});