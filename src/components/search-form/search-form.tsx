import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { IngredientList } from "../ingredients-list/ingredients-list";
import { SearchInput } from "../search-input/search-input";

import styles from "./search-form.css?inline"

export const SearchForm = component$(() => {
  useStylesScoped$(styles);

    return <div class='search-form-wrapper'>
        <SearchInput />
        <IngredientList/>
    </div>
})