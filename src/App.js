import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Layout } from './components/layout';
import { Main } from './pages/main';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState('');
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const blockRef = useRef(); // to define sizes of block that contain DropDown

  useEffect(() => {
    const closeByEsc = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', closeByEsc);
    return () => document.removeEventListener('keydown', closeByEsc);
  }, []);

  function handleTriggerClick(event, menuHeight, menuWidth, triggerHeight, triggerWidth) {
    const clientHeight = document.documentElement.clientHeight;
    const blockWidth = blockRef.current.clientWidth;
    const blockOffsetLeft = blockRef.current.offsetLeft;
    const deltaY = clientHeight - event.clientY - triggerHeight;
    const deltaX = blockWidth + blockOffsetLeft - event.clientX - triggerWidth;

    setIsOpen(true);
    setIsClicked(event.target.id);

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

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <Layout>
      <Main
        isOpen={isOpen}
        isClicked={isClicked}
        handleTriggerClick={handleTriggerClick}
        handleClose={handleClose}
        position={position}
        blockRef={blockRef}
      />
    </Layout>
  );
}

export default App;
