import { promises as fs } from 'fs';
import path from 'path';

import FileError from '../src/utils/FileError';

const file = path.join(__dirname, 'inventory.json');

export default {
    add: async (tool) => {
        try {
            const data = await fs.readFile(file);
            const tools = JSON.parse(data);
            tools.push(tool);
            const updatedTools = JSON.stringify(tools);
            await fs.writeFile(file, updatedTools);
        } catch (err) {
            return new FileError(
                500,
                `There's an error with adding ${tool.name} to the JSON file.`,
            );
        }
    },
    all: async () => {
        try {
            const data = await fs.readFile(file);
            const tools = JSON.parse(data);
            return tools;
        } catch (err) {
            return new FileError(
                500, `There's an error with reading the JSON file.`,
            );
        }
    },
    decrement: async (id) => {
        try {
            const data = await fs.readFile(file);
            const tools = JSON.parse(data);
            const existingTools = tools.filter((tool) => tool.id !== id);
            const selectedTool = tools.find((tool) => tool.id === id);
            selectedTool.quantity--;
            existingTools.push(selectedTool);
            await fs.writeFile(file, JSON.stringify(existingTools));
        } catch (err) {
            return new FileError(
                500,
                `There's an error with decrementing ${tool.name}.`,
            );
        }
    },
    delete: async (id) => {
        try {
            const data = await fs.readFile(file);
            const tools = JSON.parse(data);
            const existingTools = tools.filter(
                (existingTool) => existingTool.id !== id);
            await fs.writeFile(file, JSON.stringify(existingTools));
            return existingTools;
        } catch (err) {
            return new FileError(
                500,
                `There's an error with deleting ${tool.name} from the JSON file.`,
            );
        }
    },
    get: async (id) => {
        try {
            const data = await fs.readFile(file);
            const tools = JSON.parse(data);
            const tool = tools.find((existingTool) => existingTool.id === id);
            return tool;
        } catch (err) {
            return new FileError(
                500,
                `There's an error with getting a tool with ID: ${id}`,
            );
        }
    },
    increment: async (id) => {
        try {
            const data = await fs.readFile(file);
            const tools = JSON.parse(data);
            const existingTools = tools.filter((tool) => tool.id !== id);
            const selectedTool = tools.find((tool) => tool.id === id);
            selectedTool.quantity++;
            existingTools.push(selectedTool);
            await fs.writeFile(file, JSON.stringify(existingTools));
        } catch (err) {
            return new FileError(
                500,
                `There's an error with decrementing ${tool.name}.`,
            );
        }
    },
    update: async (tool) => {
        try {
            const data = await fs.readFile(file);
            const tools = JSON.parse(data);
            const existingTools = tools.filter(
                (existingTool) => existingTool.id !== tool.id);
            existingTools.push(tool);
            await fs.writeFile(file, JSON.stringify(existingTools));
        } catch (err) {
            return new FileError(
                500,
                `There's an error with updating a tool with ID: ${too.id}.`,
            );
        }
    },
};
