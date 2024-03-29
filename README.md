# WhatsApp Contact Fetcher V2 - (Web browser extension)
![Screenshot](dump-screen1.png?raw=true) 

WhatsApp Contact Fetcher is a useful script designed to facilitate retrieving contacts from WhatsApp chat groups where no names are entered. Sometimes it happens that chat groups contain only phone numbers without associated names, which can make it difficult to organize and manage the contacts in an efficient way.

Using WhatsApp Contact Fetcher, you can quickly and easily extract phone numbers from the chat group and save them in either HTML or CSV format. This makes it possible to export and store your contacts in a structured way for further management or analysis.

The script works by navigating to the WhatsApp web app in your browser and selecting the specific chat group whose contacts you want to retrieve. When the script runs, a list of phone numbers is generated in the selected format, which can then be downloaded as a file to your device.

WhatsApp Contact Fetcher is user-friendly and saves valuable time and effort by automating the process of extracting contacts from chat groups. Whether you need to organize your contact list, transfer contacts to another platform or perform analysis on your WhatsApp contacts, this script provides a smooth solution.

Note that WhatsApp Contact Fetcher is independent of external web services or API keys and works directly in your browser, providing a secure and private solution for managing your WhatsApp contacts.

Save time and simplify the management of your WhatsApp contacts by using WhatsApp Contact Fetcher and get a structured list of contacts in an instant.

## The "Why?"

This project came about as a result of a need to quickly extract phone numbers from a WhatsApp chat group. After searching for existing solutions without success, I decided to create my own script to solve the problem.

It is important to note that it is free to use, and you can build on the code to adapt it to your own needs.

Was all this necessary? Maybe... but now it's done :) . It was a whey of learning for me.

## Usage

1. Open WhatsApp in your browser.
2. Navigate to the chat group from which you want to retrieve the contacts.
3. Click the WhatsApp Contact Fetcher extension icon in the toolbar.
4. A pop-up box will open with options to select the download format (HTML or CSV).
5. A file will be downloaded with your contacts in the selected format.

## Adding a Chrome extension. Here is a brief explanation on how to do it

1. Download the extension: Usually you get the extension in the form of a ZIP file from the developer or from a source like git.
2. Extract the ZIP file: If the extension is in ZIP format, extract it to a folder (WhatsApp-Contact-Fetcher) on your computer.
3. Open the Chrome extensions page: Open your Chrome browser and enter the following in the address bar: chrome://extensions/. Then press Enter.
4. Enable Developer Mode: Make sure you have enabled "Developer mode" by clicking the box at the top right of the Chrome extensions page.
5. Load the extension: Click on "Load unpacked" (alternatively "Lagg till unpackad" in Swedish) and select the folder where you have extracted the extension. If all goes well, the extension will load into the browser and appear on the Chrome extensions page.

**Note:**

>To use the extension, all files need to be organized within a folder or in a ZIP file. This structure is necessary for the extension to be uploaded and installed correctly in the browser.

>Note that the name of the ZIP file has no meaning for the extension itself. It is the actual content and structure of the files inside the ZIP file that defines the extension.

```
WhatsApp-Contact-Fetcher                                    
 ├── Manifest.json                         
 ├── popup.html
 ├── popup.js
 ├── popup.css
 ├── icon16.png
```
## Contribution guide

You are welcome to contribute new suggestions or improve the code by following these steps:

1. Fork this repository.
2. Create a new branch for your changes: `git checkout -b feature/new-function`.
3. Make your changes and commit: `git commit -m "Add new feature"`.
4. Push to your branch: `git push origin feature/new-function'.
5. Open a pull request in this repository.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.

## Author and Contact Information

WhatsApp Contact Fetcher is developed by Ahmet Bilir. If you have any questions, suggestions or feedback, you can reach me at akke_bil@live.com.
