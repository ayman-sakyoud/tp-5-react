import { useContext, useMemo } from 'react';
import { UtilisateurContext } from './UtilisateurContext';

export default function Profil() {
  const { utilisateur, setUtilisateur } = useContext(UtilisateurContext);
  const etatProfil = useMemo(() => {
    return {
      estConnecte: !!(utilisateur && utilisateur.connecte),
      nomAffiche: utilisateur?.nom ?? 'Invité'
    };
  }, [utilisateur]);

  const deconnexion = () => {
    setUtilisateur((prev) => ({
      ...prev,
      nom: '',
      connecte: false
    }));
  };

  return (
    <div>
      {etatProfil.estConnecte ? (
        <>
          <p>Bienvenue, {etatProfil.nomAffiche}</p> 

          <button onClick={deconnexion}>Se déconnecter</button>
        </>
      ) : (
        <p>Veuillez vous connecter.</p>
      )}
    </div>
  );
}