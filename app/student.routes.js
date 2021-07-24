module.exports = app => {
    const examination = require("../app/controllers/student.controller");
  
    // Create a new record
    app.post("/examination", examination.create);
  
    // Retrieve all details
    app.get("/examination/getAllexamination", examination.findAll);
  
    //Retrieve specific record
    app.get("/examination", examination.findOne);
  
    // Update records
    app.put("/examination", examination.update);
  
    // Delete a record
    app.delete("/examination", examination.delete);
  
    // Create a new record
    app.delete("/deleteallexaminations", examination.deleteAll);
  };