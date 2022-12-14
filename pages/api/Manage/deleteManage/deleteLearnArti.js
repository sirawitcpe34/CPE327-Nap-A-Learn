import db from '../../../../database/index.js'

export default async (req, res) => {

    let learningarticleID = req.headers.learningarticleid
    if (req.method === 'DELETE') {
        let result = await db.query(`
            DELETE FROM "public"."learning_article" WHERE "learningarticleID" = $1
        `, [learningarticleID])
        res.json(result.rows)
    }
}