db = db.getSiblingDB("msgdb");
db.msgDetails.drop();
db.msgDetails.insertMany([
    { msg: "Hello!", date: "May 15, 2020", time: "1:22:46 PM"},
    { msg: "Say something", date: "Jun 15, 2020", time: "3:12:46 PM"},
    { msg: "goodbye", date: "Jun 15, 2020", time: "4:00:00 PM"},
    { msg: "Last message!", date: "Dec 12, 2019", time: "7:00:00 PM"},
 ]);