import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Tab1 from './Tab1';

const Dish = () => {
  return (
    <div className="dish text-white max-w-[1550px] mx-auto py-20"> {/* Changed 'm-auto' to 'mx-auto' */}
      <div className="top flex justify-between relative">
        <div className="sp">
          <h2>Resto Soup</h2>
          <p>Thursday, 2 FEB 2021</p>
        </div>
        <div className="search border flex items-center px-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" name="" id="" placeholder="Search for food, coffee etc" className="bg-[#191919] text-sm rounded p-2 focus-visible:outline-none" />
        </div>
      </div>
      <div className="bottom my-8">
        <Tabs>
          <TabList borderBottom="1px solid #313131"> {/* Customize the border color */}
            <Tab _selected={{ color: 'red', opacity:0.7 , borderBottomColor: 'red' }}>One</Tab> {/* Customize the color to red when selected */}
            <Tab _selected={{ color: 'red', opacity:0.7 , borderBottomColor: 'red' }}>Two</Tab>
            <Tab _selected={{ color: 'red', opacity:0.7 , borderBottomColor: 'red' }}>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Tab1/>
            </TabPanel>
            <TabPanel>
              <p>Content for Tab Two</p>
            </TabPanel>
            <TabPanel>
              <p>Content for Tab Three</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Dish;
