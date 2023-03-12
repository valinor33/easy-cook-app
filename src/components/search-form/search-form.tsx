import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { SearchInput } from "../search-input/search-input";

import styles from "./search-form.css?inline"

export const SearchForm = component$(() => {
  useStylesScoped$(styles);

    return <div class='search-form-wrapper'>
        <SearchInput />
    </div>
})