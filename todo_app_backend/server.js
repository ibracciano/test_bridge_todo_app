import express from 'express';
import cors from 'cors';

// importation des routes
import todoRouter from './routes/todo.route.js';

// importation des confiurations de la db
import connect_bd from './db/db.connect.js';

const app = express();

// les middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
    limit: '10mb'  // Limit the size of the request body to 10mb
}))

// CORS (Cross-Origin Resource Sharing)
app.use(cors({
    origin: 'http://localhost:5173',  // Allow all origins
    methods: 'GET, POST, PUT, DELETE',  // Allow all HTTP methods
    credentials: true,  // Allow the client to send cookies
    exposedHeaders: ['Authorization']  // Expose the Authorization header in the response
}))

// Routes
app.use("/api/todo", todoRouter)

app.get('/api', (req, res) => {
    const message = 'Hello, World!';
    res.send({ message });
});


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Serveur ouvert au port : ${PORT}`);
    connect_bd()
})