import db from '../../../database/index.js'
export default async (req, res) => {
    const { firstname, lastname, id, username, password, dob, telephone } = req.body

    if (req.method == "POST") {
        if (firstname && lastname && id && username && password && dob && telephone) {
            let result = await db.query(`INSERT INTO "public"."user_information" ("firstname", "lastname",
                            "id", "username", "password", "dateofbirth", "telephonenumber") 
                            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
                [firstname, lastname, id, username, password, dob, telephone])

            res.json(result.rows[0])
        }
        else
            res.send('Register failed')
    }
}