import HistorysHub from "./components/historysHub";
import MiddleHub from "./components/middleHub";
import RigthHub from "./components/rigthHub";
import LeftHub from "./components/leftHub";

export default function Home() {
  return (
    <div className=" w-screen flex justify-between bg-hero bg-opacity-100">
      <section className="w-[15.7%] bg-gray-700 bg-opacity-0"><LeftHub /></section>
      <section className="w-[60%] bg-red-400 bg-opacity-40 flex">
        <div>
          <div className="bg-cyan-300 opacity-40">
            <HistorysHub />
          </div>
          <div className="bg-green-400">
            <MiddleHub />
          </div>
        </div>
      </section>
      <section className="w-[20%] bg-blue-400"><RigthHub /></section>
    </div>
  );
}
