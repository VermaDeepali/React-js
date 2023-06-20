# NODE SOCIAL API's

In the "Node Social API's" folder, you will find the backend APIs that are essential for a social networking application. These APIs are designed to support the React Social application found in the "react-social" repository. The APIs cover various functionalities related to users and their posts. Here are the key features and technologies used in these APIs:

1. User Management: The APIs include endpoints for creating, updating, deleting, and retrieving user information. These endpoints handle user-related operations such as user registration, login, profile updates, and user deletion.

2. Post Management: The APIs offer functionality for creating, deleting, updating, and retrieving posts. Users can create new posts, edit or delete their own posts, and retrieve posts from the database. Additionally, the APIs support features like liking a post, disliking a post, following other users, and unfollowing users.

3. MongoDB Database: The APIs utilize MongoDB, a popular NoSQL database, for storing user information, posts, and other relevant data. MongoDB's flexibility and scalability make it suitable for handling the dynamic nature of social app data.

4. Express Framework: The APIs are built using the Express.js framework, which simplifies the development of robust and scalable web applications in Node.js. Express provides a streamlined approach to handling HTTP requests, routing, and middleware integration.

5. Password Encryption: The APIs employ bcrypt, a widely-used library, for encrypting and securely storing user passwords. By encrypting passwords, the APIs enhance the security of user data.

6. Logging and Security: The APIs incorporate the use of Morgan, a logging middleware, to generate detailed logs of HTTP requests and responses. Additionally, the Helmet package is utilized to enhance the security of the API endpoints by setting appropriate HTTP headers.

By combining these technologies, the Node Social API's provide a foundation for building a social networking application with user management, post creation, interaction, and secure data handling capabilities.


### Added postman collection file

I have also included a Postman collection file in this repository. If you want to explore and test the APIs mentioned above, you can import the collection file into your Postman application. The collection contains pre-configured requests for each API endpoint, allowing you to easily interact with the backend and examine the functionalities provided.

Feel free to import the Postman collection and explore the APIs to get a better understanding of the user management, post creation, interaction, and data handling capabilities of this Node Social application.
