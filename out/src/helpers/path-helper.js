"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathHelper = void 0;
const path = require("path");
const fs = require("fs");
class PathHelper {
    static normalisePath(path, absolute) {
        let removeFileExtenion = (rp) => {
            if (rp) {
                rp = rp.substring(0, rp.lastIndexOf('.'));
            }
            return rp;
        };
        let makeRelativePath = (rp) => {
            // https://github.com/soates/Auto-Import/pull/47/commits/fe32277511820d687267bda1674f57625addcea7
            // if (!rp.startsWith(preAppend)) {
            if (!rp.startsWith('./') && !rp.startsWith('../')) {
                rp = './' + rp;
            }
            if (/^win/.test(process.platform)) {
                rp = rp.replace(/\\/g, '/');
            }
            return rp;
        };
        if (!absolute) {
            path = makeRelativePath(path);
        }
        path = removeFileExtenion(path);
        return path;
    }
    static getRelativePath(a, b) {
        // Ensure we have a path to a folder
        if (fs.lstatSync(a).isFile()) {
            a = path.dirname(a);
        }
        return path.relative(a, b);
    }
    static joinPaths(a, b) {
        return path.join(a, b);
    }
}
exports.PathHelper = PathHelper;
//# sourceMappingURL=path-helper.js.map