const mongodb=require("mongoose")
require("dotenv").config()
const mongoURL=process.env.MONGODB_URL
mongodb.connect(mongoURL)
let db = mongodb.connection
module.exports = db