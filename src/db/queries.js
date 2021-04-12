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

const getTransactions = async (req, res) => {
    const text = `
        SELECT us.id, accts.account_id, cd.card_type, cd.card_id, trxn.*
        FROM users us
        INNER JOIN accounts accts on us.id=accts.user_id
        INNER JOIN cards cd on accts.account_id=cd.account_id
        RIGHT JOIN transactions trxn on cd.card_id=trxn.card_id
        WHERE user_id=$1;
    `;
    const values = [1];

    try {
        const allTransactionsForUser = await pool.query(text, values);
        res.json(allTransactionsForUser.rows);
    } catch (err) {
        console.error(err.message);
    }
};

const getTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const trxn = await pool.query("SELECT * FROM transactions WHERE trxn_id = $1", [
            id
        ]);
        res.json(trxn.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
};

const postTransaction = async (req, res) => {
    // create connecting card_id and account_id queries in order to make transaction insertion work
    // TODO: populate local database with card and account population.
    try {
        const inputTransaction = 'INSERT INTO transactions(card_id, transaction_type, description, category, amount, date_of_transaction) VALUES (CAST ($1 as float), $2, $3, $4, CAST ($5 as float), to_timestamp($6)) RETURNING *';
        let values = req.body;
        values.date_of_transaction = Date.now() / 1000.0;
        const newTrxn = await pool.query(inputTransaction, Object.values(values));
        res.json(newTrxn.rows[0])
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = {
    getUsers,
    getTransaction,
    getTransactions,
    postTransaction
};