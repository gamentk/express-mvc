import Prefix from '../models/prefix.model';

export function getPrefix(req, res) {
    let prefix = new Prefix();

    prefix.getData((isError, results) => {
        if (isError) throw results;

        res.status(200).json(results);
    });
}