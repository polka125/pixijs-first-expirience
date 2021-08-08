const express = require("express")
const path = require("path")

const app = express()

app.use("/", express.static(path.resolve(__dirname)))

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("index.html"))
})

app.listen(process.env.PORT || 8000, () => console.log("mi in hir"))