import mongoose from "mongoose";

const URI_PRODUCTION = process.env.MONGO_URI
// importation de l'url de base de données


const connect_bd = async () => {
    try {
        await mongoose.connect(URI_PRODUCTION);
        console.log("Connexion à la base de données réussie");
    } catch (error) {
        console.error("Echec de connexion à la base de donnée:", error.message);
        process.exit(1);
    }
}

export default connect_bd;