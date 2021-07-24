const sql = require("./db.js");

// constructor
const Examination = function(examination) {
  this.email = examination.email;
  this.name = examination.name;
  this.nic = examination.nic;
  this.subject = examination.subject;
};

Examination.create = (newExamination, result) => {
  sql.query("INSERT INTO examination SET ?", newExamination, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created examination: ", { id: res.insertId, ...newExamination });
    result(null, { id: res.insertId, ...newExamination });
  });
};

Examination.findById = (id, result) => {
  sql.query(`SELECT * FROM examination WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found examination: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Examination with the id
    result({ kind: "not_found" }, null);
  });
};

Examination.getAll = result => {
  sql.query("SELECT * FROM examination", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("examination: ", res);
    result(null, res);
  });
};

Examination.updateById = (id, examination, result) => {
  sql.query(
    "UPDATE examination SET name = ?, email = ?, nic = ?, subject = ? WHERE id = ?",
    [examination.name, examination.email, examination.nic,examination.subject, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Examination with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated examination: ", { id: id, ...examination });
      result(null, { id: id, ...examination });
    }
  );
};

Examination.remove = (id, result) => {
  sql.query("DELETE FROM examination WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Examination with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted examination with id: ", id);
    result(null, res);
  });
};

Examination.removeAll = result => {
  sql.query("DELETE FROM examination", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} examination`);
    result(null, res);
  });
};

module.exports = Examination;