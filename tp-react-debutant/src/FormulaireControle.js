import { useState } from 'react';

export default function FormulaireControle() {
  const [formData, setFormData] = useState({ nom: '', email: '' });
  const { nom, email } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = ["Nom : " + nom, "Email : " + email].join(", ");
    alert(message);
  };
  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    const key = placeholder.toLowerCase();
    
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nom}
        onChange={handleChange}
        placeholder="Nom"
      />
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Envoyer</button>
    </form>
  );
}