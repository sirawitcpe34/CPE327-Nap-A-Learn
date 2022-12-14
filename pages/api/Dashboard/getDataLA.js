import db from '../../../database/index.js'

export default async (req, res) => {
    if (req.method === 'GET') {
        let result = await db.query(`SELECT "learningarticleID","url","topic","content" FROM "public"."learning_article"
            ORDER BY "learningarticleID" DESC LIMIT 4`)
        res.json(result.rows)
    }
}