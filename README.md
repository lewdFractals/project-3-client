# Project Three: Group Project
## Project Prompt: Content Management System

Build an app to build a website! Your app must allow non-technical users to write blog posts **and** pages for the site. When a visitor visits your site, they should see content. When a user logs in, they should see a dashboard that lets them create and edit new posts or pages.

Live application:
https://lewdfractals.github.io/project-3-client

Back-end repository: https://github.com/laurenallegra/project-two-rails-api

## About

TypeWriter is a content management system that allows non-technical end-users to create a blog (which can contain many
postings) and pages with their own content, and add basic formatting to that content.

After signing-up and logging-in, a user can create pages and blog posts, and later edit or delate those pages and blog posts. A user can view all their pages or blog posts, or single blog post if they choose to.

## Features

- User Authentication: sign-up, sign-in, sign-out, and change password
- Basic CRUD actions: create, edit, get-index, update, and delete

## Technologies Used

- Front-end: HTML/SCSS/Sass, Javascript, Bootstrap, AJAX, jQuery, Handlebars.js
- Back-end: node.js, express, Mongoose, mongodb

## Planning


- Created wireframes and user stories
- Collected resources like browser and API templates
- Discussed approach with instructors and peers

## Development Process

After completing a basic installation and setup of both the front and back-end templates, we set up user authentication. We then had a planning meeting, where we discussed and created a vision for our app. We created ERDs (Entity Relationship Diagrams) and DSDs (Data Structure Diagrams); wrote user-stories; and sketched wireframes. We relied heavily on these planning resources, and came back to them to refactor as needed, when we hit obstacles or decided we wanted to change direction.

We developed the back-end using the information agreed upon by the group and the resources we diagrammed in the DSDs. The data was structured as `blogs`, a shorthand for blog entry, and `pages`, each of the multiple pages a user would be able to create. Each `blog` contained the basic information required, as a blog has a more simple structure: only `title`, and `content` at first, with `author` implemented later. We decided that a page, however, would contain more information as it is possible to be laid out in a more complex fashion: `header`, `content`,`sidebar`, and `footer`. The latter two elements, `sidebar` and `footer`, were left unrendered to the user in the final version as we were not able to display them usefully (this is one of the reach goals we would implement if given more time.) The only action open to a user who is not currently logged in is the ability to view blog posts. All API endpoints  were tested using curl requests, until after the working AJAX actions had been formulated from the front end.

On the front-end, we first created a basic html template with no styling, and made sure that all the buttons and forms worked as we expected them to. We then began to implement different view states with jQuery, such as hiding and showing certain elements after buttons were clicked or text was entered in fields. We tried to make the UI as intuitive as possible.

We then had a meeting to discuss an overall creative direction, including a name for our app, and styling and themes. We liked the idea of a typewriter, since our app would be used to create text content, so we decided to simply call our app "TypeWriter," and to use a palette of neutral grayscales with a pop of color here and there. We chose a highly-styled font that resembled a typewriter font for headers, and an easier-to-read (but still evocative of a typewriter) font for filling in forms and rendering user-created content.

We then began to implement our stylistic choices into our UI, adding themes, colors, and typogrpahy. We used handlebars to render user-generated content. We also continued to work on fine-tuning our API.

Throughout development, we continued to keep our focus on meeting requirements, but managed to implement one of our reach goals of using a third-party API to allow users to format their content. Because there is so much text in our app, we decided to keep the design clean and simple for both the initial view state and the rendering of blog posts and pages.


## Unsolved Problems and Next Steps

- Not entirely responsive / mobile-friendly
- Code not completely DRY
- Styling/CSS could be improved, including rendering of blogs and pages
- Make UI/UX a little more "fun"
- Add feature to allow users to create custom sequences of pose-forms
- Add more specific messsages about success or failure of CRUD acions, i.e., "You have successfully deleted a blog post."
- Add a way for users to upload images
- Add tags and make blogs and pages searchable
- Add tinyMCE to edit post/ page fields
- When editing, display text being edited to the user rather than blank form
- Create button to display the edit and delete forms

## Wireframes, User Stories, Entity Relationship Diagrams

- https://www.evernote.com/l/Arkz_oT4xPtIqocoXWmwc3qesjtFivz50GA


## Final Thoughts
We learned a lot working in a group, and would love to have had more time to implement more of our reach goals. We enjoyed the experience of working together, pair-programming, and even the challenge of overcoming the occasional github merge conflict!
