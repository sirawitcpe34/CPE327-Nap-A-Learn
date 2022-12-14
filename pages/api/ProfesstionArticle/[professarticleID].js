import db from '../../../database/index.js'

export default async (req, res) => {
    let professarticleID = req.query.professarticleID
    if (req.method === 'GET') {
        let professarticleIDData = await db.query(`
        SELECT "professarticleID","topic","url","content" FROM "public"."professional_article" WHERE "professarticleID" = $1`
            , [professarticleID])
        res.json(professarticleIDData.rows[0])
    }
}