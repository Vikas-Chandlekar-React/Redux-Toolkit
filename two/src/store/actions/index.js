import { createAction } from "@reduxjs/toolkit";

// Create a shared action using createAction
export const updateValue = createAction("updateValue");
export const updateUser = createAction("updateUser");
export const updateTask = createAction("updateTask");
