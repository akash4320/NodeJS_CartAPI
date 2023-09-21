const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cartRouter = require("./routes/CartRoutes");

//middleware
app.use(express.json());
app.use("/api/cart", cartRouter);

// MongoDB Connect
mongoose.connect("mongodb://localhost:27017/Cart", {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then((res)=> console.log('MongoDB Connected'))
.catch((err)=> console.log('Error Connecting Mongodb'));

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;