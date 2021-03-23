user
- user_id

accounts
- account_id
- fk: user_id
- account_type


cards
- card_id
- fk: acount_id
- card_type
- current_balance
- availble_credit
- next_payment_due
- minimum_payment_due

transactions
- pk: trxn_id
- fk: card_id
- transaction_type
- date_of_transaction
- description
- category
- amount
- balance (optional)