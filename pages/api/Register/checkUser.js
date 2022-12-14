import db from '../../../database/index.js'

export default async function handler(req, res) {
    if (req.method == "POST") {
        let result = await db.query('SELECT * FROM "public"."user_information" WHERE username = $1'
            , [req.body.username])

        if (result.rows.length == 0) {
            res.send("Username not found")
        }
        else {
            res.json(result.rows[0])
        }
    }
}