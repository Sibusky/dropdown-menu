import { useState } from 'react';
import './App.css';
import { Layout } from './components/layout';
import { Main } from './pages/main';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  function handleTriggerClick(e) {
    const clientHeight = document.documentElement.clientHeight;
    // const clientWidth = document.documentElement.clientWidth;
    const blockWidth = 1100;
    const blockOffsetLeft = (1400 - 1100) / 2;
    const menuHeight = 60;
    const menuWidth = 100;

    setIsOpen(!isOpen);
    // bottom-right menu offset
    if (menuHeight < clientHeight - e.clientY && menuWidth < blockWidth + blockOffsetLeft - e.clientX) {
      setPosition({ top: 0, left: 0 });
    }
    // top-right menu offset
    if (menuHeight > clientHeight - e.clientY && menuWidth < blockWidth + blockOffsetLeft - e.clientX) {
      setPosition({ top: -100, left: 0 });
    }

    // bottom-left menu offset
    if (menuHeight < clientHeight - e.clientY && menuWidth > blockWidth + blockOffsetLeft - e.clientX) {
      setPosition({ top: 0, left: -100 });
    }
    // top-left menu offset
    if (menuHeight > clientHeight - e.clientY && menuWidth > blockWidth + blockOffsetLeft - e.clientX) {
      setPosition({ top: -100, left: -100 });
    }

    // console.log(e.clientX, 'e.clientX')

    // console.log(blockWidth + blockOffsetLeft - e.clientX)

    // console.log(e.clientX, 'clientX')
    // console.log(e.clientY, 'clientY')
    // console.log(e.pageX, 'pageX')
    // console.log(e.pageY, 'pageY')
    // console.log(document.documentElement.clientHeight)
  }

  return (
    <Layout>
      <Main isOpen={isOpen} handleTriggerClick={handleTriggerClick} position={position} />
    </Layout>
  );
}

export default App;
