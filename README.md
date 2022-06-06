<h1 align="center"> :clapper: Film Trivia Vault :clapper: </h1>

[View the live project here](http://nickdevc.github.io/Film_Quiz/)

Film Trivia Vault is a website that allows users to experience a quiz based on film trivia. It provides a simple, yet rewarding experience by being both aesthetically pleasing and user-friendly. The website has been built with mobile users in mind, and intends to be fully responsive across all devices.

![mockup](documentation/website-screenshots/Mockup.png)

## Index - Table of Contents
*  [Purpose](#purpose)
*  [User Experience (UX)](#user-experience-ux)
*  [Features](#features)
*  [Design](#design)
*  [Technologies Used](#technologies-used)
*  [Testing](#testing)
*  [Deployment](#deployment)
*  [Credits](#credits)

## Purpose

The purpose of the website is two-fold:

### 1 - Existing users
To provide an easily acessible page to test thier film trivia knowledge, celebrate their successes and attempt to beat their previous score. 

### 2 - New players
To provide an engaging and appealing space to prospective users by making the landing page bold and user-friendly. New users will be able to clearly navigate the rules before engaging in the quiz itself. Replayability is actively encouraged.

## User Experience (UX)

-  ### User Stories
   
   -  #### 1) First Time Visitor Goals
      
      1. I want to easily understand and access the main purpose of the site
      2. I want to be able to easily learn about the rules of the game
      3. I want to be able to quickly and effectively navigate around the quiz, instinctively following the button structure on each page
      4. I want to be able to easily view my on-going progress
      5. I want to be able to quickly and efficiently share my score with others
      6. I want to be able to easily navigate back to the start to replay the game
   
   -  #### 2) Returning Visitor Goals
   
      1. I want to be able to access and navigate the menu quickly and efficiently
      2. I want to be able to easily check and compare my score with others
      3. I want to have the option of viewing the rules before I play
   
   -  #### 3) Frequent User Goals

      1. I want to be able to jump straight into the quiz without navigating unnecessary pages/links

## Features

   ### Existing Features
      
-   __Home page__

    - The landing page is designed to draw the user's eye immediately in, by placing all of the content centered in the viewport. The background colours (consistent throughout the website) are pastel, and non-intrusive meaning that the navigation buttons remain the main focus of the user.
    - The home page consists of: a title, a 'Start' button, a 'Rules' button, and a 'High Scores' button. All of these buttons are consistent in design and their functions are supported by icons to indicante their purpose.
    - All buttons have been given hover/transform effects to ensure that users get appropriate feedback when navigating through their options.

      ![Navbar](documentation/website-screenshots/Home-page.png)

-   __Rules page__

    - A conscious decision was taken to make the 'Rules' page as simple as possible, so as not to detract attention away from the steps-to-play.
    - Rules have been presented in order to help with the flow of information to the user and their is one button to direct users back to the home page.

      ![Navbar](documentation/website-screenshots/Rules-page.png)
      
-   __Game page__

    - The quiz section of the website follows a uniform layout, to ensure that every question maintains the same aesthetic appeal and presents the user with a sense of growing familiarity as they progress.
    - The questions are presented in bold text, and the answer options are cleary labelled to ensure these are clearly demarcated from each other.
    - In addition, the user is provided with a running score and a progress bar to allow them to monitor their progress throughout the experience. This encourages healthy competition whilst also reassuring users of the end goal.
    - All option buttons have been styled with hover/transform effects and also highlight 'green' or 'red' (dependent on the validity of a user's answer) which provides further immediate feedback to the user.

      ![Navbar](documentation/website-screenshots/Game-page.png)
      
-   __End page__

    - On completion of the final question in the quiz, the user is automatically taken to the final page where they are encouraged through text prompts to enter and share their score on the leaderboard.
    - User's can input their name and compare their score to other users, encouraging healthy competition and replayability.
    - By clicking 'Save', users are automatically transfered to the home page, once again subconsciously encouraging them to play through the game again in order to beat their previous score.

      ![Navbar](documentation/wesbite-screenshots/End-page.png)

-   __High-scores page__

    - This page is automatically updated when user's input their final scores and presents a list (maximum of 5 strings of data) of user names and their corresponding scores.

      ![Navbar](documentation/website-screenshots/Leaderboard-page.png)

   ### Potential Future Features
   
- A running timer
   - This could potentially add a level of challenge and compeition to the quiz, encouraging further replayability.
   - This could be further enhanced by reporting the 'finish time' to the user at the end of the quiz.
- A method of contacting the developer
   - This could allow users to report bugs but also allow for feedback on a product that has the potential to be regularly updated.
- A leaderboard that is hosted online
   - This would allow for a universal leaderboard where users could compare their scores from around the world

## Design

   ### Colour
- After carrying out research surrounding the current clubs colours, it was evident that black and gold were the prominent tones that represented Nene Valley Venom.
- I used [Coolors](https://coolors.co/) to explore different colour schemes that best matched the club's brand and settled on [this](https://coolors.co/palette/000814-001d3d-003566-cca000-f5cc00) palette. Not only did the palette provide a matching gold tone, it also provided an interesting contrast with blacks and dark navy blues.
   
   ### Typography
   
- [Google Fonts](https://fonts.google.com/) was used to source scripts that would be legible, link to the brand identity of the club, and also relate to the wider 'sporting world'.
- 'Babas Neue' was chosen for all headings, subheadings and the logo. The font is not only bold and dominant (much like the club), it also speaks to vintage sports clothing associated with basketball teams from the 20th century. In order to make this font even more impactful, I was able to apply an outline to the logo, making the text jump off the navigation bar.
- 'Inter' was chosen for all remaining text elements. It is simplistic in design, easily legible, and also does not detract from the impact of the attention-grabbing headings.
   
   ### Imagery

- The large hero image was chosen as it conveyed a sense of success for both potential and returning players. I also chose the image because it gives a sense of familiarity to the target audience of the website.
- The three images on the home page were chosen as they not only conveyed a sense of action and pace, but also, in some cases reflected the colour scheme and brand identity of the club.
   
   ### Initial Wireframe Plans
   
   #### Home Page Design
   
   ![Navbar](documentation/design_wireframes/Index.html.png)
   
   #### Fixtures Page Design
   
   ![Navbar](documentation/design_wireframes/Fixtures.html.png)
   
   #### Contact Page Design
   
   ![Navbar](documentation/design_wireframes/Contact.html.png)

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

### Frameworks, Libraries & Programs Used

-   [Google Fonts](https://fonts.google.com/)
      - Used to import specific fonts.
      - The fonts 'Inter' and 'Babas Neue' were used throughout the project and were present all pages.
-   [Font Awesome](https://fontawesome.com/)
      - Used to add icons for aesthetic and UX purposes.
      - The icons were applied to the navigational menu links, footer, and some subheadings
-   [Git](https://git-scm.com/)
      - Used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.
-   [GitHub](https://github.com/)
      - Used as the respository for the projects code after being pushed from Git.
-   [Balsamiq](https://balsamiq.com/)
      - Used to create wireframes during the initial design stages.
-   [Microsoft Paint](https://apps.microsoft.com/store/detail/paint/9PCFS5B6T72H?hl=en-gb&gl=GB)
      - Used to edit photos/images that would later be deployed to the site.
-   [Coolors]((https://coolors.co/)
      - Used to source a colour palette that would link to the club's brand identity.
-   [Techsini](https://techsini.com/multi-mockup/index.php)
      - Used to create mockup images of my live website on numerous different devices.

## Testing

### Validator Testing
   
#### HTML
   
- Result for index.html

   ![Navbar](documentation/validation_results/Testing_HTML_Home.jpg)

- Result for fixtures.html

   ![Navbar](documentation/validation_results/Testing_HTML_Fixtures.jpg)

- Result for contact.html

   ![Navbar](documentation/validation_results/Testing_HTML_Contact.jpg)
   
#### CSS

- Result for style.css

   ![Navbar](documentation/validation_results/Testing_CSS_Result.jpg)
   
- Remaining warnings
   
   - The remaining two warning are due to a webkit extension for specific browser support

   ![Navbar](documentation/validation_results/Testing_CSS_Warnings.jpg)
   
#### Full Validation Results

- [HTML Results - index.html](https://github.com/NickdevC/Nene_Valley_Basketball/blob/main/documentation/validation_results/W3_HTML_Validator_results_Home.pdf)
- [HTML Results - fixtures.html](https://github.com/NickdevC/Nene_Valley_Basketball/blob/main/documentation/validation_results/W3_HTML_Validator_results_Fixtures.pdf)
- [HTML Results - contact.html](https://github.com/NickdevC/Nene_Valley_Basketball/blob/main/documentation/validation_results/W3_HTML_Validator_results_Contact.pdf)
- [CSS Results - style.css](https://github.com/NickdevC/Nene_Valley_Basketball/blob/main/documentation/validation_results/W3C_CSS_Validator_results.pdf)
   
### Lighthouse Testing   

- Results for index.html

   ![Navbar](documentation/validation_results/Testing_Lighthouse_Home.png)
   
- Results for fixtures.html

   ![Navbar](documentation/validation_results/Testing_Lighthouse_Fixtures.png)
   
- Results for contact.html

   ![Navbar](documentation/validation_results/Testing_Lighthouse_Contact.png)
   
- Testing using the Lighthouse feature of Google Chrome's Developer Tools was useful in identifying issues with my initial colour choices (contrast was not enough to warrant high accessibility scores). As a result, I was able to change much of the heading elements so that the site was more accessible for all. 
- In addition to this, I found that my performance score on the fixtures.html page would vary (even on the same device) with no changes being made to the code itself. I am however confident that the page performs on all devices and a range of browsers.

### Browser Compatibility

- Testing has been successfully carried out on the following browsers:
   
   - Google Chrome - Version 100.0.4896.60 (Official Build) (64-bit)
   - Microsoft Edge - Version 100.0.1185.50 (Official build) (64-bit)
   - Mozilla FIrefox - Version 99.0.1 (64-bit)
   - Safari - Version 13.1.3 (15609.4.1)

### Resolved Bugs

- When applying the "float" property to elements positioned above the footer element, I found the footer text would move up the page and overlap other content. Changing/adding attributes and properties within the sections and divs above the footer did not resolve the problem
   
   - Solution: I applied the "clear:both" property to the footer element

- When creating media queries to allow my navigational bar menu to move under the logo on smaller screen sizes, I found that white space would continue to be created, seperating the navigational bar from the hero image. I initially believed this was due to the way I was applying the "float" property to the navigational bar menu

   - Solution: I applied a negative value to the "margin-top" property
   
   
## Deployment

   ### How to deploy

- Go to the GitHub repository and navigate to the 'Settings' tab. Once there, select 'Pages' from the menu
- Go to the 'Source' menu (drop-down box) and select 'Master Branch'
- After the page has auto-refreshed, you should see a detailed ribbon display - this demonstrates a successful deployment
- Now, any changes pushed from GitPod to the master branch will be visible and take effect on the live project [live project link](https://nickdevc.github.io/Nene_Valley_Basketball/index.html)

   ### How to clone

- Go to the following repository on GitHub: https://nickdevc.github.io/Nene_Valley_Basketball/index.html
- At the top right of the screen, click the 'Code' button, and then click 'HTTPs'
- Copy the link in this field
- In GitPod, open a new GitBash terminal and go to the directory where you want to find the clone
- On the command line type "git clone", then paste the copied url and press 'Enter'
- The clone process should now begin

## Credits

  ### Photos
  
-  'Hero image' - Photo from 'Pixabay'
-  'Youth basketball' image - Photo by <a href="https://unsplash.com/@tjump?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nik Shuliahin</a> on <a href="https://unsplash.com/s/photos/youth-basketball?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
-  'Senior player holding ball' image - [Photo by Mídia from Pexels](https://www.pexels.com/photo/man-in-gray-sleeveless-shirt-carrying-white-and-brown-spalding-basketball-974509/)
-  'Senior player performing a layup' image - [Photo by Wallace Chuck from Pexels](https://www.pexels.com/photo/basketball-players-2874717/)
  

  ### Code
  
-  'How to outline text' - SlackOverflow
-  'How to animate an image' - Love Running (Code Institute project)
-  Inspiration for structuring a README file from [Elainebroche-dev's githubproject](http://github.com/elainebroche-dev/ms1-thrive)
-  Support with aligning images using [float](https://www.w3schools.com/howto/howto_css_images_side_by_side.asp)
-  My mentor Martina for specific support regarding Git commands and using 'Git pull'

### Acknowledgements

- I want to say thank you to my mentor Martina, who consistently gave me good advice, valuable challenge, and helped me keep things in perspective throughout the project.
