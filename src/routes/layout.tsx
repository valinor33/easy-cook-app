import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
// import { routeLoader$ } from '@builder.io/qwik-city';


// export const useServerTimeLoader = routeLoader$(() => {
//   return {
//     date: new Date().toISOString(),
//   };
// });

import styles from "./layout.css?inline"

export default component$(() => {
  useStylesScoped$(styles);

  
  // const serverTime = useServerTimeLoader();
  return (
    <div class='wrapper'>
      <main>
          <Slot />
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );
});
