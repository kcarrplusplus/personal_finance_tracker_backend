const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_DB_PASSWORD,
    port: process.env.PG_PORT
});

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (err, results) => {
        if (err) {
            throw err;
        };
        res.status(200).json(results.rows);
    });
};

const postTransaction = (req, res) => {
    // create connecting card_id and account_id queries in order to make transaction insertion work
    // TODO: populate local database with card and account population.
    console.log(req.body);
    const inputTransaction = 'INSERT INTO transactions(card_id, transaction_type, description, category, amount, date_of_transaction) VALUES (CAST ($1 as float), $2, $3, $4, CAST ($5 as float), to_timestamp($6)) RETURNING *';
    let values = req.body;
    values.date_of_transaction = Date.now() / 1000.0;
    console.log(values);
    pool
        .query(inputTransaction, Object.values(values))
        .then(res => {
            console.log(res.rows[0]);
        })
        .catch(e => console.log(e.stack));
}

module.exports = {
    getUsers,
    postTransaction
};