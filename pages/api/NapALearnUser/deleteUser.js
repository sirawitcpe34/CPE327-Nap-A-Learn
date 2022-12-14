import db from '../../../database/index.js'

export default async (req, res) => {

    let UserID = req.headers.usernumberid
    if (req.method === 'DELETE') {
        let result = await db.query(`
            DELETE FROM "public"."user_information" WHERE "usernumberID" = $1
        `, [UserID])
        res.json(result.rows)
    }
}