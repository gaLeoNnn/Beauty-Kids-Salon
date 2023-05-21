const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Project");
}

app.use(bodyParser);
main().catch((err) => console.log(err));

const feedbackSchema = new mongoose.Schema({
  name: String,
  tel: Number,
  feedback: String,
});

const Feedback = new mongoose.model("Feedback", feedbackSchema);

const someFeedback = new Feedback({
  name: "Ali",
  number: 87009227914,
  feedback: "all good",
});

// someFeedback.save();

router.get("/", async (req, res) => {
  const data = await Feedback.find({});
  res.send(data);
});

router.post("/add", async (req, res) => {
  try {
    const newFeedback = await new Feedback({
      name: req.body.name,
      tel: req.body.tel,
      feedback: req.body.feedback,
    });
    await newFeedback.save();
    res.status(200).send({ status: 200, message: "" });
  } catch (err) {
    res.status(500).send({ status: 500, message: err });
  }
});

module.exports = router;
