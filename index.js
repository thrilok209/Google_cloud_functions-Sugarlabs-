
exports.greetings = (req, res) => {

  if (req.body.name === undefined) {
    
    res.status(200).json({ greetings :"Hello_World!"});
  } else {
  
    console.log(req.body.name);
    res.status(200).json({name:req.body.name , greetings :'Hello_' + req.body.name +'!'});
  }
};
