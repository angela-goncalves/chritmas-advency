import React, { useState } from "react";

export default function ListGifts({
  gift,
  deleteGift,
  open,
  setOpen,
  setEdit,
}: any) {
  //console.log(gift);
  //agregar un booleano al objeto del elemento para saber si fue seleccionado o no. Ej. wantEdit: false

  const onEdit = () => {
    setEdit(gift.id);
    setOpen(!open);
  };
  return (
    <ul>
      <li className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-row">
          {gift.image.length <= 0 ? (
            <p className="w-16">¿image?</p>
          ) : (
            <img
              src={gift.image}
              alt={gift.title}
              className="w-16 rounded-lg mr-2 md:mr-5"
            />
          )}

          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="mr-2 font-semibold">{gift.title}</p>
              {gift.counter <= 0 ? (
                <p className="w-7">x1</p>
              ) : (
                <p className="w-7">x{gift.counter}</p>
              )}
            </div>
            {gift.forPeople.length <= 0 ? (
              <p className="w-24">for who?</p>
            ) : (
              <p className="w-24">For: {gift.forPeople}</p>
            )}
          </div>
        </div>

        <div>
          <button
            onClick={onEdit}
            className="bg-white h-max py-1 px-2 rounded-lg mr-3 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button
            onClick={() => deleteGift(gift.id)}
            className="bg-red-600 h-max py-1 px-2 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </li>
    </ul>
  );
}
