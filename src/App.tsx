// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalCompWithProps from "./components/ArrowFunctionalCompWithProps.tsx";
import ArrowFunctionalCompWithPropsType from "./components/ArrowFunctionalCompWithPropsType.tsx";

function App() {


  return (
    <>
        {/*<ClassComponent/>*/}
        {/*<FunctionalComponent/>*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalCompWithProps title="is an Arrow FunctionalComponent with props" />*/}
        <ArrowFunctionalCompWithPropsType title={"It is an Arrow FunctionalComponent with props"} description={"this is a description"}/>
    </>
  )
}

export default App
