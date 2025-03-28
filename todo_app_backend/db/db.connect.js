import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Chargement des variables d'environnement

const URI_PRODUCTION = process.env.MONGO_URI
// importation de l'url de base de données

const connect_bd = async () => {
    if (!URI_PRODUCTION) {
        console.error("MONGODB_URI n'est pas définie .env");
        process.exit(1); // Exit if URI is missing
    }
    try {
        await mongoose.connect(URI_PRODUCTION);
        console.log("Connexion à la base de données réussie");
    } catch (error) {
        console.error("Echec de connexion à la base de donnée:", error.message);
        process.exit(1);
    }
}

export default connect_bd;