import FileError from '../utils/FileError';

export default (err, res, req, next) => {
    let statusCode = 500;

    if (err instanceof FileError) {
        statusCode = err.statusCode;
        console.error(err.message);
    } else {
        console.error(err);
    };

    return res.status(statusCode).send({status: 'error'});
};
