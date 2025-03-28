import mongoose from "mongoose";

const connect_bd = async () => {
    try {
        await mongoose.connect("mongodb+srv://bridge:bridgeTest@bridge-cluster.ucovihs.mongodb.net/bridge?retryWrites=true&w=majority&appName=bridge-cluster");
        console.log("Connexion à la base de données réussie");
    } catch (error) {
        console.error("Echec de connexion à la base de donnée:", error.message);
        process.exit(1);
    }
}

export default connect_bd;