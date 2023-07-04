import postgres from 'postgres'

const connectionString = 'postgresql://postgres:qCaxIEGd8OTSqK2b@db.bxkbeajcqhdtekouvvnm.supabase.co:5432/postgres'
const sql = postgres(connectionString)

export default sql