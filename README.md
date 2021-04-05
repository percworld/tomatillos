# Rancid Tomatillos

## Overview
Rancid Tomatillos is a web app that retrieves API data and displays recent and upcoming movies for a user to browse through. 

## Project Goals
* Learn how to create a functional app with React 
* Create multipage functionality with Router
* Use Cypress for testing app functionality and user stories 
* Make network requests to API endpoints (GET and POST)
* Ensure app is responsive and accessible 
* Understand and create a controlled form with React 
* Proper error handling

## Technologies Used
1. React
2. React Router
3. JavaScript
4. WebPack
5. Cypress testing
6. HTML5
7. CSS3

## Functionality
Upon visiting the app the user will see a home page that displays the cover art for a list of movies. 

<img src="https://gyazo.com/515260160027a64b008573a3ada099ea.gif">

The user can click on a movie and they will be taken to a new page showing all the details for the relevant movie. From this view the user can click either the 'HOME' button or the 'GO BACK' button to return to the main page. Additionally, the user can click the 'back arrow' on their browser to return to the home page. 

<img src="https://gyazo.com/34895a549a98219edb24fc21ddcfcc32.gif">

The user is given the option to filter movies by the title at the top of the app. Once the user types in a movie title and clicks submit the app will return all the movie titles with the key words the user typed in. 

<img src="https://gyazo.com/00eb9a9b517e6386c0a31cb6976b8e1a.gif">

If the user types in a movie title that doesn't exist or they leave the input field blank then the app will display an error message encouraging the user to try again. 

<img src="https://gyazo.com/271aa0c2b684cb1aaf40d13a721ca428.gif">

## Responsiveness 
**DESKTOP** 
![desktop](https://github.com/percworld/tomatillos/blob/main/img/desktop.png)

**TABLET**
![tablet](https://github.com/percworld/tomatillos/blob/main/img/tablet.png)

**MOBILE**
![mobile](https://github.com/percworld/tomatillos/blob/main/img/mobile.png)

## Installation

```bash
git clone git@github.com:percworld/tomatillos.git
cd tomatillos
npm i
npm start
```

## Contributors 
* [Julia Iwinski ](https://github.com/jgiwinski)
* [Chuck Morris ](https://github.com/percworld)
