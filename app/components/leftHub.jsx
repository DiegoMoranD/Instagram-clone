import NewPost from "../Icons/newPost";
import Threads from "../Icons/threads";
import Search from "../Icons/search";
import Compas from "../Icons/compas";
import Home from "../Icons/home";
import React from "react";

function leftHub() {
  return (
    <div>
      <div className="text-white size-10">
        <div className="">
          <Home></Home> Inicio
        </div>
        <div>
          <Search></Search> Buscar
        </div>
        <div>
          <NewPost /> Crear
        </div>
        <div>
          <Compas /> Explorar
        </div>
        <div>
          <Threads /> Threads
        </div>
      </div>
    </div>
  );
}

export default leftHub;
