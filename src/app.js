const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes');

app.use(express.json());
app.use('/students', studentRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
