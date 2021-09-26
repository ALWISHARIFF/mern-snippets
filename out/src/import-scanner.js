"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportScanner = void 0;
const node_upload_1 = require("./node-upload");
const FS = require("fs");
const vscode = require("vscode");
const import_db_1 = require("./import-db");
const auto_import_1 = require("./auto-import");
class ImportScanner {
    constructor(config) {
        this.config = config;
        this.filesToScan = this.config.get('filesToScan');
        this.showNotifications = this.config.get('showNotifications');
        this.higherOrderComponents = this.config.get('higherOrderComponents');
    }
    scan(request) {
        this.showOutput = request.showOutput ? request.showOutput : false;
        if (this.showOutput) {
            this.scanStarted = new Date();
        }
        vscode.workspace
            .findFiles(this.filesToScan, '**/node_modules/**', 99999)
            .then((files) => this.processWorkspaceFiles(files));
        vscode.commands
            .executeCommand('extension.scanNodeModules');
    }
    edit(request) {
        import_db_1.ImportDb.delete(request);
        this.loadFile(request.file, true);
        new node_upload_1.NodeUpload(vscode.workspace.getConfiguration('autoimport')).scanNodeModules();
    }
    delete(request) {
        import_db_1.ImportDb.delete(request);
        auto_import_1.AutoImport.setStatusBar();
    }
    processWorkspaceFiles(files) {
        let pruned = files.filter((f) => {
            return f.fsPath.indexOf('typings') === -1 &&
                f.fsPath.indexOf('node_modules') === -1 &&
                f.fsPath.indexOf('.history') === -1 &&
                f.fsPath.indexOf('jspm_packages') === -1;
        });
        pruned.forEach((f, i) => {
            this.loadFile(f, i === (pruned.length - 1));
        });
    }
    loadFile(file, last) {
        FS.readFile(file.fsPath, 'utf8', (err, data) => {
            if (err) {
                return console.log(err);
            }
            this.processFile(data, file);
            if (last) {
                auto_import_1.AutoImport.setStatusBar();
            }
            if (last && this.showOutput && this.showNotifications) {
                this.scanEnded = new Date();
                let str = `[AutoImport] cache creation complete - (${Math.abs(this.scanStarted - this.scanEnded)}ms)`;
                vscode.window
                    .showInformationMessage(str);
            }
        });
    }
    processFile(data, file) {
        //added code to support any other middleware that the component can  be nested in. 
        const regExp = new RegExp(`(export\\s?(default)?\\s?(class|interface|let|var|const|function)?) ((${this.higherOrderComponents}).+[, (])?(\\w+)`, "g");
        var matches = data.match(regExp);
        if (matches != null) {
            matches.forEach(m => {
                //this allows us to reliably gets the last string (not splitting on spaces)
                const mArr = regExp.exec(m);
                if (mArr === null) {
                    //this is a weird situation that shouldn't ever happen. but does?
                    return;
                }
                const workingFile = mArr[mArr.length - 1];
                const isDefault = m.indexOf('default') !== -1;
                import_db_1.ImportDb.saveImport(workingFile, data, file, isDefault, null);
            });
        }
    }
}
exports.ImportScanner = ImportScanner;
//# sourceMappingURL=import-scanner.js.map