"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportCompletion = void 0;
const import_db_1 = require("./import-db");
const import_fixer_1 = require("./import-fixer");
const package_name_helper_1 = require("./helpers/package-name-helper");
const vscode = require("vscode");
class ImportCompletion {
    constructor(context, enabled) {
        this.context = context;
        this.enabled = enabled;
        let fixer = vscode.commands.registerCommand('extension.resolveImport', (args) => {
            new import_fixer_1.ImportFixer().fix(args.document, undefined, undefined, undefined, [args.imp]);
        });
        context.subscriptions.push(fixer);
    }
    provideCompletionItems(document, position, token) {
        if (!this.enabled) {
            return Promise.resolve([]);
        }
        return new Promise((resolve, reject) => {
            let wordToComplete = '';
            let range = document.getWordRangeAtPosition(position);
            if (range) {
                wordToComplete = document.getText(new vscode.Range(range.start, position)).toLowerCase();
            }
            return resolve(import_db_1.ImportDb.all()
                .filter(f => {
                return f.name.toLowerCase().indexOf(wordToComplete) > -1;
            })
                .filter(imp => package_name_helper_1.PackageNameHelper.isPackageNameQuoted(imp.getPath(document)))
                .map(i => this.buildCompletionItem(i, document)));
        });
    }
    buildCompletionItem(imp, document) {
        return {
            label: imp.name,
            kind: vscode.CompletionItemKind.Reference,
            detail: `import from ${imp.getPath(document)}`,
            documentation: `Import ${imp.name} from ${imp.getPath(document)}`,
            command: { title: 'AI: Autocomplete', command: 'extension.resolveImport', arguments: [{ imp, document }] }
        };
    }
}
exports.ImportCompletion = ImportCompletion;
//# sourceMappingURL=import-completion.js.map