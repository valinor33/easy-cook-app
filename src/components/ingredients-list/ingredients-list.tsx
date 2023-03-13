import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./ingredients-list.css?inline"

export const IngredientList = component$(() => {
    useStylesScoped$(styles)
  return <div class='ingredients-list-wrapper'>
    <h3>Ingredientes seleccionados:</h3>
    <ul>
        <li>Pollo</li>
        <li>Arroz</li>
        <li>Huevos</li>
    </ul>
  </div>;
});
