import GridGame from "../components/grid-master/grid-game";
import GridDragItem from "../components/grid-master/grid-drag-item";
import DragArea from "../components/grid-master/drag-area";
import useGridPositions from "../hooks/useGridPositions";
import { useState, useEffect } from "react";

export default function About() {
    const { positions, handlePositionChange, handleDropItem } = useGridPositions();
    return(
  <section id='about' className="bg-orange-100">
      <GridGame id="grid-container">
             <DragArea onDropItem={handleDropItem}>
                  <GridDragItem id="item2" startX={positions.item2.x} startY={positions.item2.y} onPositionChange={handlePositionChange}>
                      <p className=" text-neutral-700 text-3xl font-shadowsLight2 mb-4">lorem ipsum</p>
                      <p className=" text-neutral-700 text-5xl font-shadowsLight2 font-bold mb-2 tracking-widest">lorem</p>
                      <p className=" text-neutral-700 text-5xl font-shadowsLight2 font-bold mb-2 tracking-widest">ipsum</p>
                  </GridDragItem> 
                  <GridDragItem id="item3" startX={positions.item3.x} startY={positions.item3.y} onPositionChange={handlePositionChange}>
                        <p className=" text-neutral-700 text-3xl font-shadowsLight2 mb-4">lorem ipsum</p>
                        <p className=" text-neutral-700 text-5xl font-shadowsLight2 font-bold mb-2 tracking-widest">lorem</p>
                        <p className=" text-neutral-700 text-5xl font-shadowsLight2 font-bold mb-2 tracking-widest">ipsum</p>
                  </GridDragItem> 
                  </DragArea>
      </GridGame>
  </section>
)}