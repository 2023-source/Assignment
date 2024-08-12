const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email,password)
    // console.log(User);
    console.log(User.find());
    const user = await User.findOne({ email });
    // console.log(user);

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
};

const createUser = async (req, res) => {
    const { email, password, role } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        email,
        password,
        role,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
};

module.exports = { login, createUser };
