import db from '../../../database/index.js'

export default async (req, res) => {
    let learningarticleID = req.query.learningarticleID
    if (req.method === 'GET') {
        let learningarticleIDData = await db.query(`
        SELECT "learningarticleID","topic","url","content" FROM "public"."learning_article" WHERE "learningarticleID" = $1`
            , [learningarticleID])
        res.json(learningarticleIDData.rows[0])
    }
}