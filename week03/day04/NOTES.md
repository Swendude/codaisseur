REST API:

HTTP Verbs: GET, POST, PUT, PATCH, DELETE (CRUD)
With HTTP verbs we mark a request with out intention
GET: Get data (read)
POST: Create data (create)
PUT: Replace data (update)
PATCH: Update data (update)
DELETE: Delete data (delete)

HTTP Status codes:
2xx: All is good!
4xx: User fucked up!
5xx: We fucked up!

HTTP Router:

modelName: Students
Fields: (id), name, class

GET /students -> Show me a list of all the students
GET /students/42 -> Show me one student with ID === 42
POST /student -> Create a new student
PATCH /student/42 -> Update student with ID === 42
PUT /students/42 -> Replace student with ID === 42
DELETE /students/42 -> Delete a specific student with ID === 42

POST, PUT, PATCH have a body which is like a letter. It takes of the form of JSON.

Header: GET /student/42

Headers: POST /students
Body: {name: Mahteb, class: 63}

Headers: PUT /students/42
Body: {name: Mahteb, class: 62}

Headers: PATCH /students/42
Body: {name: Alex}

Header: DELETE /student/42

Client -HTTP-> Server -SQL-> Database -Data-> Server -JSON-> client
