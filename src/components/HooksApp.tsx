import React from "react";
import { CounterApp } from "../01-useState/CounterApp";
import { SimpleForm } from "../02-useEffect/SimpleForm";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
import { FocusScreen } from "../04-useRef/FocusScreen";
import { UseLayoutEffect } from "../05-useLayoutEffect/UseLayoutEffect";
import { CallbackHook } from "../06-useMemos/CallbackHook";
import '../08-useReducer/intro-reducer'
import { TodoApp } from "../08-useReducer/TodoApp";
import { MainApp } from "../09-useContext/MainApp";
import { BrowserRouter } from "react-router-dom";

export const HoooksApp = () => {
    return (
        <BrowserRouter>
            <MainApp></MainApp>
        </BrowserRouter>
        // <CounterApp></CounterApp>
        // <SimpleForm></SimpleForm>
        //<MultipleCustomHooks></MultipleCustomHooks>
        // <FocusScreen></FocusScreen>
        //<UseLayoutEffect></UseLayoutEffect>
        //<CallbackHook></CallbackHook>
        // <TodoApp></TodoApp>
    )
}