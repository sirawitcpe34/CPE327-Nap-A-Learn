import db from '../../../database/index.js'

export default async (req, res) => {
    if (req.method === 'GET') {
        let result = await db.query(`SELECT "professarticleID","url","topic","content" FROM "public"."professional_article"
            ORDER BY "professarticleID" DESC LIMIT 4`)
        res.json(result.rows)
    }
}