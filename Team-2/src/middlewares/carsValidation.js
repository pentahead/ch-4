const { z } = require("zod");
const { BadRequestError } = require("../utils/request");

exports.validateGetCars = (req, res, next) => {
  const validateQuery = z.object({
    model_name: z.string().optional(),
    manufacture_name: z.string().optional(),
    year: z.coerce.number().optional(),
    plate: z.string().optional(),
    rentPerDay: z.coerce.number().optional(),
    capacity: z.coerce.number().optional(),
    transmission_name: z.string().optional(),
    type_name: z.string().optional(),
    available_status: z.string().optional(),
  });

  const resultValidateQuery = validateQuery.safeParse(req.query);
  if (!resultValidateQuery.success) {
    throw new BadRequestError(resultValidateQuery.error.errors);
  }
  next();
};

exports.validateGetCarById = (req, res, next) => {
  const validateParams = z.object({
    id: z.string(),
  });

  const resultValidateParams = validateParams.safeParse(req.params);
  if (!resultValidateParams.success) {
    throw new BadRequestError(resultValidateParams.error.errors);
  }

  next();
};

exports.validateCreateCar = (req, res, next) => {
  const validateBody = z.object({
    plate: z.string(),
    model_id: z.number(),
    rentPerDay: z.number(),
    description: z.string(),
    availableAt: z.string(),
    availability_id: z.number(),
    year: z.number(),
    image: z.string(),
  });

  const resultValidateBody = validateBody.safeParse(req.body);
  if (!resultValidateBody.success) {
    throw new BadRequestError(resultValidateBody.error.errors);
  }
  next();
};

exports.validateUpdateCarById = (req, res, next) => {
  const validateParams = z.object({
    id: z.string(),
  });

  const resultValidateParams = validateParams.safeParse(req.params);
  if (!resultValidateParams.success) {
    throw new BadRequestError(resultValidateParams.error.errors);
  }

  const validateBody = z.object({
    plate: z.string(),
    model_id: z.number(),
    rentPerDay: z.number(),
    description: z.string(),
    availableAt: z.string(),
    availability_id: z.number(),
    year: z.number(),
    image: z.string(),
  });

  const resultValidateBody = validateBody.safeParse(req.body);
  if (!resultValidateBody.success) {
    throw new BadRequestError(resultValidateBody.error.errors);
  }
  next();
};

exports.validateDeleteCarById = (req, res, next) => {
  const validateParams = z.object({
    id: z.string(),
  });

  const resultValidateParams = validateParams.safeParse(req.params);
  if (!resultValidateParams.success) {
    throw new BadRequestError(resultValidateParams.error.errors);
  }
  next();
};
