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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListEpisodes = void 0;
const list_episodes_service_1 = require("../services/list-episodes-service");
const getListEpisodes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield (0, list_episodes_service_1.serviceListeEpisodes)();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(content));
});
exports.getListEpisodes = getListEpisodes;
