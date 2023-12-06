import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../middleware/catchAsyncError";



export const register = catchAsyncError(async (req:Request, res:Response, next: NextFunction) => {
    try {
        
    } catch (error) {
        
    }
})