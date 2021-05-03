const express = require("express");
const auth = require("../middleware/auth");
const group = require("../models/group");
const events = require("../models/event");
const boards = require("../models/boards");
const multer = require("multer");
const path = require("path");



const router = new express.Router();
//const { getUserById } = require("../controllers/user.controller");

const {
  
  JoinGroup,
  LeaveGroup,
 
} = require("../controllers/group");
router.put("/JoinGroup", auth, JoinGroup);
router.put("/LeaveGroup", auth, LeaveGroup);



router.use(express.static(__dirname + "./public/"));
// router.use(express.static(__dirname+"./public/"));
if (typeof localStorage === "undefined" || localStorage === null) {
  const LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}
var Storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
var upload = multer({
  storage: Storage,
}).single("img");


router.get("/getdev", function (req, res, next) {
  group.find(function (err, data) {
    if (err) throw err;
    res.json(data);
  });
});
router.get("/getev", function (req, res, next) {
  events.find(function (err, data) {
    if (err) throw err;
    res.json(data);
  });
});


/* add*/
router.post("/add/:userId",upload,function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
 const kar = JSON.parse(obj.Topic);
 
  console.log(obj);
  const newgroup = {
    name: obj.name, 
    CreatedBy:obj.CreatedBy,
    Topic: kar,
    description: obj.description,
    IsPrivate: obj.IsPrivate,
    Createdat: obj.Createdat,
   // Image: req.file.filename,
  };
  group.create(newgroup, function (err) {
    if (err) {
      res.render("/addgroup/");
    } else {
      res.redirect("/group");
    }
  });
});

router.get("/:id", function (req, res, next) {
  event.findById(req.params.id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render("detailev", { event: data });
    }
  });
});

router.post("/addEvent/:userId/:groupId",upload, function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const newevent = {
    name: obj.name,
    CreatedBy:  req.params.userId,
    group_id: req.params.groupId,
    description: obj.description,
    adresse: obj.address,
    Date: obj.Date,
    Image: req.file.filename,
  };
  events.create(newevent, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("doneee");
    }
  });
});


/*Join Member*/

router.post("/join/:Id", function (req, res, next) {
  group.findByIdAndUpdate(
    req.body.postId,
    { $push: { Members: req.body.userId } },
    { new: true }
  ).exec((err, result) => {
    if (err) res.json({ error: err });
    res.json(result);
  });
});


/* GET group DB. 
router.get('/', function(req, res, next) {
  group.find(function(err,data){
  		res.json(data);
  });
});
/*direction add*/
router.get("/addgroup", function (req, res, next) {
  res.render("addg");
});

/*Details*/
router.get("/:id", function (req, res, next) {
  group.findById(req.params.id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render("detailg", { user: data });
    }
  });
});
router.get("/getdev/:id", function (req, res, next) {
  group.findById(req.params.id, function (err, data) {
    if (err) throw err;
    res.json(data);
  });
});
/* add*/
router.post("/addboard", function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const newgroup = {
    name: obj.name, 
    status: obj.status,
  };
  boards.create(newgroup, function (err) {
    if (err) {
      res.render("/addgroup/");
    } else {
      res.redirect("/group");
    }
  });
});


/*EDITTTTTTTTTTTTTTTTTT*/
router.post("/edit/:id", function (req, res, next) {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  const newgroup = {
    name: obj.name,
    description: obj.description,
    IsPrivate: obj.IsPrivate,
    Createdat: obj.Createdat,
    Image: obj.Image,
  };
  group.findByIdAndUpdate(req.params.id, newgroup, function (err) {
    if (err) {
      res.render("/group/edit/" + req.params.id);
    } else {
      res.redirect("/group");
    }
  });
});


router.get("/delete/:id", function (req, res, next) {
  group.findByIdAndRemove(req.params.id, function (err, docs) {
    if (err) console.log(err);
    res.redirect("/group");
  });
});

/*direction edit*/
router.get("/edit/group/:id", function (req, res, next) {
  group.findById(req.params.id, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.render("editgroup", { user: data });
    }
  });
});
/*
router.post('/delete/:id', function(req,res,next){
	group.findByIdAndRemove(req.params.id, 
    	function (err, docs) {
      
        res.redirect("/group");
    })
})*/


module.exports = router;