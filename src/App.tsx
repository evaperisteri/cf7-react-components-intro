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
import HomePage from "@/pages/HomePage.tsx";
//import HomePage from "./pages/HomePage.tsx";
//import NameChangerPage from "./pages/NameChangerPage.tsx";
//import Layout from "./components/Layout.tsx";
//import OnlineStatus from "./components/OnlineStatus.tsx";
//import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
//import UserPage from "./pages/UserPage.tsx";
// import RouterLayout from "./components/RouterLayout.tsx";
//import ExamplesPage from "./pages/ExamplesPage.tsx";
//import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
//import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
//import MultiFieldFormWithZodValidation from "./components/MultiFieldFormWithZodValidation.tsx";
//import MultiFieldFormWithReactHook from "./components/MultiFieldFormWithReactHook.tsx";
// import Product from "@/pages/ProductPage.tsx"
import ProductListPage from "@/pages/ProductListPage.tsx";
//import FocusInput from "./components/FocusInput.tsx";
//import UncontrolledInput from "./components/UncontrolledInput.tsx";
//import MultiFieldForm from "./components/MultiFieldForm.tsx";
//import MultiFieldFormWithValidation from "./components/MultiFieldFormWithValidation.tsx";

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
                    <Route element={<Layout />}>

                        {/*<Route path="/" element={<HomePage/>}/>*/}
                        {/*<Route element={<RouterLayout/>}>*/}
                            {/*<Route index element={<HomePage/>}/>*/}
                            {/*<Route index element={<FocusInput/>}/>*/}
                            {/*<Route index element={<UncontrolledInput/>}/>*/}
                            {/*<Route index element={<MultiFieldForm/>}/>*/}
                            {/*<Route index element={<MultiFieldFormWithValidation/>}/>*/}
                            {/*<Route index element={<MultiFieldFormWithZodValidation/>}/>*/}
                        {/*    <Route index element={<MultiFieldFormWithReactHook/>}/>*/}
                        {/*    <Route path="users/:userId" element={<UserPage/>}/> //dynamic segment*/}
                        {/*    <Route path="users" element={<UserPage/>}/>*/}
                        {/*</Route>*/}

                        {/*/!*<Route path="/name-changer" element={<NameChangerPage/>}/>*!/*/}
                        {/*/!*<Route path="examples?"> //optional segment*!/*/}
                        {/*<Route element={<RouterExamplesLayout/>}>*/}
                        {/*    <Route path="examples">*/}
                        {/*        <Route index element={<ExamplesPage/>}/>*/}
                        {/*        <Route path="name-changer" element={<NameChangerPage/>}/>*/}
                        {/*        <Route path="online-status" element={<OnlineStatusPage/>}/>*/}
                        {/*        <Route path="auto-redirect" element={<AutoRedirectPage/>}/>*/}
                        {/*    </Route>*/}
                        {/*</Route>*/}

                        {/*/!*<Route path="files/*" element={<FilePage/>}/>*!/*/}
                        {/*<Route path="*" element={<NotFoundPage/>}/>*/}
                        <Route index element={<HomePage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="products" element={<ProtectedRoute/>}>
                            <Route index element={<ProductListPage/>}/>
                            <Route path="new" element={<ProductPage mode="create"/>}/>
                            <Route path=":productId" element={<ProductPage mode="edit"/>}/>
                        </Route>
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            {/*</Layout>*/}
        </BrowserRouter>
    </>
  )
}

export default App
