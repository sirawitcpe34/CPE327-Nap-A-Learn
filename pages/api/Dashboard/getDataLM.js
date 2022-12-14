import db from '../../../database/index.js'

export default async (req, res) => {
    if (req.method === 'GET') {
        let result = await db.query(`SELECT "learningmaterialID","url","topic","content" FROM "public"."learning_material"
            ORDER BY "learningmaterialID" DESC LIMIT 4`)
        res.json(result.rows)
    }
}