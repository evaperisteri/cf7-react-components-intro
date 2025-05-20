type Props = {
    title: string;
}

const ArrowFunctionalCompWithProps = ({title: Props}) => {
    return <h1 className="text-center mt-12 text-xl font-bold">{title}</h1>
}
export default ArrowFunctionalCompWithProps;