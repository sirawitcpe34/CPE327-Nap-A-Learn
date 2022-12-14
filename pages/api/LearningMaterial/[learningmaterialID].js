import db from '../../../database/index.js'

export default async (req, res) => {
    let learningmaterialID = req.query.learningmaterialID
    if (req.method === 'GET') {
        let learningmaterialIDData = await db.query(`
        SELECT "learningmaterialID","topic","url","content" FROM "public"."learning_material" WHERE "learningmaterialID" = $1`
            , [learningmaterialID])
        res.json(learningmaterialIDData.rows[0])
    }
}