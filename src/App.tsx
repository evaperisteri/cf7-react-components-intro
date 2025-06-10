// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
//import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
//import ArrowFunctionalCompWithProps from "./components/ArrowFunctionalCompWithProps.tsx";
//import ArrowFunctionalCompWithPropsType from "./components/ArrowFunctionalCompWithPropsType.tsx";

// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";

//import Layout from "./components/Layout.tsx";
//import OnlineStatus from "./components/OnlineStatus.tsx";
//import Todo from "./components/Todo/Todo.tsx";
//import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
//import CounterWithReducer from "./components/CounterWithReducer.tsx";
//import CounterAdvanced from "./components/CounterAdvanced.tsx";
//import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
//import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
//import NameChanger from "./components/NameChanger.tsx";
//import {useEffect} from "react";
//import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
//import Counter from "./components/Counter.tsx";
//import FunctionalComponent from "./components/FunctionalComponent.tsx";
//import ClassComponentWithState from "./components/ClassComponentWithState.tsx";

import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import Layout from "./components/Layout.tsx";
//import OnlineStatus from "./components/OnlineStatus.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";

function App() {

    // useEffect(()=> {
    //     const id: number = setInterval(()=>console.log("tick"), 1000)
    //     return()=> clearInterval(id);
    // }, []);
  return (
    <>
        {/*<ClassComponent/>*/}
        {/*<FunctionalComponent/>*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalCompWithProps title="is an Arrow FunctionalComponent with props" />*/}
        {/*<ArrowFunctionalCompWithPropsType title={"It is an Arrow FunctionalComponent with props"} description={"this is a description"}/>*/}
        {/*<CodingFactoryLogo/>*/}
        {/*<Layout>*/}
            {/*<h1 className="text-center text-2xl font-bold">This is a heading1 title</h1>*/}
            {/*<FunctionalComponent/>*/}
            {/*<ClassComponentWithState/>*/}
            {/*<FunctionalComponentWithState/>*/}
            {/*<Counter/>*/}
            {/*<NameChanger/>*/}
            {/*<CounterWithMoreStates/>*/}
            {/*<CounterAdvanced/>*/}
            {/*<CounterWithCustomHook/>*/}
            {/*<CounterAdvancedWithCustomHook/>*/}
            {/*<CounterWithReducer/>*/}
            {/*<Todo/>*/}
            {/*<OnlineStatus/>*/}
        {/*</Layout>*/}

        <BrowserRouter>
            {/*<Layout>*/}
                <Routes>
                    {/*<Route path="/" element={<HomePage/>}/>*/}
                    <Route element={<RouterLayout/>}>
                        <Route index element={<HomePage/>}/>
                    </Route>

                    {/*<Route path="/name-changer" element={<NameChangerPage/>}/>*/}
                    <Route path="examples?"> //optional segment
                        <Route path="name-changer" element={<NameChangerPage/>}/>
                        <Route path="online-status" element={<OnlineStatusPage/>}/>
                    </Route>
                    <Route path="users/:userId" element={<UserPage/>}/> //dynamic segment
                    <Route path="users" element={<UserPage/>}/>
                    {/*<Route path="files/*" element={<FilePage/>}/>*/}
                </Routes>
            {/*</Layout>*/}
        </BrowserRouter>
    </>
  )
}

export default App
