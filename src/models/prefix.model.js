import { connection } from '../db.config';

class Prefix {
    prf_id
    prf_name

    getData(cb) {
        connection.query('SELECT * FROM tbl_prefix_names', (error, results) => {
            if (error) cb(true, error);

            cb(false, results);
        });
    }
}

export default Prefix;