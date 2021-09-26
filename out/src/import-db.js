"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportDb = exports.ImportObject = void 0;
const vscode = require("vscode");
const path_helper_1 = require("./helpers/path-helper");
class ImportObject {
    constructor(name, file, isDefault, discovered = false) {
        this.name = name;
        this.file = file;
        this.isDefault = isDefault;
        this.discovered = discovered;
    }
    getPath(document) {
        if (this.discovered) {
            return this.file.fsPath;
        }
        const absolute = vscode.workspace.getConfiguration('autoimport').get('absolute');
        let basePath = document.uri.fsPath;
        if (absolute) {
            const sourceRoot = vscode.workspace.getConfiguration('autoimport').get('sourceRoot');
            basePath = path_helper_1.PathHelper.joinPaths(vscode.workspace.rootPath, sourceRoot);
        }
        return path_helper_1.PathHelper.normalisePath(path_helper_1.PathHelper.getRelativePath(basePath, this.file.fsPath), absolute);
    }
}
exports.ImportObject = ImportObject;
class ImportDb {
    static get count() {
        return ImportDb.imports.length;
    }
    static all() {
        return ImportDb.imports;
    }
    static getImport(name) {
        return ImportDb.imports.filter(i => i.name === name);
    }
    static delete(request) {
        try {
            let index = ImportDb.imports.findIndex(m => m.file.fsPath === request.file.fsPath);
            if (index !== -1) {
                ImportDb.imports.splice(index, 1);
            }
        }
        catch (error) {
        }
    }
    static saveImport(name, data, file, isDefault = false, discovered) {
        name = name.trim();
        if (name === '' || name.length === 1) {
            return;
        }
        let obj = new ImportObject(name, file, isDefault, discovered);
        let exists = ImportDb.imports.findIndex(m => m.name === obj.name && m.file.fsPath === file.fsPath);
        if (exists === -1) {
            ImportDb.imports.push(obj);
        }
    }
}
exports.ImportDb = ImportDb;
ImportDb.imports = new Array();
//# sourceMappingURL=import-db.js.map