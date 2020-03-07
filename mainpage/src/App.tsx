import React from 'react';
import { AppInfo } from './helper/AppInfo'
import { ProjectBlock } from './blocks/ProjectBlock'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to magical.rocks! </h1>
      </header>
      <main className="projects">
        <ProjectBlock title="Fancy Mumble Web" href="https://mumble.magical.rocks">
          <a href="https://mumble.magical.rocks" title="Fancy Mumble Web" rel="noopener">Fancy Mumble Web</a> is a Web Client for Mumble with some improved functionalities like link preview and better large image support.
        </ProjectBlock>
        <ProjectBlock title="A4963 Flashing Software" href="https://github.com/SetZero/A4963">
          This is an unofficial free A4963 flashing Software for Linux. This Software was written in C++17. It uses LibUSB for device communication and supports different USB to SPI Bridges for direct communication with the A4963.
        </ProjectBlock>
        <ProjectBlock title="AVR Generic Bootloader" href="https://github.com/firmware-loader">
          This Project was a proof of concept to show that it is possible to write a Bootloader with minimal Hardware requirements for a microcontroller. It was initially tested on an Atmega328p and an SAMC21 from Microchip.
        </ProjectBlock>
      </main>
      <footer className="App-info">
        <AppInfo />
      </footer>
    </div>
  );
}

export default App;
