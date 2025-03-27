import mongoose from "mongoose";

const connect_bd = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/bridge");
        console.log("Connexion à la base de données réussie");
    } catch (error) {
        console.error("Echec de connexion à la base de donnée:", error.message);
        process.exit(1);
    }
}

export default connect_bd;