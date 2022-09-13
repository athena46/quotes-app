"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devConfig = void 0;
exports.devConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'dev-user',
    password: 'dev-user',
    database: 'quotes-app',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
};
//# sourceMappingURL=database.config.js.map