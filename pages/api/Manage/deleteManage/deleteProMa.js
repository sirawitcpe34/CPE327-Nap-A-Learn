import db from '../../../../database/index.js'

export default async (req, res) => {

    let professworkshopID = req.headers.professworkshopid
    if (req.method === 'DELETE') {
        let result = await db.query(`
            DELETE FROM "public"."professional_workshop" WHERE "professworkshopID" = $1
        `, [professworkshopID])
        res.json(result.rows)
    }
}