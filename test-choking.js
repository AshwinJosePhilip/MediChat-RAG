"use strict";
// Test script for choking detection in firstaidRAG.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var firstaidRAG_1 = require("./src/lib/firstaidRAG");
function testChokingDetection() {
    return __awaiter(this, void 0, void 0, function () {
        var result1, result2, result3, error_1;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.log('Testing choking detection...');
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, (0, firstaidRAG_1.getFirstAidGuideFromRAG)('choking')];
                case 2:
                    result1 = _d.sent();
                    console.log('\nTest 1: Direct "choking" query');
                    console.log('Detected condition:', result1 === null || result1 === void 0 ? void 0 : result1.condition);
                    console.log('Is emergency:', result1 === null || result1 === void 0 ? void 0 : result1.emergency);
                    console.log('Number of steps:', (_a = result1 === null || result1 === void 0 ? void 0 : result1.steps) === null || _a === void 0 ? void 0 : _a.length);
                    return [4 /*yield*/, (0, firstaidRAG_1.getFirstAidGuideFromRAG)('general first aid')];
                case 3:
                    result2 = _d.sent();
                    console.log('\nTest 2: "general first aid" query');
                    console.log('Detected condition:', result2 === null || result2 === void 0 ? void 0 : result2.condition);
                    console.log('Is emergency:', result2 === null || result2 === void 0 ? void 0 : result2.emergency);
                    console.log('Number of steps:', (_b = result2 === null || result2 === void 0 ? void 0 : result2.steps) === null || _b === void 0 ? void 0 : _b.length);
                    return [4 /*yield*/, (0, firstaidRAG_1.getFirstAidGuideFromRAG)('heimlich maneuver')];
                case 4:
                    result3 = _d.sent();
                    console.log('\nTest 3: "heimlich maneuver" query');
                    console.log('Detected condition:', result3 === null || result3 === void 0 ? void 0 : result3.condition);
                    console.log('Is emergency:', result3 === null || result3 === void 0 ? void 0 : result3.emergency);
                    console.log('Number of steps:', (_c = result3 === null || result3 === void 0 ? void 0 : result3.steps) === null || _c === void 0 ? void 0 : _c.length);
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _d.sent();
                    console.error('Error testing choking detection:', error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
// Run the test
testChokingDetection();
