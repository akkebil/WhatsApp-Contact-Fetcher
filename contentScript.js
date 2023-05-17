setTimeout(function () {
  function createCSVDownloadLink(csvData, fileName) {
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function convertToCSV(titleTexts) {
    const csvArray = titleTexts.map((text) => {
      // Split each text at each comma
      const numbers = text.split(",");

      // Return a string where each number is enclosed in quotes
      // and separated by commas
      return numbers
        .map((number) => `"${number.trim().replace(/"/g, '""')}"`)
        .join(",");
    });

    return csvArray.join("\n");
  }

  // Get the "conversation-header" element
  let header = document.querySelector(
    'header[data-testid="conversation-header"]'
  );

  // If the header element exists, continue to get other elements
  if (header) {
    // Get "conversation-info-header-chat-title" within the header element
    let chatTitle = header.querySelector(
      'span[data-testid="conversation-info-header-chat-title"]'
    );
    let chatTitleText = chatTitle
      ? chatTitle.textContent
      : "chatTitle element not found";

    // Get "chat-subtitle" within the header element
    let chatSubtitle = header.querySelector('div[data-testid="chat-subtitle"]');
    let chatSubtitleText = chatSubtitle
      ? chatSubtitle.textContent
      : "chatSubtitle element not found";

    // Get all "title" span elements within the header element
    let titles = header.querySelectorAll("span[title]");
    let titleTexts = titles.length
      ? Array.from(titles).map((element) => element.title)
      : ["No title elements found"];

    // Print fetched data
    console.log("Chat Title:", chatTitleText);
    console.log("Chat Subtitle:", chatSubtitleText);
    console.log("Title Texts:", titleTexts);

    // Convert titleTexts to CSV
    const csvData = convertToCSV(titleTexts);

    function convertToHTML(titleTexts) {
      // Start with an opening <table> tag
      let html = "<table>\n";

      titleTexts.forEach((text) => {
        // Dela upp texten vid varje kommatecken
        const numbers = text.split(",");

        // Split the text at each comma
        numbers.forEach((number) => {
          html += `  <tr><td>${number.trim()}</td></tr>\n`;
        });

        // Lägg till en tom rad mellan varje text
        html += "  <tr><td>&nbsp;</td></tr>\n";
      });

      // Add a blank line between each text
      html += "</table>\n";

      return html;
    }

    function askUser() {
      // Show a dialog where the user can choose between HTML and CSV
      let format = prompt(
        "Type 'html' or 'csv'"
      );
      if (format === "html") {
        // If the user clicked OK, generate the HTML
        let html = convertToHTML(titleTexts);
        let blob = new Blob([html], { type: "text/html" });
        let url = URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.href = url;
        link.download = "contacts.html";
        link.click();
      } else if (format === "csv") {
        // If the user clicked Cancel, create the CSV
        let csv = convertToCSV(titleTexts);
        let blob = new Blob([csv], { type: "text/csv" });
        let url = URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.href = url;
        link.download = "contacts.csv";
        link.click();
      } else if (format === "cancel" || format === null) {
        // Om användaren skrev 'cancel' eller klickade på 'Cancel' i prompt-fönstret, avbryt operationen
        console.log("Operation avbruten av användaren.");
      } else {
        alert("Ogiltigt format. Försök igen.");
        askUser();
      }
    }
  }

  // Run askUser when ready
  askUser();
}, 3000);
// 3000 milliseconds = 3 seconds
//The author of this script: Ahmet Bilir
