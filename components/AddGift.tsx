import React, { useState } from "react";
import { GiftsTypes } from "../types";

export default function AddGift({
  edit,
  gifts,
  setGifts,
  setOpen,
  setEdit,
}: any) {
  const [title, setTitle] = useState("");
  const [forPeople, setForPeople] = useState("");
  const [counter, setCounter] = useState("0");
  const [image, setImage] = useState("");
  const [randomValue, setRandomValue] = useState("");

  const submitGifts = (e: any) => {
    e.preventDefault();
    if (title.length <= 0) {
      return;
    }

    const id: number = Math.floor(Math.random() * 1000) + 1;

    setTitle("");
    setCounter("");
    setImage("");
    setForPeople("");
    setOpen(false);
    const findGift = gifts.findIndex((item: GiftsTypes) => item.id === edit.id);

    // console.log(gifts, findGift, edit);
    if (findGift > -1) {
      const editGift = gifts.map((item: GiftsTypes) => {
        if (item.id === edit.id) {
          return {
            ...item,
            id: edit.id,
            title,
            forPeople,
            counter,
            image,
          };
        }
        return item;
      });
      setGifts(editGift);
      window.localStorage.setItem("gifts", JSON.stringify(editGift));
      setEdit("");
    } else {
      setGifts([{ id, title, forPeople, counter, image }, ...gifts]);
      window.localStorage.setItem(
        "gifts",
        JSON.stringify([{ id, title, forPeople, counter, image }, ...gifts])
      );
    }
  };

  const randomGift = () => {
    const randomGifts = [
      "socks",
      "airpods",
      "t-shirt",
      "trousers",
      "hat",
      "shoes",
      "book",
      "phone",
      "watch",
      "toy",
      "blocks",
      "candles",
      "frame",
      "tablet",
      "watch",
    ];
    const randomIndex = Math.floor(Math.random() * randomGifts.length);
    const valueRandomGift = randomGifts[randomIndex];
    //console.log(valueRandomGift);
    setTitle(valueRandomGift);
  };

  return (
    <form
      onSubmit={submitGifts}
      className="flex flex-col w-full text-white font-typography"
    >
      <div>
        <label>Add gifts:</label>
        <div className="flex justify-between">
          <input
            type="text"
            name="title"
            placeholder="add a new gift"
            onChange={(e) => setTitle(e.target.value)}
            value={title || edit.title}
            className="w-32 h-11 rounded-lg border-2 p-2 focus:outline-none text-black"
          />
          <button
            onClick={randomGift}
            type="button"
            className="text-cyan-600 rounded-lg bg-gray-100 p-2 px-3 focus:outline-none"
          >
            Random Gift!
          </button>
        </div>
      </div>
      <div className="mt-2">
        <label className="text-white">For:</label>
        <input
          type="text"
          name="toPeople"
          placeholder="for?"
          onChange={(e) => setForPeople(e.target.value)}
          value={forPeople || edit.forPeople}
          className="w-full rounded-lg border-2 p-2 focus:outline-none text-black"
        />
      </div>
      <div className="mt-2">
        <label>How many gifts?</label>
        <input
          type="number"
          name="counter"
          placeholder="0"
          onChange={(e) => setCounter(e.target.value)}
          value={counter || edit.counter}
          className="w-full border-2 py-2 px-1 rounded-lg focus:outline-none text-black"
        />
      </div>
      <div className="mt-2">
        <label>Image's URL of the gift</label>
        <input
          type="url"
          name="url"
          placeholder="https://imageOfGift.com"
          value={image || edit.image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border-2 py-2 px-1 rounded-lg focus:outline-none text-black"
        />
      </div>
      <button type="submit" className="mt-4 rounded-lg bg-green-500 p-2">
        Add
      </button>
    </form>
  );
}
