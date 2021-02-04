import Head from "next/head";
import { Nav } from "./components";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white">
      <Nav />
    </div>
  );
}
