const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const checkAuth = (req, res, next) => {
    // using cookiesparser
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({
                status: 'fail',
                message: 'You are not logged in! Please log in to get access.',
            });
        }
        next();
    } catch (error) {
        console.error('Error during authentication:', error);
        return res.status(500).json({
            status: 'fail',
            message: 'Authentication error',
        });
    }
}

module.exports = checkAuth;
