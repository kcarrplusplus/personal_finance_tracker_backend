user
- user_id

accounts
- account_id
- fk: user_id
- account_type


card
- card_id
- fk: acount_id
- card_type
- current_balance
- availble_credit
- next_payment_due
- minimum_payment_due

transactions
- trxn_api
- fk: card_id
- transaction_type
- date_of_transaction
- description
- category
- amount
- balance (optional)