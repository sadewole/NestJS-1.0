"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async fetchAllUser() {
        return await this.userModel.find();
    }
    async createUser(user) {
        const newUser = new this.userModel(user);
        const data = await newUser.save();
        const payload = { sub: data._id };
        return {
            msg: 'Register successful',
            success: true,
            data,
            token: `Bearer ${this.jwtService.sign(payload)}`
        };
    }
    async findOne(email) {
        return await this.userModel.findOne({ email });
    }
    async findById(id) {
        return await this.userModel.findById({ _id: id });
    }
    async deleteUser(id) {
        await this.userModel.findOneAndRemove(id);
        return {
            success: true,
            message: 'User deleted successfully'
        };
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('USER_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map