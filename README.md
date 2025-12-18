Personal Portfolio Website

Live Demo:
https://YOUR-VERCEL-LINK.vercel.app

This project is a personal portfolio website developed with React and Vite. The purpose of the project is to demonstrate frontend development skills including component-based architecture, state management, responsive design, theme handling, and external API communication.

The application is structured using separate React components for each section of the page. These sections include Header, Hero, Skills, Profile, Projects, and a Call To Action (CTA) area. All sections are rendered dynamically and organized in a clean, maintainable structure.

Tailwind CSS is used for styling. The layout is fully responsive and adapts to desktop, tablet, and mobile screen sizes. A dark and light theme system is implemented using React Context API. Theme changes are handled with conditional Tailwind classes without using Tailwind’s dark mode feature. The selected theme is persisted using localStorage so that user preference is preserved between page reloads.

Static data such as skills, profile information, and project details are stored in local JSON files. These data sets are rendered using the map method to ensure scalability and clean component logic.

The Call To Action section demonstrates external API communication. Axios is used to send a POST request to the Reqres API endpoint at https://reqres.in/api/workintech. Basic success and error handling is implemented to show asynchronous data flow and external service interaction.

No external internationalization library is used. Global state such as theme management is handled using Context API in order to demonstrate an understanding of React’s built-in state management patterns.

The project is deployed using Vercel. The production build is created with Vite and served from the dist directory. The application is fully functional in the deployed environment.

Technologies used in this project include React, Vite, Tailwind CSS, Axios, JavaScript (ES6+), and Context API.

This project aims to combine UI design, React fundamentals, and deployment into a single, complete frontend application.

Author:
Yiğit Özcan
Frontend Developer
