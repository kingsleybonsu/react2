// import HeroSection from "./HeroSection";

function Welcome(props) {
    return (
        <>
        {props.students.map((ind) => {
        return <h1>{ind.name} is {ind.age} years old</h1>
        })}
        </>
    )
}
export default Welcome;
