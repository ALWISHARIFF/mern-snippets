"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportAction = void 0;
const import_db_1 = require("./import-db");
class ImportAction {
    provideCodeActions(document, range, context, token) {
        let actionContext = this.createContext(document, range, context, token);
        if (this.canHandleAction(actionContext)) {
            return this.actionHandler(actionContext);
        }
    }
    canHandleAction(context) {
        let diagnostic = context.context.diagnostics[0];
        if (!diagnostic) {
            return false;
        }
        if (diagnostic.message.includes('is not defined')) {
            let imp = diagnostic.message.match(/'(.+)'/g)[0].replace(/'/g, '');
            try {
                let found = import_db_1.ImportDb.getImport(imp);
                if (found) {
                    context.imports = found;
                    return true;
                }
            }
            catch (exception) {
                return false;
            }
        }
        if (diagnostic.message.startsWith('JavaScript/TypeScript cant find name') ||
            diagnostic.message.startsWith('Cant find name')) {
            let imp = diagnostic.message.replace('JavaScript/TypeScript cant find name', '')
                .replace('Cannot find name', '')
                .replace(/{|}|from|import|'|"| |\.|;/gi, '');
            try {
                let found = import_db_1.ImportDb.getImport(imp);
                if (found) {
                    context.imports = found;
                    return true;
                }
            }
            catch (exception) {
                return false;
            }
        }
        return false;
    }
    actionHandler(context) {
        let handlers = [];
        context.imports.forEach(imp => {
            handlers.push({
                title: `Import ${imp.name} from ${imp.getPath(context.document)}`,
                command: 'extension.fixImport',
                arguments: [context.document, context.range, context.context, context.token, context.imports]
            });
        });
        return handlers;
    }
    createContext(document, range, context, token) {
        return {
            document, range, context, token
        };
    }
}
exports.ImportAction = ImportAction;
//# sourceMappingURL=import-action.js.map