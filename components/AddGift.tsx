import React, { useState } from "react";
import { GiftsTypes } from "../types";

export default function AddGift({
  addGifts,
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
  //traer el prev

  const submitGifts = (e: any) => {
    e.preventDefault();
    if (title.length <= 0) {
      return;
    }

    const id: number = Math.floor(Math.random() * 1000) + 1;

    setTitle("");
    setCounter("0");
    setImage("");
    setForPeople("");
    setOpen(false);

    const findGift = gifts.findIndex((item: GiftsTypes) => item.id === edit);

    console.log(gifts, findGift, edit);
    if (findGift > -1) {
      const editGift = gifts.map((item: GiftsTypes) => {
        if (item.id === edit) {
          return {
            ...item,
            id: edit,
            title,
            forPeople,
            counter,
            image,
          };
        }
        return item;
      });
      setGifts(editGift);
      console.log(editGift);
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

  return (
    <form
      onSubmit={submitGifts}
      className="flex flex-col w-full text-white font-typography"
    >
      <div>
        <label>Add gifts:</label>
        <input
          type="text"
          name="title"
          placeholder="add a new gift"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="w-full rounded-lg border-2 p-2 focus:outline-none text-black"
        />
      </div>
      <div className="mt-2">
        <label className="text-white">For:</label>
        <input
          type="text"
          name="toPeople"
          placeholder="for?"
          onChange={(e) => setForPeople(e.target.value)}
          value={forPeople}
          className="w-full rounded-lg border-2 p-2 focus:outline-none text-black"
        />
      </div>
      <div className="mt-2">
        <label>How many gifts?</label>
        <input
          type="number"
          name="counter"
          value={counter}
          onChange={(e) => setCounter(e.target.value)}
          className="w-full border-2 py-2 px-1 rounded-lg focus:outline-none text-black"
        />
      </div>
      <div className="mt-2">
        <label>Image's URL of the gift</label>
        <input
          type="url"
          name="url"
          value={image}
          placeholder="https://imageOfGift.com"
          onChange={(e) => setImage(e.target.value)}
          className="w-full border-2 py-2 px-1 rounded-lg focus:outline-none text-black"
        />
      </div>
      <input
        type="submit"
        className="mt-4 rounded-lg bg-green-500 p-2"
        value="Add"
      />
    </form>
  );
}
