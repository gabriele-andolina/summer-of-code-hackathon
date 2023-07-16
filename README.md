# Summer Of Code Hackathon

# Trail Pals

## Introduction

Welcome to the Trail Pals website. Trail Pals organises hiking events based in Dublin.

A live website can be found [here]().

<img>


# Table of Contents

-   [1. UX](#ux)
    -   [1.1. Strategy](#strategy)
            -   [Project Goals:](#project-goals)
            -   [User Goals:](#user-goals)
            -   [User Expectations:](#user-expectations)
    -   [1.2. Structure](#structure)
    -   [1.3. Skeleton](#skeleton)
    -   [1.4. Design](#design)
-   [2. Features](#features)
-   [3. Technologies Used](#technologies-used)
-   [4. Testing](#testing)
-   [5. Deployment](#deployment)
-   [6. Social Media](#social-media)
-   [7. End Product](#end-product)
-   [8. Known Bugs](#known-bugs)
-   [9. Credits](#credits)



# 1. UX
[Go to the top](#table-of-contents)


## 1.1. Strategy

[Go to the top](#table-of-contents)

### Project Goals:

### User Goals:

### User Expectations:

### User Stories:

We used the GitHub projects board to manage our project. This ensured that we were on track as we moved issues from to do, to in progress and finally to done.

<img width="956" alt="Kanban" src="https://github.com/EdHarty/summer-of-code-hackathon/assets/88341568/21f4b0b9-30aa-4048-8717-c0d07ac0cdf9">


## 1.2. Structure

[Go to the top](#table-of-contents)

The website has a responsive design to ensure a pleasant user experience whilst using different devices. The design is simple and user friendly.

- The header, footer and navigation are consistent through all pages.
- The footer is at the bottom of the each page and contains links to social media websites.

## 1.3. Skeleton

[Go to the top](#table-of-contents)

### Wire-frames


## 1.4. Design

[Go to the top](#table-of-contents)

### Colours

### Typography

# 2. Features

[Go to the top](#table-of-contents)

### All Pages
- Navbar
The Navbar offers up three links to help the user navigate through the site
- footer.
### Home
- Links
- Button

### Events

- Carousel
The carousel is a slideshow for cycling through a series of content, built with CSS and some JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.

<img width="956" alt="Carousel (2)" src="https://github.com/EdHarty/summer-of-code-hackathon/assets/88341568/c23feb5b-3170-46d1-974f-5a4b8b0666c3">

```
<section aria-label="Hike Trails">
        <div class="carousel-container">
            <header class="block__header">
                <h2>Popular hike trails</h2>
            </header>
            <div class="carousel" data-carousel>
                <!-- Carousel pictures -->
                <ul class="carousel-images" data-slides>
                    <li class="carousel-slide" data-active>
                        <img src="assets/images/trail1.webp" srcset="" class="carousel-image" alt="A lake by the mountains">
                    </li>
                    <li class="carousel-slide">
                        <img src="assets/images/trail2.webp" class="carousel-image" alt="A hike trail leading through mountainous grassland">
                    </li>
                    <li class="carousel-slide">
                        <img src="assets/images/trail3.webp" class="carousel-image" alt="A forest densely populated with tall trees">
                    </li>
                    <li class="carousel-slide">
                        <img src="assets/images/trail4.webp" class="carousel-image" alt="A hike trail through a meadow">
                    </li>
                    <li class="carousel-slide">
                        <img src="assets/images/trail5.webp" class="carousel-image" alt="A hike trail up a mountain">
                    </li>
                    <li class="carousel-slide">
                        <img src="assets/images/trail6.webp" class="carousel-image" alt="A hilly forest hike trail">
                    </li>
                </ul>
                <!-- Carousel tabs -->
                <ul class="carousel-tabs" data-tabs>
                    <li class="carousel-tab" data-carousel-tab data-index="0" data-active></li>
                    <li class="carousel-tab" data-carousel-tab data-index="1"></li>
                    <li class="carousel-tab" data-carousel-tab data-index="2"></li>
                    <li class="carousel-tab" data-carousel-tab data-index="3"></li>
                    <li class="carousel-tab" data-carousel-tab data-index="4"></li>
                    <li class="carousel-tab" data-carousel-tab data-index="5"></li>
                </ul>
                <!-- Carousel controls -->
                <button class="carousel-button previous" data-carousel-button="previous" aria-label="Previous carousel">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button class="carousel-button next" data-carousel-button="next" aria-label="Next carousel">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
                <!-- Carousel text -->
                <ul class="carousel-information" data-information>
                    <li class="carousel-text" data-carousel-text data-index="0" data-active>
                        <p>Trail: #1</p>
                        <p>Trail length: #1</p>
                        <p>Meet Location: #1</p>
                        <p>Date: #1</p>
                        <p>Time: #1</p>
                    </li>
                    <li class="carousel-text" data-carousel-text data-index="1">
                        <p>Trail: #2</p>
                        <p>Trail length: #2</p>
                        <p>Meet Location: #2</p>
                        <p>Date: #2</p>
                        <p>Time: #2</p>
                    </li>
                    <li class="carousel-text" data-carousel-text data-index="2">
                        <p>Trail: #3</p>
                        <p>Trail length: #3</p>
                        <p>Meet Location: #3</p>
                        <p>Date: #3</p>
                        <p>Time: #3</p>
                    </li>
                    <li class="carousel-text" data-carousel-text data-index="3">
                        <p>Trail: #4</p>
                        <p>Trail length: #4</p>
                        <p>Meet Location: #4</p>
                        <p>Date: #4</p>
                        <p>Time: #4</p>
                    </li>
                    <li class="carousel-text" data-carousel-text data-index="4">
                        <p>Trail: #5</p>
                        <p>Trail length: #5</p>
                        <p>Meet Location: #5</p>
                        <p>Date: #5</p>
                        <p>Time: #5</p>
                    </li>
                    <li class="carousel-text" data-carousel-text data-index="5">
                        <p>Trail: #6</p>
                        <p>Trail length: #6</p>
                        <p>Meet Location: #6</p>
                        <p>Date: #6</p>
                        <p>Time: #6</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
``` 
- Modal
A modal window creates a mode that disables user interaction with the main window but keeps it visible, with the modal window as a child window in front of it. 
```
(Add Code Snippet)
``` 

### Trails
- Maps

<img width="956" alt="Map" src="https://github.com/EdHarty/summer-of-code-hackathon/assets/88341568/4bec1104-52ac-448e-903d-45992c65b697">


```
function initMap() {
    const codeInstitute = { lat: 53.298621297843354, lng: -6.178393105375929 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: codeInstitute,
    });
    const marker = new google.maps.Marker({
        position: codeInstitute,
        map: map,
    });
}
``` 

# 3. Technologies Used
[Go to the top](#table-of-contents)

-   [HTML5](https://en.wikipedia.org/wiki/HTML)
    -   The project uses HyperText Markup Language.
    (insert Image)
-   [CSS3](https://en.wikipedia.org/wiki/CSS)
    -   The project uses Cascading Style Sheets.
    (insert Image)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
    -   The project uses JavaScript.
    (insert Image)
-   [Boostrap 4.6](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
    -   The project uses Bootstrap 4.6.
-   [Balsamiq](https://balsamiq.com/)
    -   Balsamiq was used to create the wireframes during the design process.
-   [Google Fonts](https://fonts.google.com/)
    -   Google fonts were used to import the **"Add Fonts"** font into the style.css file which is used on all pages throughout the project.
-   [GitHub](https://github.com/)
    -   GitHub was used to store the project's code after being pushed from Git.
# 4. Testing

### Responsive Tools

### W3C Validator Tools

#### HTML:

#### CSS:

#### JavaScript:

### Manual Testing

# 5. Deployment

# 6. Social Media Page

# 7. End Product

# 8. Known Bugs

# 9. Credits

### Code

### Content

### Project Acknowledgements

