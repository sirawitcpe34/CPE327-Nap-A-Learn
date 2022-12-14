import pg from 'pg'
const pool = new pg.Pool({ connectionString: 'postgresql://sirawit:tr6sNU6qrXMcfnnIuMvUDw@free-tier6.gcp-asia-southeast1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dnap-a-learn1-3361' })
export default {
    query: (text, callback) =>
    {
        return pool.query(text, callback)
    }
}