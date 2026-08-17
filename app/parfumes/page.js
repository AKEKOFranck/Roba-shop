"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import parfums from "@/lib/data/parfums.json";
import WhatsAppOrderModal from "../components/whatsappordermodal/whatsappordermodal";

export default function Parfumes() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatPrice = (price) => `${price.toLocaleString("fr-FR")} FCFA`;

  const handleOrderClick = (parfum) => {
    setSelectedProduct(parfum);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <main className={styles.main}>
      <section className={styles.container_title}>
        <h1 className={styles.title}>
          Découvrez nos <span>parfums</span>
        </h1>
      </section>

      <section className={styles.container}>
        <div className={styles.cont}>
          {parfums.map((parfum) => (
            <div className={styles.box} key={parfum.id}>
              <div className={styles.imageContainer}>
                <Image
                  src={parfum.image}
                  alt={parfum.name}
                  fill
                  sizes="(max-width: 480px) 45vw, (max-width: 769px) 30vw, (max-width: 1200px) 22vw, 260px"
                  className={styles.img}
                />
              </div>

              <div className={styles.content}>
                <h3 className={styles.box_title}>{parfum.name}</h3>
                <p className={styles.price}>{formatPrice(parfum.price)}</p>

                <button
                  className={styles.button}
                  onClick={() => handleOrderClick(parfum)}
                >
                  Commander
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <WhatsAppOrderModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}