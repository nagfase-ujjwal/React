import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES, CORE_CONCEPTS } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function selectHandler(selectedButton) {
    // selectedButton => "Components" "JSX" "Props"
    // console.log("Hello World - selected", selectedButton);
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  console.log("APP component being executed");
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}

            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} /> */}
            {/* REST operator, which is also being passed as props here*/}
            {/* <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => selectHandler("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => selectHandler("jsx")}
            >
              Jsx
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => selectHandler("state")}
            >
              State
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => selectHandler("props")}
            >
              Props
            </TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3> {EXAMPLES[selectedTopic].title} </h3>
              <p> {EXAMPLES[selectedTopic].description} </p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
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

// React will only execute a component function once when it's first encountered
