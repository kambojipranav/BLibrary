mkdir tom-and-jerry-library
cd tom-and-jerry-library
mkdir backend
cd backend
npm init -y
npm install --package-lock-only
npm install express mongoose cors
node server.js
npx create-react-app frontend
cd frontend
npm install axios react-router-dom
npm start