# Task Session 1 - Completed

## Project Setup
To set up and run the project, follow these steps:

**Clone the repository** and navigate to the project directory:

    ```bash
    cd task
    npm install
    npm run dev
    ```

## Summary of Completed Tasks

1. **React Router DOM Issue:**
   - Resolved the import issue with `react-router-dom` by ensuring it was correctly installed and imported.

2. **Fetching Posts using Axios:**
   - Implemented a function to fetch posts from `https://jsonplaceholder.typicode.com/posts` using Axios and set the posts in the component state using `setPosts`.

3. **Deleting a Post:**
   - Added functionality to delete a post by making a DELETE request to `https://jsonplaceholder.typicode.com/posts/{id}` using Axios. The posts state is updated by filtering out the deleted post.

4. **Adding a New Post:**
   - Implemented functionality to add a new post using a POST request to `https://jsonplaceholder.typicode.com/posts`. The new post is added to the existing posts list using the `setPosts` function.

5. **Passing Props to Components:**
   - Updated the `Navbar` component to accept `posts` and `setPosts` as props and used these to add new posts dynamically.
