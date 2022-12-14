import db from '../../../database/index.js'

export default async (req, res) => {

    if (req.method === 'POST') {
        let question = req.body.answer
        let user = req.body.userID

        let result = await db.query(`
        INSERT INTO "public"."questionnaire_intellect" ("question","usernumberID")
        VALUES ($1,$2) RETURNING *`,
            [question, user])
        res.json(result.rows[0])
    }
}