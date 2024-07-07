import AtomImg from "../../assets/react-core-concepts.png";
import "./Header.css";

export default function Header() {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];

  // Parameters are used during function definition
  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  // Arguments are used during function call
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <>
      <header>
        <img src={AtomImg} alt="Stylized atom" />
        {console.log(AtomImg)}
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </>
  );
}
