// store.js ist der Globale Speicher, dort werden die Kombonenten spezifische Zustände gleich importiert und gespeichert

import { configureStore } from "@reduxjs/toolkit";
import warenkorbReducer from "./warenkorbSlice";

export default configureStore({
    reducer:{
        warenkorb: warenkorbReducer,
    },
});

