const express = require("express");
const app = express();
const routers = require("./app/routers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routers);

const { swaggerUi, specs } = require("./swagger/swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req, res) => {
    //Hello World 데이터 반환
    res.send("WellCome To Express");
});

app.listen(8080);
