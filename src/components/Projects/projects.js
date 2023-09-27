
import streff1 from '../../assets/projectsImages/streff/Signup screen.jpg';
import streff2 from '../../assets/projectsImages/streff/user home.jpg';
import streff3 from '../../assets/projectsImages/streff/addlocation Screen.jpg';
import streff4 from '../../assets/projectsImages/streff/my added locations.jpg';
import streff5 from '../../assets/projectsImages/streff/contact screen.jpg';
import streff6 from '../../assets/projectsImages/streff/About screen.jpg';
import streff7 from '../../assets/projectsImages/streff/myaccount screen.jpg';
import todolist1 from '../../assets/projectsImages/to-do-list-ejs.png';
import mernblog1 from '../../assets/projectsImages/mernblog/mernBlog.png';
import mernblog2 from '../../assets/projectsImages/mernblog/mernblog2.png';
import ejsblog1 from '../../assets/projectsImages/ejs-blog.png';

let projectsList = [
    {
        projectTitle:"STREFF",
        tech:"React Native",
        description:["STREFF is a location-based app that enables the user to look for or find nearby fast food or street food places. Users of this app can access any nearby places to eat, but additional login access may be needed to add, review, or rate fast food places.","The app will be compatible with low-end smartphones, but an active internet connection would be required. To find places that serve street food, the app will display their locations as well as those close by. The application will have a user-friendly interface with many options and features. We designed this application with the aid of a variety of tools and languages.","Using this app, users can add fast food places to the map, view them, rate them, and even share the locations with their friends and family. To ensure better user interactions and experiences, we will be incorporating a variety of vital, powerful, and effective technologies, languages, and frameworks."],
        images :[streff1, streff2, streff3, streff4, streff5, streff6, streff7],
        githubUrl:''
    },
    {
        projectTitle:"To Do List",
        tech:"EJS",
        description:["The 'To-Do List' project is a modern web application that leverages a range of cutting-edge technologies to provide an efficient and user-friendly task management experience. The key technologies employed in this project include MongoDB, EJS (Embedded JavaScript), Node.js, and Express.js.",
            "MongoDB: As a NoSQL database, MongoDB is the backbone of the application's data storage. It offers a flexible and scalable structure for managing tasks efficiently. Tasks can be added, edited, deleted, and marked as completed, all seamlessly integrated with MongoDB.",        
            "EJS (Embedded JavaScript): EJS is used as the templating engine, enabling dynamic rendering of task lists. It allows for the easy embedding of JavaScript code within HTML templates, ensuring a smooth and responsive user interface.",      
            "Node.js and Express.js: The backend of the application is powered by Node.js and Express.js, providing a robust server-side environment. These technologies enable the handling of HTTP requests, routing, middleware implementation, and server-side scripting.",
            "Task Management: Users can effortlessly add, edit, delete, and mark tasks as completed. Tasks are stored in the MongoDB database, ensuring data persistence.",
            "Intuitive User Interface: The user interface is designed to be intuitive and user-friendly. Users can quickly grasp how to use the application without a steep learning curve.",
            "RESTful Routing: The project follows RESTful routing principles, ensuring clean and predictable URL structures for managing tasks.",
            "Error Handling: Robust error handling is implemented to provide informative feedback to users, enhancing the overall user experience.",
            "The 'To-Do List' project represents a showcase of modern web development practices, illustrating the power of the MEAN (MongoDB, Express.js, Angular, and Node.js) stack. Whether for personal or professional use, this application offers a practical and efficient solution for task management in today's fast-paced world."
        ],
        images :[todolist1],
        githubUrl:'https://github.com/KineshLohar/to-do-list-MongoDB-EJS-NodeJS-ExpressJS'
    },
    {
        projectTitle:"Mern Blog",
        tech:"React JS, NodeJS, ExpressJS, MongoDB",
        description:[
            "The 'MernBlog' project is a demonstration of a full-stack web application developed using the MERN (MongoDB, Express.js, React, and Node.js) stack. While the project is intentionally simplified and does not include user authentication, it showcases essential features and practices for building a blog platform.",
            "Frontend with React: The project's frontend is built with React, a popular JavaScript library for creating dynamic and responsive user interfaces. React components are used to render blog posts and interact with the user.",
            "Backend with Node.js and Express.js: The backend of the application is powered by Node.js and Express.js, providing a robust server-side environment. Express.js handles HTTP requests, routing, and middleware implementation.",
            "Database with MongoDB: MongoDB, a NoSQL database, is utilized to store and manage blog posts. The flexibility of MongoDB allows for efficient data storage and retrieval.",
            "Blog Post Management: Users can create, read, update, and delete blog posts. Each post includes a title, content, and date of creation.",
            "Responsive Design: The project incorporates responsive design principles, ensuring that the blog platform is accessible and usable on various devices, including desktops, tablets, and mobile phones.",
            "Data Fetching with API: React components fetch blog post data from the server using RESTful API endpoints. This demonstrates the communication between the frontend and backend."
        ],
        images :[mernblog1, mernblog2],
        githubUrl:'https://github.com/KineshLohar/MernBlog'
    },
    {
        projectTitle:"EJS Blog Webite",
        tech:"EJS",
        description:[
            "The 'blogWebsite' project is a dynamic web application that combines the power of EJS (Embedded JavaScript), MongoDB, Node.js, and Express.js to create a versatile blogging platform. This project provides users with a feature-rich experience for both reading and creating blog posts.",
            "EJS Templating: EJS is used as the templating engine, allowing for the creation of dynamic and interactive web pages. It seamlessly integrates JavaScript with HTML, enabling the rendering of blog content and user interfaces.",
            "Backend with Node.js and Express.js: The project leverages Node.js and Express.js to establish a robust server-side environment. Express.js handles HTTP requests, routing, and middleware, ensuring efficient communication between the frontend and backend.",
            "MongoDB Database: MongoDB, a NoSQL database, is employed for data storage. It provides a flexible and scalable structure for managing blog posts, user data, and comments. MongoDB's document-oriented nature suits the project's dynamic content needs.",
            "Blog Post Management: Users can create, read, update, and delete blog posts. Each blog post comprises a title, content, publication date, and author information. This comprehensive set of functionalities caters to both bloggers and readers.",
            "User Interaction: Readers can view and comment on blog posts, enhancing user engagement. Comments include the author's name, comment content, and a timestamp.",
            "User-Friendly Navigation: The project incorporates intuitive navigation, making it easy for users to browse through blog posts, categories, and authors. This enhances the overall user experience and encourages exploration.",
            "Responsive Design: The website features a responsive design, ensuring that it adapts seamlessly to various screen sizes and devices. Whether accessed from a desktop or mobile device, the content remains accessible and visually appealing.",
            "Versatile Blogging Platform: The 'blogWebsite' project offers a versatile and user-friendly platform for bloggers to share their insights and readers to explore engaging content. While user authentication is not included in this project, it serves as a solid foundation for future enhancements and personalization. Whether for blogging enthusiasts or developers looking to learn about web development, this project provides valuable insights into building a dynamic and interactive website.",
            "Learning and Exploration: Developers can use this project as a learning resource to understand how EJS templates, MongoDB, Node.js, and Express.js can be combined to create a feature-rich web application. It demonstrates best practices for building a blogging platform and encourages exploration and customization to suit individual needs and preferences."
        ],
        images :[ejsblog1],
        githubUrl:'https://github.com/KineshLohar/blogWebsite-EJS-MongoDB-Node-Express'
    },
]

export default projectsList;