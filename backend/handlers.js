"use strict";

// api functions

//get bacon function to test server
const getBacon = async (req, res) => {
  res.status(200).json("🥓");
};
module.exports = {
  getBacon,
};
