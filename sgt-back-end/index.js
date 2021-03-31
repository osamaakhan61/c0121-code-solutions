const express = require('express');
const app = express();
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ss: {
    rejectUnathorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
    from "grades"
    `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.json(grades);
    });
});

app.post('/api/grades/', (req, res) => {
  const values = [req.body.name, req.body.course, req.body.score];
  if (!req.body || !req.body.name || !req.body.course || !req.body.score || (req.body.score > 100 || req.body.score < 1)) {
    const contentError = {
      error: 'invalid grade supplied'
    };
    res.status(400).json(contentError);
  } else {
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *`;
    const params = values;
    db.query(sql, params)
      .then(result => {
        const grade = result.rows;
        res.json(grade);
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  const values = [req.body.name, req.body.course, req.body.score, gradeId];
  if (!req.body || !req.body.name || !req.body.course || !req.body.score || !Number.isInteger(gradeId) || gradeId <= 0 || (req.body.score > 100 || req.body.score < 1)) {
    const contentError = {
      error: 'invalid grade supplied'
    };
    res.status(400).json(contentError);
  } else {
    const sql = `
      update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
      where "gradeId" = $4`;
    const params = values;
    db.query(sql, params)
      .then(result => {
        const grade = result.rowCount;
        if (grade === 0) {
          res.status(404).json({
            error: `Cannot find grade with gradeId ${gradeId}`
          });
        } else {
          res.json(grade);
        }
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    const contentError = {
      error: 'invalid grade supplied'
    };
    res.status(400).json(contentError);
  } else {
    const sql = `
      delete from "grades"
      where "gradeId" = $1`;
    const params = [gradeId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rowCount;
        if (grade === 0) {
          res.status(404).json({
            error: `Cannot find grade with gradeId ${gradeId}`
          });
        } else {
          res.status(204).json();
        }
      });
  }
});

app.listen(3000, () => {
  console.log('Listening very intently!');
});

app.use((req, res) => {
  const unexpectedError = {
    error: 'An unexpected error occurred.'
  };
  res.status(500).json(unexpectedError);
});
