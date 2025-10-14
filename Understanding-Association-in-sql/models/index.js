const Students = require("./student");
const Posts = require("./post");
const IdentityCard = require("./identityCard");

// one to one
// Students.hasOne(IdentityCard);
// IdentityCard.belongsTo(Students);

// one to Many
Students.hasMany(Posts);
Posts.belongsTo(Students);
