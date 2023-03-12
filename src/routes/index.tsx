import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Header from '~/components/header/header';
import { SearchForm } from '~/components/search-form/search-form';
// import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class='home-wrapper'>
     <Header />
     <SearchForm />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'EasyCook App',
  meta: [
    {
      name: 'description',
      content: 'App for generate recipes using IA',
    },
  ],
};
