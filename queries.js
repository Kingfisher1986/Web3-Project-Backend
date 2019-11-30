const Pool = require('pg').Pool
const pool = new Pool({
    user: 'jan',
    host: 'localhost',
    database: 'web3',
    password: 'password',
    port: 5432,
});

const getProjects = (request, response) => {
    pool.query('SELECT * FROM project', (error, results) => {
        if (error) {
            throw error;
        }
        response.header("Access-Control-Allow-Headers", 'Authorization, Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
        response.status(200).json(results.rows);
    });
}

const createProject = (request, response) => {
    pool.query('INSERT INTO project(name) VALUES ($1) RETURNING *', [JSON.parse(request.body.data)], (error, results) => {
        if (error) {
            throw error;
        }
        response.header("Access-Control-Allow-Headers", 'Authorization, Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
        response.status(200).send(results);
    })
}

const getIssues = (request, response) => {
    pool.query('SELECT * FROM issue', (error, results) => {
        if (error) {
            throw error;
        }
        response.header("Access-Control-Allow-Headers", 'Authorization, Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
        response.status(200).json(results.rows);
    });
}

const createIssue = (request, response) => {
    let issue = JSON.parse(request.body.data);
    
    pool.query('INSERT INTO issue(project_id, name, date, priority, done) VALUES ($1,$2,$3,$4,$5) RETURNING *', [issue.project_id,issue.name,issue.date,issue.priority,issue.done], (error, results) => {
        if (error) {
            throw error;
        }
        response.header("Access-Control-Allow-Headers", 'Authorization, Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
        response.status(200).send(results);
    })
}

const deleteIssue = (request, response) => {
    let id = request.body.id;
    console.log(request.body.id);
    
    pool.query('DELETE FROM issue WHERE issue_id = $1 RETURNING *', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(results);
    })
  }

module.exports = {
    getProjects,
    createProject,
    getIssues,
    createIssue,
    deleteIssue
}