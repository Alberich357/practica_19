var mongoose = require("mongoose");

(async () => {
  try {
    const db = await mongoose.connect("link de mongoDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb is connected to", db.connection.host);
  } catch (error) {
    console.error(error);
  }
})();