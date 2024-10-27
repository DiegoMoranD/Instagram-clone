import Instagram from '../imgs/intagram-text.png'
import Threads from "../Icons/threads";
import newPost from '../Icons/newPost';
import Compas from "../Icons/compas";
import Search from "../Icons/search";
import Burger from '../Icons/burger';
import Heart from '../Icons/heart';
import Reels from '../Icons/reels';
import Home from "../Icons/home";
import Send from "../Icons/send";
import Image from "next/image";
import React from "react";

function leftHub() {
  const menuItems = [
    { icon: Home, label: 'Inicio' },
    { icon: Search, label: 'Buscar' },
    { icon: Compas, label: 'Explorar' },
    { icon: Reels, label: 'Reels' },
    { icon: Send, label: 'Mensajes' },
    { icon: Heart, label: 'Notificaciones' },
    { icon: newPost, label: 'Crear' },
  ]

  return (
    <div className="flex flex-col h-screen text-white p-4 border-r-[1px] border-gray-400 border-opacity-25 fixed w-[300px]">
      <Image src={Instagram} alt="instagram" width={934} height={316} className="w-[95px] my-5 ml-1.5"></Image>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href="#" className="flex items-center space-x-4 py-2 px-2 my-2.5 hover:bg-[#1a1a1a] rounded-lg">
                <item.icon className="w-6 h-6"/>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="flex items-center space-x-4 px-2 py-2 rounded hover:bg-gray-900">
              <Compas className="w-52"></Compas>
              <span>Perfil</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-auto space-y-2">
        <a href="#" className="flex items-center space-x-4 px-2 py-2 rounded hover:bg-gray-900">
          <Threads className="w-6 h-6" />
          <span>Threads</span>
        </a>
        <a href="#" className="flex items-center space-x-4 px-2 py-2 rounded hover:bg-gray-900">
          <Burger className="w-6 h-6" />
          <span>Más</span>
        </a>
      </div>
    </div>
  );
}

export default leftHub;
