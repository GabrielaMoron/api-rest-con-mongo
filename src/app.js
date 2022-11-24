import express from "express";
import mongoose from "mongoose";
import colors from "colors";

// Import Artista routes
import ArtistaRouter from "./routes/ArtistaRoutes.js";

// Conección a la base de datos 
try {
    mongoose.connect(
        "mongodb://localhost:27017/Disquera",
        {
            //opciones de seguridad 
            useNewUrlParser: true,
            //devolvera de una manera especifica las respuestas que se encuentran ahí
            useUnifiedTopology: true
        }
    )
        .then(() => console.log("conecccion de DB realizada!"));
} catch (error) {
    console.log(error);
}


// App instancia
const app = express();

// JSON Middleware

app.use(express.json());

// Route middleware
app.use("/api/Artista", ArtistaRouter);

// App server listening
app.listen(3004, () => console.log(colors.rainbow("Server running in 3004 port")));