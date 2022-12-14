import db from '../../../database/index.js'

export default async (req, res) => {
    let usernumberID = req.query.usernumberID
    if (req.method === 'GET') {
        let firstname = await db.query(
            `SELECT "firstname" FROM "public"."user_information" WHERE "usernumberID" = $1`
            , [usernumberID])

        let lastname = await db.query(
            `SELECT "lastname" FROM "public"."user_information" WHERE "usernumberID" = $1`
            , [usernumberID])

        let username = await db.query(
            `SELECT "username" FROM "public"."user_information" WHERE "usernumberID" = $1`
            , [usernumberID])

        let dateofbirth = await db.query(
            `SELECT "dateofbirth" FROM "public"."user_information" WHERE "usernumberID" = $1`
            , [usernumberID])

        let telephonenumber = await db.query(
            `SELECT "telephonenumber" FROM "public"."user_information" WHERE "usernumberID" = $1`
            , [usernumberID])

        let ID = await db.query(
            `SELECT "id" FROM "public"."user_information" WHERE "usernumberID" = $1`
            , [usernumberID])

        let urlimg = await db.query(
            `SELECT "url" FROM "public"."user_information" WHERE "usernumberID" = $1`
            , [usernumberID])

        res.json({
            firstname: (firstname.rows[0].firstname),
            lastname: (lastname.rows[0].lastname),
            username: (username.rows[0].username),
            dateofbirth: (dateofbirth.rows[0].dateofbirth),
            telephonenumber: (telephonenumber.rows[0].telephonenumber),
            id: (ID.rows[0].id),
            url: (urlimg.rows[0].url),
        })
    }
}
