import db from '../../../database/index.js'
import { decode } from 'js-base64'

export default async (req, res) => {
    let page = req.headers.page
    let search = decode(req.headers.search || '').toLowerCase()
    if (req.method === 'GET') {
        if (page == 0) {
            let result = await db.query(`SELECT "professarticleID","url","topic","content" FROM "public"."professional_article"`)
            res.json(result.rows)
        }
        else {
            let result = await db.query(`SELECT "professarticleID","url","topic","content",CEILING(COUNT(*) OVER()/8) as page_amount FROM "public"."professional_article"
            WHERE (LOWER(CONCAT("topic")) LIKE '%${search}%')
            ORDER BY "professarticleID" ASC LIMIT 8 OFFSET $1 `, [(page - 1) * 8])
            res.json(result.rows)
        }
    }
}