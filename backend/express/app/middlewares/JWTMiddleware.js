const jwt = require('jsonwebtoken');

module.exports = auth = {
    authentication : (req, res, next) => {
        // Kiểm tra token trong session
        const token = req.session.token;
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(403);
                }
                req.user = decoded;
                next();
            });
        } else {
            res.status(401);
        }
    },
    authorization : (role) => {
        return (req, res, next) => {
            // Kiểm tra quyền của người dùng từ thông tin được thêm vào yêu cầu
            // Ví dụ: kiểm tra xem người dùng có quyền 'admin' không
            if (req.user && req.user.role === role) {
                next();
            } else {
                res.status(403); // Từ chối truy cập
            }
        };
    }
}
