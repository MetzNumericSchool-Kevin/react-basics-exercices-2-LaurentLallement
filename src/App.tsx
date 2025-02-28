import "./App.css";
import Section from "./components/Section.tsx";
import {BienvenueAventurier} from "./components/BienvenueAventurier.tsx";
import {Inventoria} from "./components/Inventoria.tsx";
import {useState} from "react";

function App() {
  const [isInventoriaOpen, setInventoriaOpen] = useState(false);
  return (
    <div className="container p-5 mb-4 bg-body-tertiary rounded-3">
      <Section id="exercice1">
        <h1>Boutique d'Archibald le Sorcier 🧙‍♂️</h1>
        <BienvenueAventurier id="exercice1.2" >
          <p>
            Bienvenue <b>Aventurier</b>, ici vous pouvez acheter diverses &nbsp;
             <u>potions magiques</u> pour vos aventures !
          </p>
        </BienvenueAventurier>
      </Section>

      <section id="exercice2" className="my-5">
        <h2>Inventoria</h2>
        <button className="btn btn-primary" onClick={() => setInventoriaOpen(!isInventoriaOpen)}>
          {isInventoriaOpen ? "Fermer Inventoria" : "Ouvrir Inventoria"}
          {isInventoriaOpen && <Inventoria />}</button>
      </section>

      <section id="exercice3" className="my-5">
        <h2 className="mb-5">Boutique de potion</h2>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="card col border text-bg-dark bg-dark">
            <div className="card-body">Blabla</div>
            <div className="card-actions">
              <button>Ajouter à Inventoria</button>
            </div>
          </div>
        </div>
      </section>

      <section id="exercice4" className="my-5">
        <h2 className="mb-5">Ajout de potions</h2>

        <form>
          <div className="row">
            <div className="col">
              <label htmlFor="name">Nom de la potion</label>
              <input type="text" className="form-control" id="name" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-primary" type="submit">
                Ajouter à la boutique
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
