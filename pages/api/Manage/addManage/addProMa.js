import db from '../../../../database/index.js'

export default async (req, res) => {
    const { topic, url, content } = req.body
    
    if (req.method == "POST") {
        if (topic && url && content) {
            let result = await db.query(`INSERT INTO "public"."professional_workshop" ("topic", "url", "content") 
                            VALUES ($1, $2, $3) RETURNING *`,
                [topic, url, content])

            res.json(result.rows[0])
        }
        else
            res.send('Register failed')
    }
}