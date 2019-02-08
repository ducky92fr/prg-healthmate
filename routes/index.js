const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// CALCULE METABOLISME BASAL 
// Formule Mifflin-St Jeor 
// Pour les femmes : (10 × poids en kg) + (6,25 x hauteur en cm) - (5 × âge en années) - 161
// Pour les hommes : (10 x poids en kg) + (6,25 x hauteur en cm) - (5 x âge en années) + 5

// COEFFICIENT ACTIVITE : 
// "Sedentary" = 1,2
// "Little Active" = 1,375
// "Moderately Active" = 1,55
// "Very Active" = 1,725
// "Hyper Active" = 1,9

// BESOIN EN EAU
// (Poid en kg - 20) * 15 + 1500 = besoin en ml (Apport global)

// Apport par aliment : 
// Aliments	Pourcentages en eau
// Légumes verts	90 %
// Fruits frais	80 à 95 %
// Œufs	75 %
// Viande, poisson	65 à 70 %
// Hamburger	45 %
// Fromage à pâte molle	50 %
// Fromage à pâte dure	35 %
// Yaourt	90 %
// Pain	35 %
// Fruits secs	20 %
// Céréales (pâtes, riz, semoule, farines, légumes secs)	10 à 15 %
// Beurre	15 %
// Huiles, sucre	0 %

// DIET.ENUM
// CHECK /models/user-data.js // need Nizar feedback

// CALCULE MACRO 
// diet.enum match the value stored in the code 
// basalMetabolism * % diet.enum.protein.value = MACRO-CARBS (dailyNeed.protein)
// basalMetabolism * % diet.enum.carbs.value = MACRO-CARBS (dailyNeed.carbs)
// basalMetabolism * % diet.enum.lipid.value = MACRO-CARBS (dailyNeed.lipid)

// Pour le seed file avec les valeurs
// enum: [
//   "Balanced",
//   "Moderate",
//   "Fitness",
//   "Mediterranean",
//   "Low Fat",
//   "Low Carbs",
//   "Body Builder",
//   "Ketogenic"
// ]

module.exports = router;
