import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./search-button.css?inline";

export const SearchButton = component$(() => {
  useStylesScoped$(styles);
  return <button class="search-button">Generar recetas</button>;
});
