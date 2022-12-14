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

        let datetime = await db.query(`
        SELECT "datesubmit" FROM "public"."questionnaire_intellect" WHERE "usernumberID" = $1 ORDER BY "datesubmit" DESC
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

            aresponse1: (response1.rows[1] != null) ? [(response1.rows[1].question == true) ? 0 : 1] : -1,
            aresponse2: (response2.rows[1] != null) ? [(response2.rows[1].question == true) ? 0 : 1] : -1,
            aresponse3: (response3.rows[1] != null) ? [(response3.rows[1].question == true) ? 0 : 1] : -1,
            aresponse4: (response4.rows[1] != null) ? [(response4.rows[1].question == true) ? 0 : 1] : -1,
            aresponse5: (response5.rows[1] != null) ? [(response5.rows[1].question == true) ? 0 : 1] : -1,
            aresponse6: (response6.rows[1] != null) ? [(response6.rows[1].question == true) ? 0 : 1] : -1,
            aresponse7: (response7.rows[1] != null) ? [(response7.rows[1].question == true) ? 0 : 1] : -1,
            aresponse8: (response8.rows[1] != null) ? [(response8.rows[1].question == true) ? 0 : 1] : -1,
            aresponse9: (response9.rows[1] != null) ? [(response9.rows[1].question == true) ? 0 : 1] : -1,
            aresponse10: (response10.rows[1] != null) ? [(response10.rows[1].question == true) ? 0 : 1] : -1,
            aresponse11: (response11.rows[1] != null) ? [(response11.rows[1].question == true) ? 0 : 1] : -1,
            aresponse12: (response12.rows[1] != null) ? [(response12.rows[1].question == true) ? 0 : 1] : -1,
            aresponse13: (response13.rows[1] != null) ? [(response13.rows[1].question == true) ? 0 : 1] : -1,
            aresponse14: (response14.rows[1] != null) ? [(response14.rows[1].question == true) ? 0 : 1] : -1,
            aresponse15: (response15.rows[1] != null) ? [(response15.rows[1].question == true) ? 0 : 1] : -1,
            aresponse16: (response16.rows[1] != null) ? [(response16.rows[1].question == true) ? 0 : 1] : -1,
            aresponse17: (response17.rows[1] != null) ? [(response17.rows[1].question == true) ? 0 : 1] : -1,
            aresponse18: (response18.rows[1] != null) ? [(response18.rows[1].question == true) ? 0 : 1] : -1,
            aresponse19: (response19.rows[1] != null) ? [(response19.rows[1].question == true) ? 0 : 1] : -1,
            aresponse20: (response20.rows[1] != null) ? [(response20.rows[1].question == true) ? 0 : 1] : -1,

            bresponse1: (response1.rows[2] != null) ? [(response1.rows[2].question == true) ? 0 : 1] : -1,
            bresponse2: (response2.rows[2] != null) ? [(response2.rows[2].question == true) ? 0 : 1] : -1,
            bresponse3: (response3.rows[2] != null) ? [(response3.rows[2].question == true) ? 0 : 1] : -1,
            bresponse4: (response4.rows[2] != null) ? [(response4.rows[2].question == true) ? 0 : 1] : -1,
            bresponse5: (response5.rows[2] != null) ? [(response5.rows[2].question == true) ? 0 : 1] : -1,
            bresponse6: (response6.rows[2] != null) ? [(response6.rows[2].question == true) ? 0 : 1] : -1,
            bresponse7: (response7.rows[2] != null) ? [(response7.rows[2].question == true) ? 0 : 1] : -1,
            bresponse8: (response8.rows[2] != null) ? [(response8.rows[2].question == true) ? 0 : 1] : -1,
            bresponse9: (response9.rows[2] != null) ? [(response9.rows[2].question == true) ? 0 : 1] : -1,
            bresponse10: (response10.rows[2] != null) ? [(response10.rows[2].question == true) ? 0 : 1] : -1,
            bresponse11: (response11.rows[2] != null) ? [(response11.rows[2].question == true) ? 0 : 1] : -1,
            bresponse12: (response12.rows[2] != null) ? [(response12.rows[2].question == true) ? 0 : 1] : -1,
            bresponse13: (response13.rows[2] != null) ? [(response13.rows[2].question == true) ? 0 : 1] : -1,
            bresponse14: (response14.rows[2] != null) ? [(response14.rows[2].question == true) ? 0 : 1] : -1,
            bresponse15: (response15.rows[2] != null) ? [(response15.rows[2].question == true) ? 0 : 1] : -1,
            bresponse16: (response16.rows[2] != null) ? [(response16.rows[2].question == true) ? 0 : 1] : -1,
            bresponse17: (response17.rows[2] != null) ? [(response17.rows[2].question == true) ? 0 : 1] : -1,
            bresponse18: (response18.rows[2] != null) ? [(response18.rows[2].question == true) ? 0 : 1] : -1,
            bresponse19: (response19.rows[2] != null) ? [(response19.rows[2].question == true) ? 0 : 1] : -1,
            bresponse20: (response20.rows[2] != null) ? [(response20.rows[2].question == true) ? 0 : 1] : -1,

            cresponse1: (response1.rows[3] != null) ? [(response1.rows[3].question == true) ? 0 : 1] : -1,
            cresponse2: (response2.rows[3] != null) ? [(response2.rows[3].question == true) ? 0 : 1] : -1,
            cresponse3: (response3.rows[3] != null) ? [(response3.rows[3].question == true) ? 0 : 1] : -1,
            cresponse4: (response4.rows[3] != null) ? [(response4.rows[3].question == true) ? 0 : 1] : -1,
            cresponse5: (response5.rows[3] != null) ? [(response5.rows[3].question == true) ? 0 : 1] : -1,
            cresponse6: (response6.rows[3] != null) ? [(response6.rows[3].question == true) ? 0 : 1] : -1,
            cresponse7: (response7.rows[3] != null) ? [(response7.rows[3].question == true) ? 0 : 1] : -1,
            cresponse8: (response8.rows[3] != null) ? [(response8.rows[3].question == true) ? 0 : 1] : -1,
            cresponse9: (response9.rows[3] != null) ? [(response9.rows[3].question == true) ? 0 : 1] : -1,
            cresponse10: (response10.rows[3] != null) ? [(response10.rows[3].question == true) ? 0 : 1] : -1,
            cresponse11: (response11.rows[3] != null) ? [(response11.rows[3].question == true) ? 0 : 1] : -1,
            cresponse12: (response12.rows[3] != null) ? [(response12.rows[3].question == true) ? 0 : 1] : -1,
            cresponse13: (response13.rows[3] != null) ? [(response13.rows[3].question == true) ? 0 : 1] : -1,
            cresponse14: (response14.rows[3] != null) ? [(response14.rows[3].question == true) ? 0 : 1] : -1,
            cresponse15: (response15.rows[3] != null) ? [(response15.rows[3].question == true) ? 0 : 1] : -1,
            cresponse16: (response16.rows[3] != null) ? [(response16.rows[3].question == true) ? 0 : 1] : -1,
            cresponse17: (response17.rows[3] != null) ? [(response17.rows[3].question == true) ? 0 : 1] : -1,
            cresponse18: (response18.rows[3] != null) ? [(response18.rows[3].question == true) ? 0 : 1] : -1,
            cresponse19: (response19.rows[3] != null) ? [(response19.rows[3].question == true) ? 0 : 1] : -1,
            cresponse20: (response20.rows[3] != null) ? [(response20.rows[3].question == true) ? 0 : 1] : -1,

            adatetime: (datetime.rows[1] != null) ? datetime.rows[1].datesubmit : -1,
            bdatetime: (datetime.rows[2] != null) ? datetime.rows[2].datesubmit : -1,
        })
    }
}