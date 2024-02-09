import React from 'react';

const ingredients: string[] = ['farine', 'lait', 'oeuf'];

const App = () => {
  return (
    <>
      <header>
        <h1>Titre du header</h1>
      </header>
      <main>
        <h2>Titre du main</h2>
        <h3>Liste de course</h3>
        <ul>
          {ingredients.map((ingredient, key) => (
            <li key={key}>{ingredient}</li>
          ))}
        </ul>
      </main>
      <footer>
        <h1>Titre footer</h1>
        <p>Texte du Footer</p>
      </footer>
    </>
  );
};

export default App;
