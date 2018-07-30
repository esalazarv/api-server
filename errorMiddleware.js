module.exports = (req, res, next) => {
    if (req.url.indexOf('_error_') !== -1) {
        res.status(403);
    }
    next()
};