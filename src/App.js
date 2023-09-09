import { useRef, useState } from 'react';
import './App.css';
import { Layout } from './components/layout';
import { Main } from './pages/main';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const blockRef = useRef(); // to define sizes of block with DropDown

  function handleTriggerClick(event, menuHeight, menuWidth) {
    const clientHeight = document.documentElement.clientHeight;
    const blockWidth = blockRef.current.clientWidth
    const blockOffsetLeft = blockRef.current.offsetLeft;
    const deltaY = clientHeight - event.clientY;
    const deltaX = blockWidth + blockOffsetLeft - event.clientX;

    setIsOpen(!isOpen);

    // bottom-right (default) menu offset
    if (menuHeight < deltaY && menuWidth < deltaX) {
      setPosition({ top: 0, left: 0 });
    }
    // top-right menu offset
    if (menuHeight > deltaY && menuWidth < deltaX) {
      setPosition({ top: -100, left: 0 });
    }
    // bottom-left menu offset
    if (menuHeight < deltaY && menuWidth > deltaX) {
      setPosition({ top: 0, left: -200 });
    }
    // top-left menu offset
    if (menuHeight > deltaY && menuWidth > deltaX) {
      setPosition({ top: -100, left: -200 });
    }

  }

  return (
    <Layout>
      <Main isOpen={isOpen} handleTriggerClick={handleTriggerClick} position={position} blockRef={blockRef} />
    </Layout>
  );
}

export default App;
