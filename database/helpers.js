import Tool from './methods';

export const generateId = async (name) => {
    const letter = name[0].toUpperCase();
    const tools = await Tool.all();
    const latestId = tools
        .filter((tool) => tool.id[0] === letter)
        .map((tool) => tool.id.replace(/^\D/, ''))
        .reduce((a, b) => Math.max(a, b));
    if (!latestId) {
        return `${letter}00`;
    }
    return `${letter}${latestId + 1}`
};

export const formatName = (name) => {
    return name
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ');
};
