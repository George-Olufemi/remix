import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RRV7" },
    { name: "description", content: "React Router v7" },
  ];
}

export default function Home() {
  return (
    <>
      <Link className="bg-blue-300 px-5 py-3" to="/admin/overview">Dashboard</Link>
    </>
  );
}
