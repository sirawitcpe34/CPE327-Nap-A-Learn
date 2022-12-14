import db from '../../../database/index.js'

export default async (req, res) => {
    const { usernumberid, url } = req.body

    console.log(req.body)
    if (req.method == "POST") {
        if (url) {
            let result = await db.query(`
                UPDATE "public"."user_information" SET "url"=$1  WHERE "usernumberID" = $2 
            `, [url, usernumberid])
            res.json(result.rows[0])
        }
        else
            res.send('Update failed')
    }
}