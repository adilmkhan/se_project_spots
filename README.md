# Project 3: Spots

## Project Description:

For this sprint I built Spots, a responsive web app where users can add, like, and delete photo cards of memorable places. The goal was to practice clean, modular vanilla JavaScript—no frameworks—while wiring a real REST API for data and building a production-style front-end with Webpack, Babel, and PostCSS.

What the code actually implements:

- Vanilla JS + modular structure: src/pages/index.js orchestrates UI logic; src/utils/Api.js wraps REST calls to the TripleTen “Around” API; src/scripts/validation.js provides reusable client-side form validation; src/utils/helpers.js has setButtonText for loading states.

- Key features visible in code: loading initial cards & user in parallel (getAppInfo()), adding a card (form submit → API → prepend new card), liking/unliking via REST (PUT/DELETE), deleting with a confirmation modal (selectedCardId flow), editing profile & avatar, modal open/close with overlay & ESC handlers, and robust input validation + disabled submit states.

- Tooling: Webpack dev server on port 8080 (seen in webpack.config.js), Babel, PostCSS, HtmlWebpackPlugin, CleanWebpackPlugin, MiniCssExtractPlugin, asset pipelines, and gh-pages deploy script.

- Styling: BEM-style CSS blocks (/blocks/\*.css), modal, cards, header/footer, profile, plus vendor/normalize.css and fonts.

## List of Tools and Technologies Incorporated in Design:

- [Figma](https://www.figma.com/file/BBNm2bC3lj8QQMHlnqRsga/Sprint-3-Project-%E2%80%94-Spots?type=design&node-id=2%3A60&mode=design&t=afgNFybdorZO6cQo-1)
- Semantic Markup
- Transition
- Flexbox
- Grid
- Relative Values (fr and %)
- minmax() function
- BEM classes
- BEM file structure
- Media Queries
- Text Overflow
- Js
- API (GET,PATCH, POST, DELETE, PUT)
- JS Data Validation

## Plan on improving the project:

**Results**: I shipped a clean, modular front-end app with real API integration, robust validation, and production builds. The codebase is readable and extensible: API logic is isolated, UI orchestration is straightforward, and CSS follows BEM organization.

**What I learned**: Even small apps benefit from clear layering, predictable imports, and consistent UX primitives (validation, loading states, modal patterns). Those habits scale directly into larger systems.

**What’s next**: I’d like to add auth, move to a real backend for persistence and ownership rules, and enable image uploads (e.g., S3/Cloudinary). I’d also consider a lightweight state manager or migrating to a component framework once the feature set grows.

### Click **[here](https://adilmkhan.github.io/se_project_spots/)** to view the webpage on Github.

### Check out **[this video](https://drive.google.com/file/d/17OVrSpamob7fszYn4adVp_eAVJ0XLY9I/view?usp=sharing)** where I describe my project and some challenges I faced while building it.
