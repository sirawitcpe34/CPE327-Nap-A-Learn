import db from '../../../database/index.js'

export default async (req, res) => {
    const { usernumberid, password } = req.body

    console.log(req.body)
    if (req.method == "POST") {
        if (password) {
            let result = await db.query(`
                UPDATE "public"."user_information" SET "password"=$1  WHERE "usernumberID" = $2 
            `, [password, usernumberid])
            res.json(result.rows[0])
        }
        else
            res.send('Update failed')
    }
}