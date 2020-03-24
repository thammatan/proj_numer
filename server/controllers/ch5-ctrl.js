const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Chapter5 = mongoose.model("ch5s", new Schema({}));

// get
getCh5 = async (req, res) => {
  await Chapter5.find({}, (err, ch5s) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!ch5s.length) {
      return res
        .status(404)
        .json({ success: false, error: `Chapter5 not found` });
    }
    console.log("chapter5");
    
    return res.status(200).json({ success: true, data: ch5s });
  }).catch(err => console.log(err));
};

module.exports = {
  getCh5
};