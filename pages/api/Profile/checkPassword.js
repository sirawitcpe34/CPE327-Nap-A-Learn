import db from '../../../database/index.js'

export default async function handler(req, res) {
    if (req.method == "POST") {
        let result = await db.query('SELECT "password" FROM "public"."user_information" WHERE "usernumberID" = $1'
            , [req.body.usernumberid])

        if (result.rows[0].password == req.body.currentpassword) {
            res.json(result.rows[0])
        }
        else {
            res.send("Username not found")
        }
    }
}