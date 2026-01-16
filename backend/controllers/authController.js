const User = require('../models/User');
const jwt = require('jsonwebtoken');

// @desc    Login de usuario (Soporta Email o Username)
exports.login = async (req, res) => {
    // Cambiamos 'email' por 'identifier' para que sea más flexible
    const { identifier, password } = req.body;

    // Validación básica de entrada
    if (!identifier || !password) {
        return res.status(400).json({ msg: 'Por favor ingrese todos los campos' });
    }

    try {
        // 1. Buscamos por Email O Username y que esté Activo
        let user = await User.findOne({
            $or: [
                { email: identifier.toLowerCase() },
                { username: identifier }
            ],
            activo: true
        });

        if (!user) {
            return res.status(400).json({ msg: 'Credenciales inválidas o cuenta desactivada' });
        }

        // 2. Comparamos la contraseña usando el método del modelo
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        // 3. Verificación de seguridad para el JWT_SECRET
        if (!process.env.JWT_SECRET) {
            console.error('❌ ERROR: JWT_SECRET no está definido en el archivo .env');
            return res.status(500).json({ msg: 'Error de configuración en el servidor' });
        }

        // 4. Generar el Payload
        const payload = {
            user: { id: user.id }
        };

        // 5. Firmar el Token
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '8h' },
            (err, token) => {
                if (err) throw err;
                
                // Respuesta exitosa
                res.json({
                    token,
                    user: {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        nombre: user.nombre
                    }
                });
            }
        );

    } catch (err) {
        console.error('Error en Login:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

// @desc    Logout
exports.logout = async (req, res) => {
    res.json({ msg: 'Sesión cerrada correctamente' });
};