const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');

//  We add this middleware only in front of the routes where authentication is required

module.exports = (req, res, next) => {
    // This next check is just for the browser to get to the proper HTTP verb

    if (req.method === 'OPTIONS') {
        return next();
    }

    /* We are expecting to have in our headers something like:
     Authorization: "JWT [insertTokenHere]" */

    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            throw new Error('Authentication failed!');
        }

        /* We pass the userId in case any other middleware is interested.
       It will be in the userData property of the req object. */

        const decodedToken = jwt.verify(token, process.env.TOKEN_ENCRYPTION);
        req.userData = { userId: decodedToken.userId };
        next();

        /* In case we get to implement admin routes,
        we could check if the userId is equal to the admin's ID (could use the find/findIndex method on an array of adminId's) in every route needed, or create a similar middleware to this one where we check for userId in it and only put it in front of the admin routes
    */
    } catch (err) {
        return next(new HttpError('Authentification failed', 403));
    }
};
