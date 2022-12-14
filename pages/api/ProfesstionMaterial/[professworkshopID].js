import db from '../../../database/index.js'

export default async (req, res) => {
    let professworkshopID = req.query.professworkshopID
    if (req.method === 'GET') {
        let professworkshopIDData = await db.query(`
        SELECT "professworkshopID","topic","url","content" FROM "public"."professional_workshop" WHERE "professworkshopID" = $1`
            , [professworkshopID])
        res.json(professworkshopIDData.rows[0])
    }
}