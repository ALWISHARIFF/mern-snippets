"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageNameHelper = void 0;
const isQuote = (char) => char === `"` || char === `'`;
class PackageNameHelper {
    static isPackageNameQuoted(packageName) {
        const first = packageName[0];
        const last = packageName[packageName.length - 1];
        return isQuote(first) && isQuote(last);
    }
}
exports.PackageNameHelper = PackageNameHelper;
//# sourceMappingURL=package-name-helper.js.map