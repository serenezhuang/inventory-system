import path from 'path';

export const renderIndexFile = (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, '../../dist/static'),
    });
};
