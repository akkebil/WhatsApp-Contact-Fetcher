document.getElementById("run-script").addEventListener("click", () => {
  console.log("Button clicked");  // Ny rad
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.log("Running script");  // Ny rad
    chrome.tabs.executeScript(tabs[0].id, { file: "contentScript.js" });
  });
});
