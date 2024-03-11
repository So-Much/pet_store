// Middleware để xác thực token
function authenticateToken(req, res, next) {
    // Lấy header 'Authorization' từ request
    const authHeader = req.headers['authorization'];
    // Token được truyền trong header 'Authorization' theo format 'Bearer token'
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return res.sendStatus(401); // Không có token, trả về lỗi 401 (Unauthorized)
    }

    // Xác thực token sử dụng secret key
    jwt.verify(token, 'your_secret_key', (err, user) => {
        if (err) {
            return res.sendStatus(403); // Token không hợp lệ, trả về lỗi 403 (Forbidden)
        }
        req.user = user; // Lưu thông tin user từ token vào request để sử dụng trong các middleware sau
    });
}