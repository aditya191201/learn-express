const express = require('express')
const router = express.Router();

router.get('/usernames', (req, res) => {
    let usernames = req.users.map(function(user) {
      return {id: user.id, username: user.username};
    });
    res.send(usernames);
  });

  router.get('/username/:name', (req, res) => {
    let username = req.params.name;
    let email = req.users.filter((d) => d.username === username);
    if(email.length === 0) {
      res.send({
        error: {message: `${username} not found`, status: 404}
      })
    } else {
      res.send(email);
    }
    
  })

  module.exports = router