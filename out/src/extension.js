"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const error_helper_1 = require("./helpers/error-helper");
const auto_import_1 = require("./auto-import");
function activate(context) {
    try {
        if (context.workspaceState.get('auto-import-settings') === undefined) {
            context.workspaceState.update('auto-import-settings', {});
        }
        let extension = new auto_import_1.AutoImport(context);
        let start = extension.start();
        if (!start) {
            return;
        }
        extension.attachCommands();
        extension.attachFileWatcher();
        extension.scanIfRequired();
    }
    catch (error) {
        error_helper_1.ErrorHelper.handle(error);
    }
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map