import db from '../../../../database/index.js'

export default async (req, res) => {

    let learningmaterialID = req.headers.learningmaterialid
    if (req.method === 'DELETE') {
        let result = await db.query(`
            DELETE FROM "public"."learning_material" WHERE "learningmaterialID" = $1
        `, [learningmaterialID])
        res.json(result.rows)
    }
}