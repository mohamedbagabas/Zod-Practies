"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = __importDefault(require("../middleware/validate"));
const employee_schema_1 = require("../zod_schema/employee_schema");
const router = express_1.default.Router();
let rides = [];
router.get('/', (req, res, next) => {
    return res.json(rides);
});
router.post('/', (0, validate_1.default)(employee_schema_1.rideSchema), (req, res, next) => {
    const newride = req.body;
    rides.push(newride);
    return res.status(201).json({ message: 'Movie Added !' });
});
router.put(`/:id`, (0, validate_1.default)(employee_schema_1.rideSchema), (req, res) => {
    const updatedride = req.body;
    const { id } = req.params;
    const updatedridesList = rides.filter((uride) => {
        return uride.id !== id;
    });
    updatedridesList.push(updatedride);
    rides = updatedridesList;
    res.json({
        message: "Movie Update",
    });
});
router.delete(`/:id`, (0, validate_1.default)(employee_schema_1.rideSchema), (req, res) => {
    const deletedride = req.body;
    const { id } = req.params;
    const deletedrideList = rides.filter((dride) => {
        return dride.id !== id;
    });
    rides = deletedrideList;
    res.json({
        message: "Movie Delete",
    });
});
exports.default = router;
