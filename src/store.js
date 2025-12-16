import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import doctorReducer from "./slices/doctorSlice";
import recipientReducer from "./slices/recipientSlice";
import patientReducer from "./slices/patientSlice";
import appointmentReducer from "./slices/appointmentSlice";
import serviceReducer from "./slices/serviceSlice";

const rootReducer = {
    auth: authReducer,
    doctor: doctorReducer,
    recipient: recipientReducer,
    patient: patientReducer,
    appointment: appointmentReducer,
    service: serviceReducer,  
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
