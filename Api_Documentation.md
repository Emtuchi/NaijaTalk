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
- Response: user object(containig user information) or error.

## User Login
- Method: POST
- URL: /api/v1/users/login
- Description: Logs in an existing user.
- Request Body: User credentials including email and password.
- Response: success message or error.

## Get User by ID
- Method: GET
- URL: /api/v1/users/:user_id
- Description: Retrieves a user by their ID passed as a parameter in the url.
- Request Body: None
- Response: User object.


# Blog Endpoints

## Get All Blogs
- Method: GET
- URL: /api/v1/blogs
- Description: Retrieves all blogs.
- Request Body: None
- Response: Array of blog objects.

## Upload Blog
- Method: POST
- URL: /api/v1/blogs/upload
- Description: Uploads a new blog.
- Request Body: Blog information including title, description, user, date.
- Response: blog object contaning information about blog including id, date, title, description or error.

## Update Blog
- Method: PUT
- URL: /api/v1/blogs/update/:blog_id
- Description: Updates an existing blog by its ID which is passed as a parameter in the url.
- Request Body: blog information including title and description.
- Response: blog object containing information about updated blog or error.

## Get Blog by ID
- Method: GET
- URL: /api/v1/blogs/:blog_id
- Description: Retrieves a blog by its ID which is passed as a parameter in the url.
- Request Body: None
- Response: Blog object.

## Delete Blog
- Method: DELETE
- URL: /api/v1/blogs/:blog_id
- Description: Deletes a blog by its ID.
- Request Body: None
- Response: Success message or error.

## Get Blogs by User ID
- Method: GET
- URL: /api/v1/blogs/user/:user_id
- Description: Retrieves all blogs written by a specific user using id that is passed as a parameter in the url.
- Request Body: None
- Response: Array of blog objects.