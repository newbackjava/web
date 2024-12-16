const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// 정적 파일 서빙
app.use(express.static(path.join(__dirname, "views")));

// 라우트 설정
app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/about", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/login", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "login.html"));
});

app.get("/info", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "info.html"));
});

app.get("/location", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "location.html"));
});

// 404 처리
app.use((req, res) => {
    res.status(404).send("Not Found");
});

// 서버 실행
app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});
