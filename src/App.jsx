import { useState } from 'react'
import './App.css'
import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  console.log('Executing App component');

  // Rules of Hooks:
  // useState must be called on the top level of the component
  // only call Hooks on the top level, inside of component functions
  // useState HOOK, manage component state
  // it produces an array with 2 elements
  // const stateArray = useState('Please click a button');
  // using array destructuring
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');


  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log('selectedTopic: ', selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> */}

            <CoreConcept
              { ...CORE_CONCEPTS[0] }
            />
            <CoreConcept
              { ...CORE_CONCEPTS[1] }
            />
            <CoreConcept
              { ...CORE_CONCEPTS[2] }
            />
            <CoreConcept
              { ...CORE_CONCEPTS[3] }
            />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={ () => handleSelect('components') }
            >
              Components
            </TabButton>

            <TabButton
              onSelect={ () => handleSelect('jsx') }
            >
              JSX
            </TabButton>

            <TabButton
              onSelect={ () => handleSelect('props') }
            >
              Props
            </TabButton>

            <TabButton
              onSelect={ () => handleSelect('state') }
            >
              State
            </TabButton>
          </menu>
          { selectedTopic }
        </section>
      </main>
    </div>
  );
}

export default App
