import { Route, Outlet, link, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <link to="/home">Home</link>
          </li>
          <li>
            <link to="/about">About</link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

function Home() {
  return "Thie is home";
}
function About() {
  return (
    <div>
      <h2>This is about</h2>
    </div>
  );
}
