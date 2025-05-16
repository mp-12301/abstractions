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
        <li>
          <NavLink to="react/use-effect-when">use-effect-when</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
