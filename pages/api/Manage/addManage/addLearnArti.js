import db from '../../../../database/index.js'

export default async (req, res) => {
    const { topic, forskill, url, content } = req.body

    if (req.method == "POST") {
        if (topic && forskill && url && content) {
            let result = await db.query(`INSERT INTO "public"."learning_article" ("topic", "forskillID"
                            , "url", "content") VALUES ($1, $2, $3, $4) RETURNING *`,
                [topic, forskill, url, content])

            res.json(result.rows[0])
        }
        else
            res.send('Register failed')
    }
}