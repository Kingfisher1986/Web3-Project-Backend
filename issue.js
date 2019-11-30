class Issue {
    constructor(issue_id, project_id, name, date, priority, done) {
        this.issue_id = issue_id;
        this.project_id = project_id;
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.done = done;
    }
}
module.exports = Issue;