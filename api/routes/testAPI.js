var express = require('express');
var router = express.Router();

const user = {
  "one": {
    "name": "luke",
    "test": "working"
  }
};

router.get('/', function(req, res, next) {
    return res.send(user);
});

module.exports = router;
