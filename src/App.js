import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from './pages/Detail';
import styled from 'styled-components';
import'./App.css'

const Root = styled.div`
  background-color: #141115;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Root className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Root>
  );
}

export default App;
