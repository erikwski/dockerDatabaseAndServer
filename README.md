# dockerDatabaseAndServer

Questo repository contiene un ottimo start per avere un backEnd in node per la tua app frontend.

Necessario docker e docker-compose sulla propria macchina.

## Getting Started

- Nel file init.sql vai ad inserire le query di creazione delle tabelle del DB che verranno eseguite al primo start
- Lancia il comando: ** docker-compose up **
- Ora quando modificherai i file del server node grazie al package nodemon il server si riavvierá in automatico


## Credenziali DB

Il database girerá sulla porta 5432 con le seguenti credenziali

USER: myuser

PASSWORD: mypassword

DB: mydatabase

Tutte queste info sono modificabili nel file ** docker-compose.yml **
