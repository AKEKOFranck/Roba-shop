"use client";

import { useState } from "react";
import styles from "./whatsappordermodal.module.css";

// Numéro WhatsApp de la boutique (format international, sans "+", sans espaces)
// Exemple Côte d'Ivoire : 225XXXXXXXXXX
const WHATSAPP_NUMBER = "2250574449041"; // ⚠️ remplace par le vrai numéro

export default function WhatsAppOrderModal({ product, isOpen, onClose }) {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    localisation: "",
  });
  const [errors, setErrors] = useState({});

  if (!isOpen || !product) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.nom.trim()) newErrors.nom = "Le nom est requis";
    if (!form.prenom.trim()) newErrors.prenom = "Le prénom est requis";
    if (!form.telephone.trim()) {
      newErrors.telephone = "Le numéro est requis";
    } else if (!/^[0-9+\s]{8,}$/.test(form.telephone.trim())) {
      newErrors.telephone = "Numéro invalide";
    }
    if (!form.localisation.trim())
      newErrors.localisation = "La localisation est requise";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPrice = (price) => `${price.toLocaleString("fr-FR")} FCFA`;

  const buildMessage = () => {
    const lines = [
      "🛍️ *Nouvelle commande*",
      "",
      "*Produit :*",
      `• ${product.name}`,
      `• Prix : ${formatPrice(product.price)}`,
      "",
      "*Informations client :*",
      `• Nom : ${form.nom}`,
      `• Prénom : ${form.prenom}`,
      `• Téléphone : ${form.telephone}`,
      `• Localisation : ${form.localisation}`,
    ];
    return lines.join("\n");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = buildMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");

    // Réinitialiser et fermer après envoi
    setForm({ nom: "", prenom: "", telephone: "", localisation: "" });
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fermer"
        >
          ×
        </button>

        <div className={styles.productSummary}>
          {product.image && (
            <div className={styles.productImageWrap}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />
            </div>
          )}
          <div>
            <p className={styles.productName}>{product.name}</p>
            <p className={styles.productPrice}>{formatPrice(product.price)}</p>
          </div>
        </div>

        <h2 className={styles.title}>Finaliser la commande</h2>
        <p className={styles.subtitle}>
          Renseignez vos informations, vous serez redirigé vers WhatsApp.
        </p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="nom" className={styles.label}>
                Nom
              </label>
              <input
                id="nom"
                name="nom"
                type="text"
                value={form.nom}
                onChange={handleChange}
                className={`${styles.input} ${
                  errors.nom ? styles.inputError : ""
                }`}
                placeholder="Kouassi"
              />
              {errors.nom && (
                <span className={styles.errorText}>{errors.nom}</span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="prenom" className={styles.label}>
                Prénom
              </label>
              <input
                id="prenom"
                name="prenom"
                type="text"
                value={form.prenom}
                onChange={handleChange}
                className={`${styles.input} ${
                  errors.prenom ? styles.inputError : ""
                }`}
                placeholder="Awa"
              />
              {errors.prenom && (
                <span className={styles.errorText}>{errors.prenom}</span>
              )}
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="telephone" className={styles.label}>
              Numéro de téléphone
            </label>
            <input
              id="telephone"
              name="telephone"
              type="tel"
              value={form.telephone}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.telephone ? styles.inputError : ""
              }`}
              placeholder="07 00 00 00 00"
            />
            {errors.telephone && (
              <span className={styles.errorText}>{errors.telephone}</span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="localisation" className={styles.label}>
              Localisation
            </label>
            <input
              id="localisation"
              name="localisation"
              type="text"
              value={form.localisation}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.localisation ? styles.inputError : ""
              }`}
              placeholder="Abidjan, Cocody"
            />
            {errors.localisation && (
              <span className={styles.errorText}>{errors.localisation}</span>
            )}
          </div>

          <button type="submit" className={styles.submitButton}>
            Envoyer sur WhatsApp
            <span>→</span>
          </button>
        </form>
      </div>
    </div>
  );
}