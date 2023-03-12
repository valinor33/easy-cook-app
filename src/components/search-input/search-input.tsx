import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./search-input.css?inline";

export const SearchInput = component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Buscar ingredientes..."
      />
    </>
  );
});
