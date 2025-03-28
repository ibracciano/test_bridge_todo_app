import mongoose from "mongoose";

const URI_PRODUCTION = process.env.MONGO_URI
// importation de l'url de base de données
const URI = process.env.NODE_ENV !== 'production' ? "mongodb://localhost:27017/bridge" : URI_PRODUCTION

const connect_bd = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connexion à la base de données réussie");
    } catch (error) {
        console.error("Echec de connexion à la base de donnée:", error.message);
        process.exit(1);
    }
}

export default connect_bd;