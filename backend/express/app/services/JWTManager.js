// Thực hiện xác thực và tạo token
export function generateToken(user) {
    // Định nghĩa payload cho JWT, ví dụ như thông tin user
    const payload = {
        // userId: user.id,
        // email: user.email
    };
    // Tạo JWT token với payload và secret key
    const token = jwt.sign(payload, 'your_secret_key', { expiresIn: '1h' });
    return token;
}
