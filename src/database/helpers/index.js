import catchAsync from "../../api/helpers/catchAsync.js";

const findOne = async (model, payload) => {
    return model.findOne(payload);
};

const create = async (model, payload) => {
    return model.create(payload);
};

export { findOne, create };