import { useRef } from 'react';

export default function FormulaireNonControle() {
  const nomRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const nom = formData.get('nom');
    const email = formData.get('email');
    
    console.log("Données traitées");
    alert("Nom : " + nom + ", Email : " + email);
  };

  return (
    <form onSubmit={handleSubmit}>      <input type="text" ref={nomRef} name="nom" placeholder="Nom" />
      <input type="email" ref={emailRef} name="email" placeholder="Email" />
      <button type="submit">Envoyer</button>
    </form>
  );
}