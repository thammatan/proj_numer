const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Chapter4 = mongoose.model("ch4s", new Schema({}));

// get
getCh4 = async (req, res) => {
  await Chapter4.find({}, (err, ch4s) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!ch4s.length) {
      return res
        .status(404)
        .json({ success: false, error: `Chapter4 not found` });
    }
    console.log("chapter4");
    
    return res.status(200).json({ success: true, data: ch4s });
  }).catch(err => console.log(err));
};

module.exports = {
  getCh4
};