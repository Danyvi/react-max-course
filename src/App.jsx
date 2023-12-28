import { useState } from 'react'
import './App.css'
import { CORE_CONCEPTS, EXAMPLES } from './data.js'
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
  const [ selectedTopic, setSelectedTopic ] = useState();


  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log('selectedTopic: ', selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{ EXAMPLES[selectedTopic].title }</h3>
        <p>{ EXAMPLES[selectedTopic].description }</p>
        <pre>
          <code>
            { EXAMPLES[selectedTopic].code }
          </code>
        </pre>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {
              CORE_CONCEPTS.map((conceptItem) => {
                return (
                  <CoreConcept key={conceptItem.title} {...conceptItem} />
                )
              })
            }
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={ selectedTopic === 'components' ? true : false }
              onSelect={ () => handleSelect('components') }
            >
              Components
            </TabButton>

            <TabButton
              isSelected={ selectedTopic === 'jsx' ? true : false }
              onSelect={ () => handleSelect('jsx') }
            >
              JSX
            </TabButton>

            <TabButton
              isSelected={ selectedTopic === 'props' ? true : false }
              onSelect={ () => handleSelect('props') }
            >
              Props
            </TabButton>

            <TabButton
              isSelected={ selectedTopic === 'state' ? true : false }
              onSelect={ () => handleSelect('state') }
            >
              State
            </TabButton>
          </menu>

          { tabContent }

        </section>
      </main>
    </div>
  );
}

export default App
