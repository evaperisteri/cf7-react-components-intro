// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
//import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
//import ArrowFunctionalCompWithProps from "./components/ArrowFunctionalCompWithProps.tsx";
//import ArrowFunctionalCompWithPropsType from "./components/ArrowFunctionalCompWithPropsType.tsx";

// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";

import Layout from "./components/Layout.tsx";
import Todo from "./components/Todo/Todo.tsx";
//import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
//import CounterWithReducer from "./components/CounterWithReducer.tsx";
//import CounterAdvanced from "./components/CounterAdvanced.tsx";
//import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
//import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
//import NameChanger from "./components/NameChanger.tsx";
//import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
//import Counter from "./components/Counter.tsx";
//import FunctionalComponent from "./components/FunctionalComponent.tsx";
//import ClassComponentWithState from "./components/ClassComponentWithState.tsx";

function App() {


  return (
    <>
        {/*<ClassComponent/>*/}
        {/*<FunctionalComponent/>*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalCompWithProps title="is an Arrow FunctionalComponent with props" />*/}
        {/*<ArrowFunctionalCompWithPropsType title={"It is an Arrow FunctionalComponent with props"} description={"this is a description"}/>*/}
        {/*<CodingFactoryLogo/>*/}
        <Layout>
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
            <Todo/>
        </Layout>
    </>
  )
}

export default App
