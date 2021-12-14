import React, { useState } from "react";

export default function AddGift({ addGifts }: any) {
  const [title, setTitle] = useState("");
  const [toPeople, setToPeople] = useState("");
  const [counter, setCounter] = useState("0");
  const [image, setImage] = useState("");

  const submitGifts = (e: any) => {
    e.preventDefault();
    if (title.length <= 0) {
      return;
    }
    addGifts({ title, counter, image, toPeople });
    setTitle("");
    setCounter("0");
    setImage("");
    setToPeople("");
  };
  return (
    <form onSubmit={submitGifts} className="flex flex-col w-full text-white">
      <div>
        <label>Add gifts:</label>
        <input
          type="text"
          name="title"
          placeholder="add a new gift"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="w-full rounded-lg border-2 border-red-700 p-2 focus:outline-none text-black"
        />
      </div>
      <div className="mt-2">
        <label className="text-white">The receiver:</label>
        <input
          type="text"
          name="toPeople"
          placeholder="to whom?"
          onChange={(e) => setToPeople(e.target.value)}
          value={toPeople}
          className="w-full rounded-lg border-2 border-red-700 p-2 focus:outline-none text-black"
        />
      </div>
      <div className="mt-2">
        <label>How many gifts?</label>
        <input
          type="number"
          name="counter"
          value={counter}
          onChange={(e) => setCounter(e.target.value)}
          className="w-full border-2 border-red-700 py-2 px-1 rounded-lg focus:outline-none text-black"
        />
      </div>
      <div className="mt-2">
        <label>URL of the gift</label>
        <input
          type="url"
          name="url"
          value={image}
          placeholder="https://imageOfGift.com"
          onChange={(e) => setImage(e.target.value)}
          className="w-full border-2 border-red-700 py-2 px-1 rounded-lg focus:outline-none text-black"
        />
      </div>
      <input
        type="submit"
        className="mt-2 rounded-lg border-2 bg-red-600 border-red-700 p-2 focus:ring-red-500 "
        value="Agregar:"
      />
    </form>
  );
}
