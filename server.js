const express = require('express');
<<<<<<< HEAD
const connectDB = require('./config/db.js');

const app = express();
connectDB();
=======

const app = express();
>>>>>>> e5d2996aca6e114aa108c242eecaa48abf744fcb

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API RUNNING'));

<<<<<<< HEAD
//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

=======
>>>>>>> e5d2996aca6e114aa108c242eecaa48abf744fcb
app.listen(PORT, () => console.log(`Server Listening on Port: ${PORT}`));
