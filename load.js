db = db.getSiblingDB("msgdb");
db.msgDetails.drop();
db.msgDetails.insertMany([
    { id:1, msg: "Hello!", date: "May 15, 2020", time: "1:22:46 PM"},
    { id:2, msg: "Say something", date: "Jun 15, 2020", time: "3:12:46 PM"},
    { id:3, msg: "goodbye", date: "Jun 15, 2020", time: "4:00:00 PM"},
    { id: 4, msg: "Last message!", date: "Dec 12, 2019", time: "7:00:00 PM"},
 ]);