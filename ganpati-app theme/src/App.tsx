import { useState } from "react";
import NavBar from "./components/NavBar";
import GanpatiForm from "./components/GanpatiForm";
import BannerForm from "./components/Banner";

export default function App() {
  const [isOffline] = useState(false);

  if (isOffline) {
    return (
      <>
        <NavBar />
        <h1 className="text-center mt-32 text-2xl font-bold text-red-600">
          You are Offline
        </h1>
      </>
    );
  }

  return (
    <>
      <div className="w-full min-h-screen bg-yellow-100">
        <NavBar />
        <div className="pt-24">
          <BannerForm />
          <GanpatiForm />
        </div>
      </div>
    </>
  );
}
