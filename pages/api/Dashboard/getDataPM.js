import db from '../../../database/index.js'

export default async (req, res) => {
    if (req.method === 'GET') {
        let result = await db.query(`SELECT "professworkshopID","url","topic","content" FROM "public"."professional_workshop"
            ORDER BY "professworkshopID" DESC LIMIT 4`)
        res.json(result.rows)
    }
}