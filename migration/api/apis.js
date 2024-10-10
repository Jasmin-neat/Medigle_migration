var mysql = require("mysql");

var srcConnection = mysql.createConnection({
  host: process.env.db_post,
  user: process.env.db_user,
  password: process.env.db_password,
  database: "newmedigle",
});

exports.facilities = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 100;
  const offset = limit * (page - 1);

  srcConnection.query(
    "SELECT COUNT(*) AS total FROM facilities",
    (error, countResults) => {
      if (error) {
        console.error("Error executing count query:", error);
        return res.status(500).json({ error: "Database query failed" });
      }

      const totalCount = countResults[0].total;

      srcConnection.query(
        `
        SELECT 
          f.*, 
          c.contract_status 
        FROM 
          facilities f
        JOIN 
          contracts c ON f.id = c.facility_id
        LIMIT ? OFFSET ?
        `,
        [limit, offset],
        (error, results) => {
          if (error) {
            console.error("Error executing query:", error);
            return res.status(500).json({ error: "Database query failed" });
          }
          const response = {
            data: results,
            total: totalCount ? totalCount : 0,
          };
          res.json(response);
        }
      );
    }
  );
};

exports.facilityDetail = async (req, res) => {
  const id = parseInt(req.query.id);
  srcConnection.query(
    "SELECT * FROM facilities WHERE id = ?",
    [id],
    (error, results) => {
      if (error) {
        console.error("Error fetching data: ", error);
        res.status(500).send("Error fetching data.");
      } else {
        res.status(200).json(results);
      }
    }
  );
};

exports.contractDetail = async (req, res) => {
  const id = parseInt(req.query.id);
  srcConnection.query(
    "SELECT * FROM contracts WHERE facility_id = ?",
    [id],
    (error, results) => {
      if (error) {
        console.error("Error fetching data: ", error);
        res.status(500).send("Error fetching data.");
      } else {
        res.status(200).json(results);
      }
    }
  );
};

exports.userData = async (req, res) => {
  const id = parseInt(req.query.id);
  srcConnection.query(
    "SELECT * FROM users WHERE facility_id = ?",
    [id],
    (error, results) => {
      if (error) {
        console.error("Error fetching data: ", error);
        res.status(500).send("Error fetching data.");
      } else {
        res.status(200).json(results);
      }
    }
  );
};

exports.userDetail = async (req, res) => {
  const id = parseInt(req.query.id);
  srcConnection.query(
    "SELECT * FROM users WHERE id = ?",
    [id],
    (error, results) => {
      if (error) {
        console.error("Error fetching data: ", error);
        res.status(500).send("Error fetching data.");
      } else {
        res.status(200).json(results);
      }
    }
  );
};
