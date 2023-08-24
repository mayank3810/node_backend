import catchAsync from "../../api/helpers/catchAsync.js";

const findOne = catchAsync(async (model, payload) => {
    return model.findOne(payload);
});

const create = catchAsync(async (model, payload) => {
    return model.create(payload);
});

export { findOne, create };