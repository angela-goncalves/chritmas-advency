import React from "react";
import { GiftsTypes } from "..//types";

export default function ListGifts({ gifts }: any) {
  return (
    <ul>
      <li>{gifts}</li>
    </ul>
  );
}
