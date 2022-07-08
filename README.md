# Oasis

### A journaling and note-taking web application built on the MERN stack.

### Instructions:
1. Clone the repository to your local machine. 
```bash
git clone https://github.com/DeagleOfficial/oasis.git
```
2. Navigate to the backend folder and install dependancies.
```
cd backend
npm install
```

3. Add a config folder, add a dev.env file and populate it with the required environment variables.
```
mkdir config
cd > dev.env
```

Add the variables: <br>
OASIS_MONGODB_URL= <br>
OASIS_JWT_SECRET=

4. Navigate to the frontend folder and install dependancies.
```
cd ../frontend
npm install
```

5. Create a .env file.
```
cd > .env
```

Add the variables: <br>
REACT_APP_OASIS_BACKEND=

6. Start the server.
```
cd ../backend
npm run dev
```

7. Start the React application.
```
npm start
```
