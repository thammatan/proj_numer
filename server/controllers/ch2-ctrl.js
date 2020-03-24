const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Chapter2 = mongoose.model("ch2s", new Schema({}));

// get
getCh2 = async (req, res) => {
  await Chapter2.find({}, (err, ch2s) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!ch2s.length) {
      return res
        .status(404)
        .json({ success: false, error: `Chapter2 not found` });
    }
    console.log("chapter2");
    
    return res.status(200).json({ success: true, data: ch2s });
  }).catch(err => console.log(err));
};

module.exports = {
  getCh2
};