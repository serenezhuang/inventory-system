import Tool from '../../database/methods';
import { formatName, generateId } from '../../database/helpers';


export const addTool = async (req, res) => {
    const { newName, newQuantity } = req.body;
    const generatedId = await generateId(newName);
    const newTool = {
        id: generatedId,
        name: formatName(newName),
        quantity: parseInt(newQuantity),
    };
    await Tool.add(newTool);
    return res.status(201).send({tool: newTool});
};

export const decrementTool = async (req, res) => {
    const { id } = req.params;
    await Tool.decrement(id);
    return res.sendStatus(200);
};

export const deleteTool = async (req, res) => {
    const { id } = req.params;
    const tools = await Tool.delete(id);
    return res.status(200).send({tools});
};

export const getTool = async (req, res) => {
    const { id } = req.params;
    const existingTool = await Tool.get(id);
    return res.status(200).send({tool: existingTool});
};

export const getTools = async (req, res) => {
    const tools = await Tool.all();
    return res.status(200).send({tools});
};

export const incrementTool = async (req, res) => {
    const { id } = req.params;
    await Tool.increment(id);
    return res.sendStatus(200);
};

export const updateTool = async (req, res) => {
    const { id } = req.params;
    const { updatedName, updatedQuantity } = req.body;
    const updatedTool = {
        id,
        name: formatName(updatedName),
        quantity: parseInt(updatedQuantity),
    };
    await Tool.update(updatedTool);
    return res.status(200).send({tool: updatedTool});
};
