import GridGame from "../components/grid-master/grid-game";
import ForumItem from "@/components/items/forumItem";
import DragArea from "../components/grid-master/drag-area";
import useGridPositions from "../hooks/useGridPositions";
import { useState, useEffect } from "react";

export default function Blog() {
    const { positions, handlePositionChange, handleDropItem } = useGridPositions();
    return(
  <section id='blog' className="bg-orange-100">
      <GridGame id="grid-container">
             <DragArea onDropItem={handleDropItem}>
                  <ForumItem id="forum1" startX={positions.forum1.x} startY={positions.forum1.y} onPositionChange={handlePositionChange}>
                      <p className=" text-neutral-700 text-2xl  font-shadowsLight2 font-bold mb-2">lorem ipsum</p>
                      <p className=" text-neutral-700 text-1xl  font-shadowsLight2 mb-2">this is</p>
                      <p className=" text-neutral-700 text-1xl  font-shadowsLight2 mb-2">a post</p>
                  </ForumItem> 
                  <ForumItem id="forum2" startX={positions.forum2.x} startY={positions.forum2.y} onPositionChange={handlePositionChange}>
                        <p className=" text-neutral-700 text-2xl font-shadowsLight2 font-bold mb-2">lorem ipsum</p>
                        <p className=" text-neutral-700 text-1xl font-shadowsLight2">this is</p>
                        <p className=" text-neutral-700 text-1xl font-shadowsLight2">a post</p>
                  </ForumItem> 
                  <ForumItem id="forum3" startX={positions.forum3.x} startY={positions.forum3.y} onPositionChange={handlePositionChange}>
                        <p className=" text-neutral-700 text-2xl font-shadowsLight2 font-bold mb-2">lorem ipsum</p>
                        <p className=" text-neutral-700 text-1xl font-shadowsLight2">this is</p>
                        <p className=" text-neutral-700 text-1xl font-shadowsLight2">a post</p>
                  </ForumItem> 
                  <ForumItem id="forum4" startX={positions.forum4.x} startY={positions.forum4.y} onPositionChange={handlePositionChange}>
                        <p className=" text-neutral-700 text-2xl font-shadowsLight2 font-bold mb-2">lorem ipsum</p>
                        <p className=" text-neutral-700 text-1xl font-shadowsLight2">this is</p>
                        <p className=" text-neutral-700 text-1xl font-shadowsLight2">a post</p>
                  </ForumItem> 
                  <ForumItem id="forum5" startX={positions.forum5.x} startY={positions.forum5.y} onPositionChange={handlePositionChange}>
                        <p className=" text-neutral-700 text-2xl font-shadowsLight2 font-bold mb-2">lorem ipsum</p>
                        <p className=" text-neutral-700 text-1xl font-shadowsLight2">this is</p>
                        <p className=" text-neutral-700 text-1xl font-shadowsLight2">a post</p>
                  </ForumItem> 
                  <ForumItem id="forum6" startX={positions.forum6.x} startY={positions.forum6.y} onPositionChange={handlePositionChange}>
                        <p className=" text-neutral-700 text-2xl font-shadowsLight2 font-bold mb-2">lorem ipsum</p>
                        <p className=" text-neutral-700 text-1xl font-shadowsLight2">this is</p>
                        <p className=" text-neutral-700 text-1xl font-shadowsLight2">a post</p>
                  </ForumItem> 
                  </DragArea>
      </GridGame>
  </section>
)}