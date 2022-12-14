import db from '../../../../database/index.js'

export default async (req, res) => {
    let usernumberID = req.query.usernumberID
    if (req.method === 'GET') {

        let aresponse1 = await db.query(`
        SELECT "question"[1] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let aresponse2 = await db.query(`
        SELECT "question"[2] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let aresponse3 = await db.query(`
        SELECT "question"[3] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let aresponse4 = await db.query(`
        SELECT "question"[4] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let aresponse5 = await db.query(`
        SELECT "question"[5] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let aresponse6 = await db.query(`
        SELECT "question"[6] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let aresponse7 = await db.query(`
        SELECT "question"[7] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let aresponse8 = await db.query(`
        SELECT "question"[8] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let aresponse9 = await db.query(`
        SELECT "question"[9] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let aresponse10 = await db.query(`
        SELECT "question"[10] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let aresponse11 = await db.query(`
        SELECT "question"[11] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let aresponse12 = await db.query(`
        SELECT "question"[12] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let aresponse13 = await db.query(`
        SELECT "question"[13] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let aresponse14 = await db.query(`
        SELECT "question"[14] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let aresponse15 = await db.query(`
        SELECT "question"[15] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let aresponse16 = await db.query(`
        SELECT "question"[16] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let aresponse17 = await db.query(`
        SELECT "question"[17] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])

        let aresponse18 = await db.query(`
        SELECT "question"[18] FROM "public"."questionnaire_autism" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
        `, [usernumberID])


        res.json({
            aresponse1: (aresponse1.rows[0] != null) ? [(aresponse1.rows[0].question == true) ? 0 : 1] : -1,
            aresponse2: (aresponse2.rows[0] != null) ? [(aresponse2.rows[0].question == true) ? 0 : 1] : -1,
            aresponse3: (aresponse3.rows[0] != null) ? [(aresponse3.rows[0].question == true) ? 0 : 1] : -1,
            aresponse4: (aresponse4.rows[0] != null) ? [(aresponse4.rows[0].question == true) ? 0 : 1] : -1,
            aresponse5: (aresponse5.rows[0] != null) ? [(aresponse5.rows[0].question == true) ? 0 : 1] : -1,
            aresponse6: (aresponse6.rows[0] != null) ? [(aresponse6.rows[0].question == true) ? 0 : 1] : -1,
            aresponse7: (aresponse7.rows[0] != null) ? [(aresponse7.rows[0].question == true) ? 0 : 1] : -1,
            aresponse8: (aresponse8.rows[0] != null) ? [(aresponse8.rows[0].question == true) ? 0 : 1] : -1,
            aresponse9: (aresponse9.rows[0] != null) ? [(aresponse9.rows[0].question == true) ? 0 : 1] : -1,
            aresponse10: (aresponse10.rows[0] != null) ? [(aresponse10.rows[0].question == true) ? 0 : 1] : -1,
            aresponse11: (aresponse11.rows[0] != null) ? [(aresponse11.rows[0].question == true) ? 0 : 1] : -1,
            aresponse12: (aresponse12.rows[0] != null) ? [(aresponse12.rows[0].question == true) ? 0 : 1] : -1,
            aresponse13: (aresponse13.rows[0] != null) ? [(aresponse13.rows[0].question == true) ? 0 : 1] : -1,
            aresponse14: (aresponse14.rows[0] != null) ? [(aresponse14.rows[0].question == true) ? 0 : 1] : -1,
            aresponse15: (aresponse15.rows[0] != null) ? [(aresponse15.rows[0].question == true) ? 0 : 1] : -1,
            aresponse16: (aresponse16.rows[0] != null) ? [(aresponse16.rows[0].question == true) ? 0 : 1] : -1,
            aresponse17: (aresponse17.rows[0] != null) ? [(aresponse17.rows[0].question == true) ? 0 : 1] : -1,
            aresponse18: (aresponse18.rows[0] != null) ? [(aresponse18.rows[0].question == true) ? 0 : 1] : -1,
        })
    }
}