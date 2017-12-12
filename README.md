# Boomtown

The goal of this project is to create a web-based application to support a local sharing economy. Functionally, the app allows users to browse all items and see which have been borrowed by other users. It also has access to user profiles, where the users can see how many items they've borrowed/lent, and which items are theirs.

Items are stored in a Postgres database, and the user is able to both "borrow" items from others, and post new items they would like to share. 

Users must log in to their account to gain access to the website. I have yet to add a signup form, but in the meantime you can sign in with username: mandi@email.com  password: redredred

# Built Using 

- React
- React-Router
- Redux
- Redux Thunk
- Redux Forms
- Moment
- Gravatar
- Material UI
- ES6
- Babel
- Visual Studio Code
- Git/Git Hub
- Apollo Client
- GraphQL
- PostgresQL
- Firebase
- Express/Node

# Project Learnings/Takeaways
This project helped reinforce best practices and how to setup a webapp built in React, when to use Redux vs GraphQL, how to send and query data from PostgresQL, and user authentication with Firebase. This project is a work in progress as it is very large.

# Things left to do:
Login:
- Remove bug of login form crashing without input in boxes (disable button)
- Remove profile/logout buttons from login page
- Create signup form for users to add new users to database
- Show better feedback in login form

Items Page: 
- Hook up borrow button to actually “take out” an item

Share page:
- Provide form validation 
- Fix item posting to server bug
