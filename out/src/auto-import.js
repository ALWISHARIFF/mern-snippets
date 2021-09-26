"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoImport = void 0;
const vscode = require("vscode");
const import_action_1 = require("./import-action");
const import_completion_1 = require("./import-completion");
const import_db_1 = require("./import-db");
const import_fixer_1 = require("./import-fixer");
const import_scanner_1 = require("./import-scanner");
const node_upload_1 = require("./node-upload");
class AutoImport {
    constructor(context) {
        this.context = context;
    }
    start() {
        let folder = vscode.workspace.rootPath;
        if (folder === undefined) {
            return false;
        }
        return true;
    }
    attachCommands() {
        let codeActionFixer = vscode.languages.registerCodeActionsProvider(['javascript', 'javascriptreact', 'typescript', 'typescriptreact'], new import_action_1.ImportAction());
        let importScanner = vscode.commands.registerCommand('extension.importScan', (request) => {
            let scanner = new import_scanner_1.ImportScanner(vscode.workspace.getConfiguration('autoimport'));
            if (request.showOutput) {
                scanner.scan(request);
            }
            else if (request.edit) {
                scanner.edit(request);
            }
            else if (request.delete) {
                scanner.delete(request);
            }
        });
        let nodeScanner = vscode.commands.registerCommand('extension.scanNodeModules', () => {
            new node_upload_1.NodeUpload(vscode.workspace.getConfiguration('autoimport')).scanNodeModules();
        });
        let importFixer = vscode.commands.registerCommand('extension.fixImport', (d, r, c, t, i) => {
            new import_fixer_1.ImportFixer().fix(d, r, c, t, i);
        });
        let completetion = vscode.languages.registerCompletionItemProvider(['javascript', 'javascriptreact', 'typescript', 'typescriptreact'], new import_completion_1.ImportCompletion(this.context, vscode.workspace.getConfiguration('autoimport').get('autoComplete')), '');
        AutoImport.statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);
        AutoImport.statusBar.text = '{..} : Scanning.. ';
        AutoImport.statusBar.show();
        this.context.subscriptions.push(importScanner, importFixer, nodeScanner, codeActionFixer, AutoImport.statusBar, completetion);
    }
    attachFileWatcher() {
        let glob = vscode.workspace.getConfiguration('autoimport').get('filesToScan');
        let watcher = vscode.workspace.createFileSystemWatcher(glob);
        watcher.onDidChange((file) => {
            vscode.commands
                .executeCommand('extension.importScan', { file, edit: true });
        });
        watcher.onDidCreate((file) => {
            vscode.commands
                .executeCommand('extension.importScan', { file, edit: true });
        });
        watcher.onDidDelete((file) => {
            vscode.commands
                .executeCommand('extension.importScan', { file, delete: true });
        });
    }
    scanIfRequired() {
        let settings = this.context.workspaceState.get('auto-import-settings');
        let firstRun = (settings === undefined || settings.firstRun);
        if (vscode.workspace.getConfiguration('autoimport').get('showNotifications')) {
            vscode.window
                .showInformationMessage('[AutoImport] Building cache');
        }
        vscode.commands
            .executeCommand('extension.importScan', { showOutput: true });
        settings.firstRun = true;
        this.context.workspaceState.update('auto-import-settings', settings);
    }
    static setStatusBar() {
        AutoImport.statusBar.text = `{..} : ${import_db_1.ImportDb.count}`;
    }
}
exports.AutoImport = AutoImport;
//# sourceMappingURL=auto-import.js.map