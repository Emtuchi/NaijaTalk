# User Endpoints

## Get All Users
- Method: GET
- URL: /api/v1/users
- Description: Retrieves all users.
- Request Body: None
- Response: Array of user objects.

## User Sign Up
- Method: POST
- URL: /api/v1/users/signup
- Description: Creates a new user account.
- Request Body: User information including username, email, and password.
- Response: user object(containig user description) or error.

## User Login
- Method: POST
- URL: /api/v1/users/login
- Description: Logs in an existing user.
- Request Body: User credentials including email and password.
- Response: success message or error.

## Get User by ID
- Method: GET
- URL: /api/v1/users/:user_id
- Description: Retrieves a user by their ID.
- Request Body: None
- Response: User object.


# Blog Endpoints

## Get All Blogs
- Method: GET
- URL: /api/blogs/
- Description: Retrieves all blogs.
- Request Body: None
- Response: Array of blog objects.

## Upload Blog
- Method: POST
- URL: /api/blogs/upload
- Description: Uploads a new blog.
- Request Body: Blog content including title, body, and author.
- Response: blog object or error.

## Update Blog
- Method: PUT
- URL: /api/blogs/update/:blog_id
- Description: Updates an existing blog by its ID.
- Request Body: New blog object.
- Response: user object or error.

## Get Blog by ID
- Method: GET
- URL: /api/blogs/:blog_id
- Description: Retrieves a blog by its ID.
- Request Body: None
- Response: Blog object.

## Delete Blog
- Method: DELETE
- URL: /api/blogs/:blog_id
- Description: Deletes a blog by its ID.
- Request Body: None
- Response: Success message or error.

## Get Blogs by User ID
- Method: GET
- URL: /api/blogs/user/:user_id
- Description: Retrieves all blogs written by a specific user.
- Request Body: None
- Response: Array of blog objects.