import AtomImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
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

// Normally we pass and use props with a single parameter
// function CoreConcept(props) {
// But we can also destructure the data passed from REST operator & props and this will work with both.
function CoreConcept({ title: TITLE, image: IMAGE, description: DESCRIPTION }) {
  const altText = "No image found";
  return (
    <>
      <li>
        <img src={IMAGE} alt={altText} />
        <h3>{TITLE}</h3>
        <p>{DESCRIPTION}</p>
      </li>
    </>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            {/* REST operator, which is also being passed as props here*/}
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

// Props: "Custom HTML attributes" set on Components
// In our scenario: CoreConcept has props "title, description and image"("Custom HTML attributes")

// React merges all props into a single object, and is passed in the functional component as the first argument
// In our scenario: { title: 'Components', description:'Core UI'}

// Props are being used in CoreConcept functional component, where it is being called

// If the object and the props has same exact key name, then we can also use the rest operator to call and output the data
// As used in the CoreConcept component
