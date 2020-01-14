"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./schema/user.schema");
exports.userProvider = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection) => connection.model('User', user_schema_1.userSchema),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=user.provider.js.map