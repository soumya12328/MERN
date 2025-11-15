const express = require('express'); // Import the Express library
const UserRouter = require('./routers/userRouter');
const ProductRouter = require ('./routers/productRouter');
const app = express(); // Create an Express application

const PORT = 5000; // Define the port number

// Middleware - 
app.use(express.json()); //Parse JSON request bodies
app.use('/user', UserRouter);
app.use('/product', ProductRouter);

// Routing
// app.get('/', (req, res) => {
//     res.send("Hello from Backend")
// });

//getadd route 
// app.get('/add', (req, res) => {
//     res.send("Hello from Add Route")
// });

// getall route
// app.get('/all', (req, res) => {
//     res.send("Hello from All Route")
// });

// delete route
// app.get('/delete', (req, res) => {
//     res.send("Hello from Delete Route")
// });

// update route
// app.get('/update', (req, res) => {
//     res.send("Hello from Update Route")
// });


app.listen(PORT, () => {
    console.log("Server is running on port -" + PORT);
})


