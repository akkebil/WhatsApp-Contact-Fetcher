// Fetch data from the webpage
function fetchData() {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {
            code: `
            var data = {
                header: document.querySelector("header[data-testid='conversation-header']").innerText, 
                title: document.querySelector("span[data-testid='conversation-info-header-chat-title']").innerText, 
                subtitle: document.querySelector("div[data-testid='chat-subtitle']").innerText,
            }; 
            data`,

        },
        function (results) {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            console.log("Data fetched:", results[0]); // Log fetched data
            //alert("Data fetched: " + JSON.stringify(results[0])); // Show fetched data in a popup
            resolve(results[0]);
          }
        }
      );
    });
  });
}
// Create an HTML file from data
function createHTMLFile(data) {
    var numbers = data.header.split(',');  // Create an array of numbers
    var rows = numbers.map(function(number) {  // Create a table row for each number
        return `<tr><td>${number.trim()}</td></tr>`;
    }).join('');
    var html = `
        <html>
            <head>
                <title>Contact Info</title>
                <style>
                    table {
                        width: 15%;
                        border-collapse: collapse;
                    }
                    td {
                        border: 1px solid #dddddd;
                        text-align: left;
                        padding: 4px;
                    }
                    tr:nth-child(even) {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>${data.title}</h1>
                <table>
                    ${rows}
                </table>
            </body>
        </html>
    `;
    var blob = new Blob([html], {type: "text/html;charset=utf-8"});
    var url = URL.createObjectURL(blob);
    chrome.tabs.create({ url: url });
}


// Create a CSV file from data
function createCSVFile(data) {
    // Split header data into individual numbers
    var numbers = data.header.split(',');

    // Create a new CSV row for each number
    var rows = numbers.map(function(number) {
        return `${number.trim()}`;
    }).join('\n');

    // Create CSV string with header row
    var csv = 'Number\n' + rows;

    // Create a blob from the CSV string
    var blob = new Blob([csv], {type: 'text/csv;charset=utf-8'});

    // Create an object URL for the blob
    var url = URL.createObjectURL(blob);

    // Open the URL in a new tab
    chrome.tabs.create({url: url});
}


document.getElementById("downloadHTML").addEventListener("click", function () {
  console.log("HTML download button clicked"); // Log button click
  fetchData().then(createHTMLFile).catch(console.error);
});

document.getElementById("downloadCSV").addEventListener("click", function () {
  console.log("CSV download button clicked"); // Log button click
  fetchData().then(createCSVFile).catch(console.error);
});
