import db from '../../../../database/index.js'

export default async (req, res) => {

    let professarticleID = req.headers.professarticleid
    if (req.method === 'DELETE') {
        let result = await db.query(`
            DELETE FROM "public"."professional_article" WHERE "professarticleID" = $1
        `, [professarticleID])
        res.json(result.rows)
    }
}