"use strict";
exports.__esModule = true;
var Students = /** @class */ (function () {
    function Students(lname, fname) {
        this.fName = fname;
        this.lName = lname;
    }
    Students.prototype.GetFullname = function () {
        return this.lName + ", " + this.fName;
    };
    return Students;
}());
exports["default"] = Students;
//# sourceMappingURL=Student.js.map