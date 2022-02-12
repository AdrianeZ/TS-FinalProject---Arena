import {createPool} from "mysql2/promise";


const pool = createPool({
    host: "localhost",
    database: "megak_arena",
    user: "AdrianeZ",
    password: "brutusex12",
    namedPlaceholders: true,
    decimalNumbers: true
});


pool.on("connection", (connection => console.log("Udało się połączyć z baza danych")));

export {pool};

