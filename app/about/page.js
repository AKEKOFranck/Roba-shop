import styles from "./page.module.css";

import {
  FaTruck,
  FaMoneyBillWave,
  FaHeadset,
  FaRegLightbulb,
} from "react-icons/fa6";

export default function About() {
  const services = [
    {
      icon: FaTruck,
      title: "Livraison",
      text: "Les frais de livraison sont à la charge de la cliente.",
    },
    {
      icon: FaMoneyBillWave,
      title: "Paiement à la livraison",
      text: "Payez simplement votre commande lors de sa réception.",
    },
    {
      icon: FaHeadset,
      title: "Service client 24h/24",
      text: "Notre équipe reste disponible pour répondre à vos questions.",
    },
    {
      icon: FaRegLightbulb,
      title: "Conseils personnalisés",
      text: "Nous sommes disponibles pour vous conseiller dans vos choix.",
    },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.about}>

        <div className={styles.header}>
          <p className={styles.eyebrow}>
            ROBA SHOP
          </p>

          <h1 className={styles.title}>
            Votre expérience,
            <span> notre priorité.</span>
          </h1>

          <p className={styles.intro}>
            Chez Roba Shop, nous souhaitons vous offrir une expérience
            simple, élégante et sereine, de la commande jusqu'à la livraison.
          </p>
        </div>


        <div className={styles.services}>

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                className={styles.card}
                key={index}
              >

                <div className={styles.icon}>
                  <Icon />
                </div>

                <h2>
                  {service.title}
                </h2>

                <p>
                  {service.text}
                </p>

              </article>
            );
          })}

        </div>


        <div className={styles.bottom}>
          <p>
            Une question, un doute ou besoin d'un conseil ?
          </p>

          <span>
            Roba Shop est à votre écoute.
          </span>
        </div>

      </section>
    </main>
  );
}