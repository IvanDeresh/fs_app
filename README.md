1. Install Dependencies
   To install dependencies:

Frontend:
--cd frontend
--npm install

Backend:
--cd nestjs
--npm install

---

2. Backend API Endpoints

----POST /superheroes: Create a new superhero.

Request:

{
"name": "Superman"
}

Response:

{ "id": 1, "name": "Superman" }

----GET /superheroes: Get all superheroes.

Response:

[
{ "id": 1, "name": "Superman" },
{ "id": 2, "name": "Batman" }
]

---

3. Frontend UI
   React App: Users can add a superhero and view the list.
   React Query: Fetches data from the backend and updates the UI.

---

4. Technologies Used
   React
   NestJS
   React Query
