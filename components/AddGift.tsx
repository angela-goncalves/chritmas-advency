import React, { useState } from "react";
import { GiftsTypes } from "../types";

export default function AddGift({
  edit,
  gifts,
  setGifts,
  setOpen,
  setEdit,
  duplicate,
  add,
  setAdd,
  setDuplicate,
}: any) {
  const [title, setTitle] = useState("");
  const [forPeople, setForPeople] = useState("");
  const [counter, setCounter] = useState(0);
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  console.log(duplicate.title);

  const submitGifts = (e: any) => {
    e.preventDefault();

    const id: number = Math.floor(Math.random() * 1000) + 1;
    const total: number = counter * price;

    setTitle("");
    setCounter(0);
    setImage("");
    setForPeople("");
    setOpen(false);
    setEdit("");
    setAdd(false);
    setDuplicate("");

    const findGift = gifts.findIndex((item: GiftsTypes) => item.id === edit.id);

    console.log(gifts, findGift, edit);
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
            price,
            total,
          };
        }
        return item;
      });
      setGifts(editGift);
      window.localStorage.setItem("gifts", JSON.stringify(editGift));
      setEdit("");
    } else {
      if (title.length <= 0) {
        return;
      }
      setGifts([
        { id, title, forPeople, counter, image, price, total },
        ...gifts,
      ]);
      window.localStorage.setItem(
        "gifts",
        JSON.stringify([
          { id, title, forPeople, counter, image, price, total },
          ...gifts,
        ])
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
            value={title || duplicate.title || edit.title}
            className="w-32 h-11 rounded-lg border-2 p-2 focus:outline-none focus-visible:ring-gray-400 focus-visible:ring-2 text-black"
          />
          <button
            onClick={randomGift}
            type="button"
            className="p-2 px-3 text-cyan-600 rounded-lg bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
          >
            Random Gift!
          </button>
        </div>
      </div>
      <div className="mt-2">
        <label className="text-white">For:</label>
        <input
          type="text"
          name="forPeople"
          placeholder="for?"
          onChange={(e) => setForPeople(e.target.value)}
          value={forPeople || duplicate.forPeople || edit.forPeople}
          className="w-full rounded-lg border-2 p-2 focus:outline-none focus-visible:ring-gray-400 focus-visible:ring-2 text-black"
        />
      </div>
      <div className="mt-2">
        <label>How many gifts?</label>
        <input
          type="number"
          name="counter"
          placeholder="1"
          onChange={(e) => setCounter(Number(e.target.value))}
          value={counter || duplicate.counter || edit.counter}
          className="w-full border-2 py-2 px-1 rounded-lg focus:outline-none focus-visible:ring-gray-400 focus-visible:ring-2 text-black"
        />
      </div>
      <div className="mt-2">
        <label>Image's URL of the gift</label>
        <input
          type="url"
          name="url"
          placeholder="https://imageOfGift.com"
          onChange={(e) => setImage(e.target.value)}
          value={image || duplicate.image || edit.image}
          className="w-full border-2 py-2 px-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 text-black"
        />
      </div>
      <div className="mt-2">
        <label>Price</label>
        <input
          type="number"
          name="price"
          placeholder="$$$"
          onChange={(e) => setPrice(Number(e.target.value))}
          value={price || duplicate.price}
          className="w-full border-2 py-2 px-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 text-black"
        />
      </div>
      <input
        type="submit"
        className="mt-4 rounded-lg bg-green-500 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-800"
        value="Add"
      />
    </form>
  );
}
