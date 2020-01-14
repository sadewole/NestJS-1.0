"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
//# sourceMappingURL=user.schema.js.map