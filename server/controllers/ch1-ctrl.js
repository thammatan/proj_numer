const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Chapter1 = mongoose.model("ch1s", new Schema({}));

// get
getCh1 = async (req, res) => {
  await Chapter1.find({}, (err, ch1s) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!ch1s.length) {
      return res
        .status(404)
        .json({ success: false, error: `Chapter1 not found` });
    }
    console.log("chapter1");
    
    return res.status(200).json({ success: true, data: ch1s });
  }).catch(err => console.log(err));
};

module.exports = {
  getCh1
};