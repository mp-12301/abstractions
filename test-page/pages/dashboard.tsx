import { NavLink, Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h3>Abstractions - Test Playground</h3>
      <p>React</p>
      <ul>
        <li>
          <NavLink to="react/use-store">use-store</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
