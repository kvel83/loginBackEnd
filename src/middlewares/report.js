const report = (req, res, next) => {
    console.log(`Endpoint solicitado: ${req.method} ${req.url}`);
    next();
};

module.exports = report;