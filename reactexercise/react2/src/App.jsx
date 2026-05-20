// import HeroSection from "./HeroSection";
import Welcome from "./welcome";

const students = [
  {name: "harry" ,  age:"32"},
  {name: "harry",  age:"22"},
  {name: "harry" , age:"62"}
];

function Pen() {
  return(
    <>
      <Welcome students={students}/>
    </>
  );
}
export default Pen;