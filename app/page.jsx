import MiddleHub from "./components/middleHub";
import RigthHub from "./components/rigthHub";
import LeftHub from "./components/leftHub";

export default function Home() {
  return (
    <div className="flex justify-between">
      <section className=" bg-opacity-0"><LeftHub /></section>
      <section className="bg-opacity-40">
          <MiddleHub />
      </section>
      <section className=" bg-blue-400"><RigthHub /></section>
    </div>
  );
}
