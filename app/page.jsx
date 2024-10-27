import MiddleHub from "./components/middleHub";
import RigthHub from "./components/rigthHub";
import LeftHub from "./components/leftHub";

export default function Home() {
  return (
    <div className=" w-screen flex justify-between ">
      <section className="w-[15.7%] bg-opacity-0"><LeftHub /></section>
      <section className="w-[60%] bg-opacity-40">
          <MiddleHub />
      </section>
      <section className="w-[10%] bg-blue-400"><RigthHub /></section>
    </div>
  );
}
