import db from '../../../database/index.js'

export default async function handler(req, res) {
    const NALKey = 'napalearnkey'
    if (req.method == "POST") {
        let result = await db.query('SELECT * FROM "public"."user_information" WHERE id = $1'
            , [req.body.id])

        if (result.rows.length == 0) {
            res.send("ID not found")
        }
        else {
            res.json(result.rows[0])
        }
    }
}