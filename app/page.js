import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
   
      <main className={styles.main}>
        <section className={styles.first}>
           <div className={styles.overlay}></div>

      <div className={styles.content}>
        <p className={styles.subtitle}>L'ÉLÉGANCE AU QUOTIDIEN</p>

        <h1 className={styles.title}>
          Révélez votre <span>éclat</span>
        </h1>

        <p className={styles.description}>
  Des fragrances d'exception aux notes envoûtantes, sélectionnées pour
  accompagner chaque instant et sublimer votre présence.
</p>

        <a href="/parfumes" className={styles.button}>
          Découvrir
          <span>→</span>
        </a>
      </div>
        </section>

        <section className={styles.second}>
           <div className={styles.second_container}>

        <p className={styles.second_subtitle}>ROBA SHOP</p>

        <h2 className={styles.second_title}>
          Votre <span>signature</span> olfactive
        </h2>

        <p className={styles.description}>
          Roba Shop est une boutique en ligne basée à Abidjan, dédiée à
          l'univers de la parfumerie et du bien-être. Nous vous proposons
          une sélection de parfums, déodorants et produits parfumés choisis
          pour vous accompagner au quotidien.
          <br />
          <br />
          Que vous recherchiez une fragrance élégante, une senteur
          envoûtante ou simplement le parfum qui vous ressemble, Roba Shop
          vous invite à découvrir des produits pensés pour révéler votre
          personnalité et laisser une empreinte unique.
        </p>

      </div>
        </section>

        <section className={styles.third}>
  <div className={styles.third_content}>

    <p className={styles.third_subtitle}>
      L'ART DU MÉLANGE
    </p>

    <h2 className={styles.third_title}>
      Votre parfum,
      <br />
      <span>votre signature</span>
    </h2>

    <p className={styles.third_description}>
      Chez Roba Shop, nous vous proposons également des mélanges de
      parfums soigneusement réalisés pour créer une fragrance unique.
      Associez différentes senteurs selon vos envies et découvrez une
      combinaison qui vous ressemble.
    </p>

   

  </div>

  <div className={styles.third_image}>
    <div className={styles.third_image}>
  <Image
    src="/MainFond5.png"
    alt="Mélange de parfums Roba Shop"
    fill
    sizes="(max-width: 780px) 100vw, 50vw"
    className={styles.image}
  />
</div>
  </div>
</section>

       <section className={styles.fourth}>
  <div className={styles.overlay}></div>

  <div className={styles.content}>
    <p className={styles.subtitle}>
      L'UNIVERS DE ROBA SHOP
    </p>

    <h2 className={styles.title}>
      Découvrez nos <span>articles</span>
    </h2>

    <p className={styles.description}>
      Explorez notre sélection de parfums, déodorants et produits parfumés,
      soigneusement choisis pour vous accompagner au quotidien et révéler
      votre personnalité.
    </p>

    <a href="/parfumes" className={styles.button}>
      Découvrir nos articles
      <span>→</span>
    </a>
  </div>
</section>

      </main>
  );
}
