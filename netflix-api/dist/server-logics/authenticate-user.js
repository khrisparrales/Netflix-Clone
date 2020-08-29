"use strict";
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
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./../schemas/user"));
var jwtPromised = require("../essentials/jwt-promised");
var SECRET = "lescatiusquesdeligorsondemoscou";
var bcrypt = require("bcrypt");
module.exports = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, userFound, match, token;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, user_1.default.findOne({ email: email })];
            case 1:
                userFound = _b.sent();
                if (!!userFound) return [3 /*break*/, 2];
                res.status(401).json("Email not found");
                return [3 /*break*/, 7];
            case 2: return [4 /*yield*/, bcrypt.compare(password, userFound.password)];
            case 3:
                match = _b.sent();
                if (!!match) return [3 /*break*/, 4];
                res.status(401).json("Incorrect Password");
                return [3 /*break*/, 7];
            case 4: return [4 /*yield*/, jwtPromised.sign({ sub: userFound.id }, SECRET, {
                    expiresIn: "1d",
                })];
            case 5:
                token = _b.sent();
                return [4 /*yield*/, res.send({ token: token })];
            case 6:
                _b.sent();
                _b.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRlLXVzZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJzZXJ2ZXItbG9naWNzL2F1dGhlbnRpY2F0ZS11c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkRBQTJDO0FBQzNDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQzFELElBQU0sTUFBTSxHQUFHLGlDQUFpQyxDQUFDO0FBQ2pELElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVqQyxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQWE7Ozs7O2dCQUUvQyxLQUNFLEdBQUcsS0FEb0IsRUFBakIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLENBQ2pCO2dCQUNlLHFCQUFNLGNBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLEVBQUE7O2dCQUFwRCxTQUFTLEdBQVEsU0FBbUM7cUJBQ3RELENBQUMsU0FBUyxFQUFWLHdCQUFVO2dCQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7O29CQUV4QyxxQkFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUE7O2dCQUExRCxLQUFLLEdBQUcsU0FBa0Q7cUJBQzVELENBQUMsS0FBSyxFQUFOLHdCQUFNO2dCQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7O29CQUV2QyxxQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUU7b0JBQ2xFLFNBQVMsRUFBRSxJQUFJO2lCQUNoQixDQUFDLEVBQUE7O2dCQUZJLEtBQUssR0FBRyxTQUVaO2dCQUNGLHFCQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLEVBQUE7O2dCQUF6QixTQUF5QixDQUFDOzs7OztLQUcvQixDQUFDIn0=