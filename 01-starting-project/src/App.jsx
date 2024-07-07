import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  function selectHandler() {
    console.log("Hello World - selected");
  }

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

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={selectHandler}>Components</TabButton>
            <TabButton onSelect={selectHandler}>Jsx</TabButton>
            <TabButton onSelect={selectHandler}>Props</TabButton>
            <TabButton onSelect={selectHandler}>State</TabButton>
          </menu>
          Dynamic Content
        </section>
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

// TabButton Custom Component: using a concept called "Component Composition"
// Component Composition: Where a component wraps component or other content, as used in "TabBUtton"
