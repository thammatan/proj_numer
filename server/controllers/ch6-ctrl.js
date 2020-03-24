const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Chapter6 = mongoose.model("ch6s", new Schema({}));

// get
getCh6 = async (req, res) => {
  await Chapter6.find({}, (err, ch6s) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!ch6s.length) {
      return res
        .status(404)
        .json({ success: false, error: `Chapter6 not found` });
    }
    console.log("chapter6");
    
    return res.status(200).json({ success: true, data: ch6s });
  }).catch(err => console.log(err));
};

module.exports = {
  getCh6
};