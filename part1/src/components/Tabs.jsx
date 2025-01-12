import Homepage from "./pages/Homepage.jsx"
import Draggin from "./pages/Draggin.jsx"
import React, { useState } from 'react';
 
const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState('tab1');
  
    return (
      <div>
        <div style={{ display: 'flex', borderBottom: '2px solid black', marginBottom: '10px' }}>
          <button
            className={`tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab1')}
          >
            Home
          </button>
          <button
            className={`tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab2')}
          >
            Tab 2
          </button>
          {/* <button
            className={`tab-button ${activeTab === 'tab3' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab3')}
          >
            Tab 3
          </button> */}
        </div>
        <div className="tab-content">
          {activeTab === 'tab1' && <Homepage counter={props} />}
          {activeTab === 'tab2' && <Draggin />}
          {/* {activeTab === 'tab3' && <p>Welcome to Tab 3!</p>} */}
        </div>
      </div>
    );
  };

  export default Tabs