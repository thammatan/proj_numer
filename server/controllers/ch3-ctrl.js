const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Chapter3 = mongoose.model("ch3s", new Schema({}));

// get
getCh3 = async (req, res) => {
  await Chapter3.find({}, (err, ch3s) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!ch3s.length) {
      return res
        .status(404)
        .json({ success: false, error: `Chapter3 not found` });
    }
    console.log("chapter3");
    
    return res.status(200).json({ success: true, data: ch3s });
  }).catch(err => console.log(err));
};

module.exports = {
  getCh3
};