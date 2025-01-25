import { Link, NavLink, Outlet } from "react-router";

import type { Route } from "./+types/admin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RRV7" },
    { name: "description", content: "React Router v7" },
  ];
}

export default function Admin() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-lg font-bold border-b border-gray-700">
          Admin Panel
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <NavLink
            to="/admin/overview"
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-blue-600 px-3 py-2 w-full block rounded-lg"
                : "block px-3 py-2"
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/admin/finances"
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-blue-600 px-3 py-2 w-full block rounded-lg"
                : "block px-3 py-2"
            }
          >
            Finances
          </NavLink>
          <NavLink
            to="/admin/profile"
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-blue-600 px-3 py-2 w-full block rounded-lg"
                : "block px-3 py-2"
            }
          >
            Profile
          </NavLink>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* App Bar */}
        <Link to="/">
          <header className="bg-white shadow p-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Logout
            </button>
          </header>
        </Link>

        {/* Content Area */}
        <main className="flex-1 p-4 overflow-y-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
