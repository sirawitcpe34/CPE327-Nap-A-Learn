import db from '../../../database/index.js'
import { decode } from 'js-base64'

export default async (req, res) => {
    let page = req.headers.page
    let search = decode(req.headers.search || '').toLowerCase()
    if (req.method === 'GET') {
        if (page == 0) {
            let result = await db.query(`SELECT "usernumberID","firstname","lastname","dateofbirth","telephonenumber","url" FROM "public"."user_information"`)
            res.json(result.rows)
        }
        else {
            let result = await db.query(`SELECT "usernumberID","firstname","lastname","dateofbirth","telephonenumber","url",CEILING(COUNT(*) OVER()/10) as page_amount FROM "public"."user_information"
            WHERE (LOWER(CONCAT("firstname")) LIKE '%${search}%')
            ORDER BY "usernumberID" ASC LIMIT 10 OFFSET $1 `, [(page - 1) * 10])
            res.json(result.rows)
        }
    }
}