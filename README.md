# Node.js - CRUD backend web service

Create a backend web service for managing Students and Teachers and maintain them in MongoDB

Each Student should have the following properties:
- Student Name (studentName)
- Student Email (studentEmail)

Each Teacher should have:
- Teacher Name (teacherName)
- Teacher Email (teacherEmail)
- Teacher Course Focus (teacherCourseFocus) Example: Computer Science

Implement a default mount of `/api`

For both models implement full CRUD capability including an endpoint that will return a single student or teacher by their email address as well as an endpoint that will return all students and teachers (Note: use resource names `student` and `teacher` in your routes in your `routes/api.js` file)

### You should have 10 endpoints in total

Create test cases for *all* endpoints in Postman. They can be in the same collection but name accordingly.

### Include an export of your Postman Tests in your final Repo
