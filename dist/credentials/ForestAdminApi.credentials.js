"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForestAdminApi = void 0;
class ForestAdminApi {
    constructor() {
        this.name = 'forestAdminApi';
        this.displayName = 'Forest Admin API';
        this.properties = [];
        this.authenticate = {
            type: 'generic',
            properties: {},
        };
        this.test = {
            request: {
                baseURL: 'https://app.forestadmin.com',
                url: '',
            },
        };
    }
}
exports.ForestAdminApi = ForestAdminApi;
//# sourceMappingURL=ForestAdminApi.credentials.js.map