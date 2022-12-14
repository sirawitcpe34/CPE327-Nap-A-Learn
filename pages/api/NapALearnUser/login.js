import db from '../../../database/index.js'
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
    const NALKey = 'napalearnkey'
    if (req.method == "POST") {
        let result = await db.query('SELECT * FROM "public"."user_information" WHERE username = $1'
            , [req.body.username])
        if (result.rows.length == 0) {
            res.send("Username not found")
        }
        else {
            if (req.body.password == result.rows[0].password) {
                console.log(req.body.password);
                let token = jwt.sign({
                    username: result.rows[0].username,
                    usernumberID: result.rows[0].usernumberID,
                    userrole: result.rows[0].userrole
                }, NALKey, {
                    expiresIn: '6h'
                })
                result.rows[0].token = token
                res.json(result.rows[0])
                console.log(result.rows[0].token);
            }
            else {
                res.send("Wrong Password")
            }
        }
    }
}