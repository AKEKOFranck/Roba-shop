"use client";

import Image from "next/image";
import {
  FiPhone,
  FiMail,
  FiInstagram,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

import styles from "./footer.module.css";

export default function Footer() {

  // =========================
  // NUMÉRO WHATSAPP VENDEUSE
  // =========================

  const sellerPhone = "2250574449041";


  // =========================
  // ENVOI DU FORMULAIRE
  // =========================

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const nom = form.nom.value.trim();
    const prenom = form.prenom.value.trim();
    const telephone = form.telephone.value.trim();
    const demande = form.message.value.trim();


    // Vérification
    if (!nom || !prenom || !telephone || !demande) {
      alert("Veuillez remplir tous les champs.");
      return;
    }


    // Message envoyé à la vendeuse
    const message = `
Bonjour Roba Shop 👋

Je souhaite vous contacter concernant votre boutique.

👤 Nom : ${nom}
👤 Prénom : ${prenom}
📱 Numéro : ${telephone}

💬 Ma demande :
${demande}

Merci.
    `.trim();


    // Encodage du message
    const encodedMessage = encodeURIComponent(message);


    // Ouverture de WhatsApp
    const whatsappUrl = `https://wa.me/${sellerPhone}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");


    // Réinitialiser le formulaire
    form.reset();
  };


  return (
    <footer className={styles.footer}>

      <div className={styles.glow}></div>


      <div className={styles.container}>

        {/* =========================
            CONTACT
        ========================= */}

        <div className={styles.contactSection}>

          <div className={styles.heading}>

            <p className={styles.smallTitle}>
              UNE QUESTION ?
            </p>

            <h2>
              Contactez
              <span> Roba Shop</span>
            </h2>

            <p className={styles.description}>
              Une question sur un article, une commande ou
              besoin d’un conseil ? Écrivez-nous directement.
            </p>

          </div>


          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >

            <div className={styles.row}>

              <div className={styles.inputGroup}>

                <label htmlFor="nom">
                  Nom
                </label>

                <input
                  id="nom"
                  name="nom"
                  type="text"
                  placeholder="Votre nom"
                  required
                />

              </div>


              <div className={styles.inputGroup}>

                <label htmlFor="prenom">
                  Prénom
                </label>

                <input
                  id="prenom"
                  name="prenom"
                  type="text"
                  placeholder="Votre prénom"
                  required
                />

              </div>

            </div>


            <div className={styles.inputGroup}>

              <label htmlFor="telephone">
                Numéro de téléphone
              </label>

              <input
                id="telephone"
                name="telephone"
                type="tel"
                placeholder="+225 XX XX XX XX XX"
                required
              />

            </div>


            <div className={styles.inputGroup}>

              <label htmlFor="message">
                Votre demande
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Comment pouvons-nous vous aider ?"
                required
              />

            </div>


            <button
              type="submit"
              className={styles.submit}
            >

              <span>
                Envoyer ma demande
              </span>

              <FiSend />

            </button>

          </form>

        </div>


        {/* =========================
            LOGO + INFORMATIONS
        ========================= */}
<div className={styles.brandSection}>

  <div className={styles.logoWrapper}>

    <Image
      src="/LogoPerfume.png"
      alt="Roba Shop"
      width={220}
      height={220}
      className={styles.logo}
    />

  </div>

</div>

      </div>


      {/* =========================
          BAS DU FOOTER
      ========================= */}

      <div className={styles.bottom}>

        <p>
          © {new Date().getFullYear()} Roba Shop.
          Tous droits réservés.
        </p>

        <p>
          L’élégance commence par vous.
        </p>

      </div>

    </footer>
  );
}