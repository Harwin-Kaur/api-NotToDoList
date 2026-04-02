import express from 'express'
const router = express.Router()

// router.all("/", (req, res, next) => {
//     // do your code here

//     // res.json({
//     //     status: "success",
//     //     message: "response from all",
//     // });

//     next();
// });

router.post("/", (req, res, next) => {
    // do your code here
    res.json({
        status: "success",
        message: "response from post",
    });
});
router.get("/", (req, res, next) => {
    // do your code here
    res.json({
        status: "success",
        message: "response from get",
    });
});
router.put("/", (req, res, next) => {
    // do your code here
    res.json({
        status: "success",
        message: "response from put",
    });
});
router.delete("/", (req, res, next) => {
    // do your code here
    res.json({
        status: "success",
        message: "response from delete",
    });
});

export default router