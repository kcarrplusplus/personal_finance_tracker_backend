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
    const inputTransaction = 'INSERT INTO transactions(card_id, date_of_transaction, description, category, transaction_type, amount) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = ['1', '2021-03-02', 'Gelato at Vinnies', 'Food & Drink', 'DEBIT', 550];
    pool
        .query(inputTransaction, values)
        .then(res => {
            console.log(res.rows[0]);
        })
        .catch(e => console.log(e.stack));
}

module.exports = {
    getUsers,
    postTransaction
};