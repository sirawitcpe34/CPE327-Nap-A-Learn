import db from '../../../../database/index.js'

export default async (req, res) => {
    let usernumberID = req.query.usernumberID
    if (req.method === 'GET') {
        let response1 = await db.query(`
        SELECT "question"[1] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response2 = await db.query(`
        SELECT "question"[2] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response3 = await db.query(`
        SELECT "question"[3] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response4 = await db.query(`
        SELECT "question"[4] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response5 = await db.query(`
        SELECT "question"[5] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response6 = await db.query(`
        SELECT "question"[6] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response7 = await db.query(`
        SELECT "question"[7] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response8 = await db.query(`
        SELECT "question"[8] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response9 = await db.query(`
        SELECT "question"[9] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response10 = await db.query(`
        SELECT "question"[10] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response11 = await db.query(`
        SELECT "question"[11] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response12 = await db.query(`
        SELECT "question"[12] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response13 = await db.query(`
        SELECT "question"[13] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response14 = await db.query(`
        SELECT "question"[14] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response15 = await db.query(`
        SELECT "question"[15] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response16 = await db.query(`
        SELECT "question"[16] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response17 = await db.query(`
        SELECT "question"[17] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response18 = await db.query(`
        SELECT "question"[18] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response19 = await db.query(`
        SELECT "question"[19] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let response20 = await db.query(`
        SELECT "question"[20] FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])


        res.json({
            response1: (response1.rows[0] != null) ? [(response1.rows[0].question == true) ? 0 : 1] : -1,
            response2: (response2.rows[0] != null) ? [(response2.rows[0].question == true) ? 0 : 1] : -1,
            response3: (response3.rows[0] != null) ? [(response3.rows[0].question == true) ? 0 : 1] : -1,
            response4: (response4.rows[0] != null) ? [(response4.rows[0].question == true) ? 0 : 1] : -1,
            response5: (response5.rows[0] != null) ? [(response5.rows[0].question == true) ? 0 : 1] : -1,
            response6: (response6.rows[0] != null) ? [(response6.rows[0].question == true) ? 0 : 1] : -1,
            response7: (response7.rows[0] != null) ? [(response7.rows[0].question == true) ? 0 : 1] : -1,
            response8: (response8.rows[0] != null) ? [(response8.rows[0].question == true) ? 0 : 1] : -1,
            response9: (response9.rows[0] != null) ? [(response9.rows[0].question == true) ? 0 : 1] : -1,
            response10: (response10.rows[0] != null) ? [(response10.rows[0].question == true) ? 0 : 1] : -1,
            response11: (response11.rows[0] != null) ? [(response11.rows[0].question == true) ? 0 : 1] : -1,
            response12: (response12.rows[0] != null) ? [(response12.rows[0].question == true) ? 0 : 1] : -1,
            response13: (response13.rows[0] != null) ? [(response13.rows[0].question == true) ? 0 : 1] : -1,
            response14: (response14.rows[0] != null) ? [(response14.rows[0].question == true) ? 0 : 1] : -1,
            response15: (response15.rows[0] != null) ? [(response15.rows[0].question == true) ? 0 : 1] : -1,
            response16: (response16.rows[0] != null) ? [(response16.rows[0].question == true) ? 0 : 1] : -1,
            response17: (response17.rows[0] != null) ? [(response17.rows[0].question == true) ? 0 : 1] : -1,
            response18: (response18.rows[0] != null) ? [(response18.rows[0].question == true) ? 0 : 1] : -1,
            response19: (response19.rows[0] != null) ? [(response19.rows[0].question == true) ? 0 : 1] : -1,
            response20: (response20.rows[0] != null) ? [(response20.rows[0].question == true) ? 0 : 1] : -1,
        })
    }
}