import db from '../../../database/index.js'
import { decode } from 'js-base64'

export default async (req, res) => {
    let page = req.headers.page
    let search = decode(req.headers.search || '').toLowerCase()
    let filter1 = decode(req.headers.filter1 || '').toLowerCase()
    let filter2 = decode(req.headers.filter2 || '').toLowerCase()
    let filter3 = decode(req.headers.filter3 || '').toLowerCase()
    let filter4 = decode(req.headers.filter4 || '').toLowerCase()
    let filter5 = decode(req.headers.filter5 || '').toLowerCase()
    let filter6 = decode(req.headers.filter6 || '').toLowerCase()
    let filter7 = decode(req.headers.filter7 || '').toLowerCase()
    let filter8 = decode(req.headers.filter8 || '').toLowerCase()
    let filter9 = decode(req.headers.filter9 || '').toLowerCase()
    let filter10 = decode(req.headers.filter10 || '').toLowerCase()
    let filter11 = decode(req.headers.filter11 || '').toLowerCase()
    let filter12 = decode(req.headers.filter12 || '').toLowerCase()
    let filter13 = decode(req.headers.filter13 || '').toLowerCase()

    if (req.method === 'GET') {
        if (page == 0) {
            let result = await db.query(`SELECT "learningmaterialID","url","topic","content" FROM "public"."learning_material"`)
            res.json(result.rows)
        }
        else {
            if (filter13 != '') {
                let result = await db.query(`SELECT "learningmaterialID","url","topic","content","forskillID",CEILING(COUNT(*) OVER()/8) as page_amount FROM "public"."learning_material"
            WHERE (LOWER(CONCAT("topic")) LIKE '%${search}%') 
            AND ((LOWER(CONCAT("forskillID")) LIKE '%${filter1}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter2}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter3}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter4}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter5}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter6}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter7}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter8}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter9}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter10}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter11}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter12}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter13}%'))
            ORDER BY "learningmaterialID" ASC LIMIT 8 OFFSET $1 `, [(page - 1) * 8])
                res.json(result.rows)
            }
            else if (filter12 != '') {
                let result = await db.query(`SELECT "learningmaterialID","url","topic","content","forskillID",CEILING(COUNT(*) OVER()/8) as page_amount FROM "public"."learning_material"
            WHERE (LOWER(CONCAT("topic")) LIKE '%${search}%') 
            AND ((LOWER(CONCAT("forskillID")) LIKE '%${filter1}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter2}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter3}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter4}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter5}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter6}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter7}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter8}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter9}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter10}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter11}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter12}%'))
            ORDER BY "learningmaterialID" ASC LIMIT 8 OFFSET $1 `, [(page - 1) * 8])
                res.json(result.rows)
            }
            else if (filter11 != '') {
                let result = await db.query(`SELECT "learningmaterialID","url","topic","content","forskillID",CEILING(COUNT(*) OVER()/8) as page_amount FROM "public"."learning_material"
            WHERE (LOWER(CONCAT("topic")) LIKE '%${search}%') 
            AND ((LOWER(CONCAT("forskillID")) LIKE '%${filter1}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter2}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter3}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter4}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter5}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter6}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter7}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter8}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter9}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter10}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter11}%'))
            ORDER BY "learningmaterialID" ASC LIMIT 8 OFFSET $1 `, [(page - 1) * 8])
                res.json(result.rows)
            }
            else if (filter10 != '') {
                let result = await db.query(`SELECT "learningmaterialID","url","topic","content","forskillID",CEILING(COUNT(*) OVER()/8) as page_amount FROM "public"."learning_material"
            WHERE (LOWER(CONCAT("topic")) LIKE '%${search}%') 
            AND ((LOWER(CONCAT("forskillID")) LIKE '%${filter1}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter2}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter3}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter4}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter5}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter6}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter7}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter8}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter9}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter10}%'))
            ORDER BY "learningmaterialID" ASC LIMIT 8 OFFSET $1 `, [(page - 1) * 8])
                res.json(result.rows)
            }
            else if (filter9 != '') {
                let result = await db.query(`SELECT "learningmaterialID","url","topic","content","forskillID",CEILING(COUNT(*) OVER()/8) as page_amount FROM "public"."learning_material"
            WHERE (LOWER(CONCAT("topic")) LIKE '%${search}%') 
            AND ((LOWER(CONCAT("forskillID")) LIKE '%${filter1}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter2}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter3}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter4}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter5}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter6}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter7}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter8}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter9}%'))
            ORDER BY "learningmaterialID" ASC LIMIT 8 OFFSET $1 `, [(page - 1) * 8])
                res.json(result.rows)
            }
            else if (filter8 != '') {
                let result = await db.query(`SELECT "learningmaterialID","url","topic","content","forskillID",CEILING(COUNT(*) OVER()/8) as page_amount FROM "public"."learning_material"
            WHERE (LOWER(CONCAT("topic")) LIKE '%${search}%') 
            AND ((LOWER(CONCAT("forskillID")) LIKE '%${filter1}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter2}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter3}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter4}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter5}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter6}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter7}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter8}%'))
            ORDER BY "learningmaterialID" ASC LIMIT 8 OFFSET $1 `, [(page - 1) * 8])
                res.json(result.rows)
            }
            else if (filter7 != '') {
                let result = await db.query(`SELECT "learningmaterialID","url","topic","content","forskillID",CEILING(COUNT(*) OVER()/8) as page_amount FROM "public"."learning_material"
            WHERE (LOWER(CONCAT("topic")) LIKE '%${search}%') 
            AND ((LOWER(CONCAT("forskillID")) LIKE '%${filter1}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter2}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter3}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter4}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter5}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter6}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter7}%'))
            ORDER BY "learningmaterialID" ASC LIMIT 8 OFFSET $1 `, [(page - 1) * 8])
                res.json(result.rows)
            }
            else if (filter6 != '') {
                let result = await db.query(`SELECT "learningmaterialID","url","topic","content","forskillID",CEILING(COUNT(*) OVER()/8) as page_amount FROM "public"."learning_material"
            WHERE (LOWER(CONCAT("topic")) LIKE '%${search}%') 
            AND ((LOWER(CONCAT("forskillID")) LIKE '%${filter1}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter2}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter3}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter4}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter5}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter6}%'))
            ORDER BY "learningmaterialID" ASC LIMIT 8 OFFSET $1 `, [(page - 1) * 8])
                res.json(result.rows)
            }
            else if (filter5 != '') {
                let result = await db.query(`SELECT "learningmaterialID","url","topic","content","forskillID",CEILING(COUNT(*) OVER()/8) as page_amount FROM "public"."learning_material"
            WHERE (LOWER(CONCAT("topic")) LIKE '%${search}%') 
            AND ((LOWER(CONCAT("forskillID")) LIKE '%${filter1}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter2}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter3}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter4}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter5}%'))
            ORDER BY "learningmaterialID" ASC LIMIT 8 OFFSET $1 `, [(page - 1) * 8])
                res.json(result.rows)
            }
            else if (filter4 != '') {
                let result = await db.query(`SELECT "learningmaterialID","url","topic","content","forskillID",CEILING(COUNT(*) OVER()/8) as page_amount FROM "public"."learning_material"
            WHERE (LOWER(CONCAT("topic")) LIKE '%${search}%') 
            AND ((LOWER(CONCAT("forskillID")) LIKE '%${filter1}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter2}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter3}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter4}%'))
            ORDER BY "learningmaterialID" ASC LIMIT 8 OFFSET $1 `, [(page - 1) * 8])
                res.json(result.rows)
            }
            else if (filter3 != '') {
                let result = await db.query(`SELECT "learningmaterialID","url","topic","content","forskillID",CEILING(COUNT(*) OVER()/8) as page_amount FROM "public"."learning_material"
            WHERE (LOWER(CONCAT("topic")) LIKE '%${search}%') 
            AND ((LOWER(CONCAT("forskillID")) LIKE '%${filter1}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter2}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter3}%'))
            ORDER BY "learningmaterialID" ASC LIMIT 8 OFFSET $1 `, [(page - 1) * 8])
                res.json(result.rows)
            }
            else if (filter2 != '') {
                let result = await db.query(`SELECT "learningmaterialID","url","topic","content","forskillID",CEILING(COUNT(*) OVER()/8) as page_amount FROM "public"."learning_material"
            WHERE (LOWER(CONCAT("topic")) LIKE '%${search}%') 
            AND ((LOWER(CONCAT("forskillID")) LIKE '%${filter1}%')
            OR (LOWER(CONCAT("forskillID")) LIKE '%${filter2}%'))
            ORDER BY "learningmaterialID" ASC LIMIT 8 OFFSET $1 `, [(page - 1) * 8])
                res.json(result.rows)
            }
            else if (filter1 != '') {
                let result = await db.query(`SELECT "learningmaterialID","url","topic","content","forskillID",CEILING(COUNT(*) OVER()/8) as page_amount FROM "public"."learning_material"
            WHERE (LOWER(CONCAT("topic")) LIKE '%${search}%') 
            AND (LOWER(CONCAT("forskillID")) LIKE '%${filter1}%')
            ORDER BY "learningmaterialID" ASC LIMIT 8 OFFSET $1 `, [(page - 1) * 8])
                res.json(result.rows)
            }
            else {
                let result = await db.query(`SELECT "learningmaterialID","url","topic","content","forskillID",CEILING(COUNT(*) OVER()/8) as page_amount FROM "public"."learning_material"
            WHERE (LOWER(CONCAT("topic")) LIKE '%${search}%') 
            ORDER BY "learningmaterialID" ASC LIMIT 8 OFFSET $1 `, [(page - 1) * 8])
                res.json(result.rows)
            }
        }
    }
}