"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_schema_1 = require("./schemas/item.schema");
exports.itemsProviders = [
    {
        provide: 'ITEM_MODEL',
        useFactory: (connection) => connection.model('Item', item_schema_1.ItemSchema),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=items.providers.js.map