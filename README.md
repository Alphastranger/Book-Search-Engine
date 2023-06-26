# Book-Search-Engine
- For this assignment, the purpose of which is to create a functioning book search website, I began by following the instructions on the assignment page.
- I started out by editing the server.js to properly utilize graphql.
- The next thing I did was create a Schemas folder, which I filled with an index.js page, a resolvers page, and a typeDefs page. The contents of these were based on the instructions on the submission page as well as trying to base them off of the routes as instructed.
-Once I had the back end finished, I moved to the front end and filled out the mutations and queries js files in the utils folder.
- From there I edited the savedBooks and searchBooks to utilize the mutations and queries to properly search up the desired books. 
- This didn't go as well as I had planned, and in order to get the website to run, I had to mess with the mutations. Eventually it worked, at least for a little while, until I tried pushing the repo and the whole thing fell apart.
- I got help from one of the substitute T.A.s, Kayvon Kazemini, who eventually found that the problem was in my typeDefs, which, upon fixing, saw the website running as expected.

[link](https://enigmatic-temple-00214-c1a754d89175.herokuapp.com/)

![Screenshot](./Screenshot.png)