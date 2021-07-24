const Examination = require("../models/student.model.js");

// Create and Save a new Examination
exports.create = (req, res) => {
  
     // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Examination
  const examination = new Examination({
    name: req.body.name,
    email: req.body.email,
    nic: req.body.nic,
    subject: req.body.subject
  });

  // Save Examination in the database
  Examination.create(examination, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Examination."
      });
    else res.send(data);
  });

};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Examination.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving examination."
          });
        else res.send(data);
      }); 
};

// Find a single Examination with a studentId
exports.findOne = (req, res) => {
    Examination.findById(req.query.studentId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Examination with id ${req.query.studentId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Examination with id " + req.query.studentId
            });
          }
        } else res.send(data);
      });
};

// Update a Examination identified by the studentId in the request
exports.update = (req, res) => {
    // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Examination.updateById(
    req.query.studentId,
    new Examination(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Examination with id ${req.query.studentId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Examination with id " + req.query.studentId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Examination with the specified studentId in the request
exports.delete = (req, res) => {

    if (!req.query.studentId) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
    }
    Examination.remove(req.query.studentId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Examination with id ${req.query.studentId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Examination with id " + req.query.studentId
            });
          }
        } else res.send({ message: `Examination was deleted successfully!` });
      });
};

// Delete all Examinations from the database.
exports.deleteAll = (req, res) => {
    exports.deleteAll = (req, res) => {
        Examination.removeAll((err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while removing all records."
            });
          else res.send({ message: `All records were deleted successfully!` });
        });
      };
};