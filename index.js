import express from 'express'
import unknownEndpoint from './middleware/unknownEndpoint'
import dotenv from 'dotenv'
import router from './routes/routes';

// =========== CONSTANT ===========
// const PORT = 3001
dotenv.config()

// ==========================
const app = express();

app.use("/db/", router);

// === use MIDDLEWARE ===
// only called if no route handles the HTTP request.
app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})