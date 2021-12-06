import React from "react";

export default function AddGift() {
  return (
    <form>
      <input
        type="text"
        placeholder="add a new gift"
        className="rounded-lg border-2 border-red-700 p-2 focus:outline-none"
      />
      <input
        type="submit"
        className="rounded-lg border-2 bg-red-600 border-red-700 p-2 focus:ring-red-500"
        value="Agregar:"
      />
    </form>
  );
}
