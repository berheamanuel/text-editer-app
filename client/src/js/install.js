const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
//  event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent Chrome 76 and later from showing the mini-infobar
  event.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = event;
  // Update UI notify the user they can add to home screen
  butInstall.style.display = "block";
});

// click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  // Check the result
  if (outcome === "accepted") {
    console.log("User accepted the install prompt");
  } else {
    console.log("User dismissed the install prompt");
  }
  // We no longer need the prompt. Clear it up.
  deferredPrompt = null;
  // Hide the button
  butInstall.style.display = "none";
});

//  handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("Jate has been installed!", event);

  // Clear prompt
  window.deferredPrompt = null;
});
