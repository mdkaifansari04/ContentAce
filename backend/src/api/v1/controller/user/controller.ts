import { CustomRequest } from "@src/interface/document";
import { NextFunction, Response } from "express";
import User from "../../models/userSchema";
import ErrorResponse from "@src/helper/errorResponse";

export const createUser = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.create(req.value);
    if (!user)
      return next(new ErrorResponse("Error Occured in creating the user", 400));

    res.status(200).json({
      success: true,
      message: "User created successfully.",
      user,
    });
  } catch (error) {
    console.error(error);
    next(new ErrorResponse("Internal server error", 500));
  }
};

// Delete User
export const deleteUser = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return next(new ErrorResponse("User not found", 404));
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    next(new ErrorResponse("Internal server error", 500));
  }
};

// Get User by ID
export const getUserById = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return next(new ErrorResponse("User not found", 404));
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    next(new ErrorResponse("Internal server error", 500));
  }
};

// Update User
export const updateOrCreateUser = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const user = await User.findOneAndUpdate({ userId: id }, req.body, { new: true });
    if (!user) {
      try {
        const newUser = await User.create(req.value);
        if (!newUser) {
          return next(new ErrorResponse("Error occurred while making the request.", 400));
        }

        return res.status(200).json({
          success: true,
          message: "User created successfully",
          user: newUser,
        });
      } catch (error) {
        console.error(error);
        return next(new ErrorResponse("Error occurred while creating the user.", 500));
      }
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    return next(new ErrorResponse("Internal server error", 500));
  }
};
