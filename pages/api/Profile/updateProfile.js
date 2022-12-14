import db from '../../../database/index.js'

export default async (req, res) => {
    const { usernumberid, firstname, lastname, tel, dob } = req.body
    console.log(req.body)
    if (req.method == "POST") {
        if (usernumberid && firstname && lastname && tel && dob) {
            let result = await db.query(`
                UPDATE "public"."user_information" SET "firstname"=$1, "lastname"=$2, "telephonenumber"=$3,
                "dateofbirth"=$4 WHERE "usernumberID" = $5 
            `,
                [firstname, lastname, tel, dob, usernumberid])

            res.json(result.rows[0])
        }
        else
            res.send('Update failed')
    }
}