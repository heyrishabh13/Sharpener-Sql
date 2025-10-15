const Students = require("./student");
const Posts = require("./post");
const IdentityCard = require("./identityCard");
const Courses = require("./courses");
const StudentCourses = require("./studentCourses");

// one to one
// Students.hasOne(IdentityCard);
// IdentityCard.belongsTo(Students);

// one to Many
Students.hasMany(Posts);
Posts.belongsTo(Students);

// many ot many association
Students.belongsToMany(Courses, { through: StudentCourses });
Courses.belongsToMany(Students, { through: StudentCourses });

module.exports = {
  Students,
  Courses,
  StudentCourses,
};
