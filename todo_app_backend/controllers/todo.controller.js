import TodoModel from "../models/todo.model.js";

export const addTodo = async (req, res) => {
    const { titre, description } = req.body;
    // console.log(titre, description);

    if (!titre || !description) {
        return res.status(422).json({ success: false, message: 'Tous les champs sont obligatoires' });
    }
    try {
        const todo = await TodoModel.create({
            titre,
            description,
        });
        res.status(201).json({ success: true, message: 'Todo créé avec succès', data: todo });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: 'Erreur lors de la création du todo' });
    }
}

export const getAllTodos = async (_, res) => {
    try {
        const todos = await TodoModel.find({});
        res.json({ success: true, message: 'Todos récupérés avec succès', data: todos });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: 'Erreur lors de la récupération des todos' });
    }
}

export const updateTodo = async (req, res) => {
    const { idTodo } = req.params;
    if (!idTodo) {
        res.status(404).json({ success: false, message: "L'\id du todo est requis " })
    }
    try {
        // verifier si le todo existe
        const todoExist = await TodoModel.findById(idTodo);
        if (!todoExist) {
            return res.status(404).json({ success: false, message: "Todo non trouvé" });
        }
        // modifier le todo
        const todo = await TodoModel.findByIdAndUpdate(idTodo, { completed: true }, { new: true });
        if (!todo) {
            return res.status(404).json({ success: false, message: "Todo non trouvé" });
        }
        res.json({ success: true, message: 'Todo modifié avec succès', data: todo });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: 'Erreur lors de la modification du todo' });

    }
}

export const deleteTodo = async (req, res) => {
    const { idTodo } = req.params;
    if (!idTodo) {
        return res.status(404).json({ success: false, message: "L'\id du todo est requis " })
    }
    try {
        // verifier si le todo existe
        const todoExist = await TodoModel.findById(idTodo);
        if (!todoExist) {
            return res.status(404).json({ success: false, message: "Todo non trouvé" });
        }
        // supprimer le todo
        await TodoModel.findByIdAndDelete(idTodo);
        res.json({ success: true, message: 'Todo supprimé avec succès' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: 'Erreur lors de la suppression du todo' });
    }
}