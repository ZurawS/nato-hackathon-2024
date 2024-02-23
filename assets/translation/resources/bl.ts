const bl = {
  dashboard: {
    title: "Trouver un Médicament",
    sourceCountry: "Pays Source",
    insertThreeCharacters: "Entrez au moins 3 caractères",
    selectSourceCountry: "Sélectionner",
    sourceCountryPlaceholder: "Sélectionnez l'Origine du Médicament",
    noResults: "Aucun résultat trouvé",
    pleaseSelectDrug: "Veuillez sélectionner un médicament",
    drugSelection: "Sélection de Médicament",
  },
  changeLanguage: "Changer de langue",
  settings: {
    title: "Paramètres",
    headTextLanguage: "Langue de l'application",
    descriptionTextLanguage: "Sélectionnez votre langue préférée",
    headTextCountryOperation: "Pays d'opération",
    descriptionTextCountryOperation:
      "Sélectionnez le pays où vous opérez. Les médicaments seront traduits en alternatives disponibles dans ce pays.",
    headTextOfflineMode: "Mode hors ligne",
    descriptionTextOfflineMode: "Activer/désactiver le mode hors ligne",
  },
  modal: {
    title: "Enregistrer les informations",
    nameHeader: "Nom",
    nameDescription: "Prénom et nom du patient",
    namePlaceholder: "Commencez à taper ici...",
    idHeader: "ID",
    idDescription: "Identifiant unique du patient",
    idPlaceholder: "Commencez à taper ici...",
    diagnosisHeader: "Informations supplémentaires",
    diagnosisDescription: "Informations supplémentaires sur le patient",
    diagnosisPlaceholder: "Commencez à taper ici...",
    drugsHeader: "Médicaments",
    drugsDescription: "Médicaments sélectionnés",
    noDrugsText: "Sélectionnez des médicaments à enregistrer parmi les médicaments trouvés",
    sendButton: "Enregistrer",
    errorText: "Remplissez les champs requis et sélectionnez des médicaments avant d'enregistrer",
    requiredField: "Ce champ est requis",
    required: "Champs requis",
    toast: {
      header: "Succès",
      text: "Les informations ont été enregistrées avec succès",
    },
    toastErrorApi: {
      header: "Erreur",
      text: "Vérifiez votre connexion internet",
    },
  },
  drug: {
    showAlternativeDrugs: "Afficher les médicaments alternatifs",
    hideAlternativeDrugs: "Masquer les médicaments alternatifs",
    drugDetails: {
      dosage: "Dosage",
      atcCodes: "Codes ATC",
      routeOfAdministration: "Voie d'administration",
      pharmateuticalForm: "Forme pharmaceutique",
      activeIngredientsList: "Ingrédients Actifs",
    },
  },
  common: {
    notFound: "Cet écran n'existe pas",
    backToHome: "Retour à l'écran d'accueil",
  },
};

export default bl;
