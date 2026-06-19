import React, { useState } from 'react';
import './RecipesPage.css';
import imgEggCurry from '../assets/recipes/egg_curry_1780859294893.png';
import imgAndaBhurji from '../assets/recipes/anda_bhurji_1780859305661.png';
import imgButterChicken from '../assets/recipes/butter_chicken_1780859326442.png';
import imgPahadiChicken from '../assets/recipes/pahadi_chicken_1780859341186.png';
import imgKadaknathCurry from '../assets/recipes/kadaknath_curry_1780859362776.png';
import imgHerbRoastChicken from '../assets/recipes/herb_roast_chicken_1780859378850.png';

const recipes = [
  {
    id: 'egg-curry',
    title: 'Classic Dhaba Egg Curry',
    description: 'A comforting, spicy, and rich egg curry made exactly how you find it at highway dhabas. Perfect with hot rotis.',
    type: 'egg',
    image: imgEggCurry,
    tag: 'Indian Classic',
    ingredients: ['4 Hard-boiled Farm Eggs', '2 large Onions, finely chopped', '2 Tomatoes, pureed', '1 tbsp Ginger-Garlic paste', '1 tsp Garam Masala', 'Fresh Coriander'],
    steps: ['Sauté onions until golden brown.', 'Add ginger-garlic paste and tomato puree. Cook until oil separates.', 'Add spices and simmer with a little water.', 'Score the eggs, add to gravy, and simmer for 5 mins. Garnish with coriander.']
  },
  {
    id: 'anda-bhurji',
    title: 'Masala Anda Bhurji',
    description: 'The ultimate Indian scrambled eggs. Quick, fiery, and bursting with flavors of fresh onions and green chilies.',
    type: 'egg',
    image: imgAndaBhurji,
    tag: 'Quick Breakfast',
    ingredients: ['3 Farm-fresh Eggs', '1 Onion, finely chopped', '1 Tomato, finely chopped', '2 Green Chilies', '1/2 tsp Turmeric', 'Butter'],
    steps: ['Melt butter in a pan, sauté onions and green chilies.', 'Add tomatoes and spices, cook until soft.', 'Whisk eggs and pour into the pan.', 'Stir continuously on medium heat until scrambled and cooked. Serve hot.']
  },
  {
    id: 'butter-chicken',
    title: 'Traditional Murgh Makhani',
    description: 'Authentic Butter Chicken with tender pieces of chicken in a velvety, mildly spiced tomato and butter sauce.',
    type: 'chicken',
    image: imgButterChicken,
    tag: 'Mughlai',
    ingredients: ['500g Chicken, marinated', '2 cups Tomato Puree', '1/2 cup Heavy Cream', '3 tbsp Butter', '1 tbsp Kasuri Methi', 'Spices (Cumin, Coriander, Chili)'],
    steps: ['Grill or pan-fry the marinated chicken until cooked.', 'In a separate pan, melt butter and cook tomato puree with spices.', 'Simmer until thick, then stir in heavy cream and kasuri methi.', 'Add chicken pieces, simmer for 5 mins, and serve with naan.']
  },
  {
    id: 'pahadi-chicken',
    title: 'Authentic Pahadi Chicken',
    description: 'A green, aromatic chicken curry from the mountains, made with fresh coriander, mint, garlic, and green chilies.',
    type: 'chicken',
    image: imgPahadiChicken,
    tag: 'Pahadi Style',
    ingredients: ['500g Chicken', '1 cup Fresh Coriander', '1/2 cup Fresh Mint', '6 Cloves Garlic', '4 Green Chilies', '1/2 cup Yogurt'],
    steps: ['Blend coriander, mint, garlic, and chilies into a fine green paste.', 'Marinate chicken in yogurt and half the green paste.', 'Heat oil, add whole spices, and sauté the remaining green paste.', 'Add chicken, cook slowly on low heat until tender. Serve with rice.']
  },
  {
    id: 'kadaknath-curry',
    title: 'Rich Kadaknath Curry',
    description: 'A deeply flavorful, slow-cooked dark meat curry known for its intense taste and incredibly high nutritional value.',
    type: 'chicken',
    image: imgKadaknathCurry,
    tag: 'Exotic Kadaknath',
    ingredients: ['500g Kadaknath Chicken', '3 Onions, thinly sliced', '2 Tomatoes, chopped', 'Whole Spices (Cloves, Cinnamon, Cardamom)', '2 tbsp Mustard Oil', 'Ginger-Garlic Paste'],
    steps: ['Heat mustard oil and crackle whole spices.', 'Brown the onions deeply, then add ginger-garlic paste.', 'Add Kadaknath chicken and sear well on high heat.', 'Add tomatoes and spices, cover, and slow cook for 45-60 minutes until tender.']
  },
  {
    id: 'herb-roast-chicken',
    title: 'Classic Herb-Roasted Chicken',
    description: 'A western favorite. Juicy, tender whole chicken roasted perfectly with fresh farm herbs, garlic, and butter.',
    type: 'chicken',
    image: imgHerbRoastChicken,
    tag: 'Western Classic',
    ingredients: ['1 Whole Farm Chicken', 'Fresh Rosemary & Thyme', '1 head of Garlic, halved', '1 Lemon, halved', '4 tbsp Butter, softened', 'Sea Salt & Black Pepper'],
    steps: ['Preheat oven to 200°C (400°F). Pat the chicken dry with paper towels.', 'Rub softened butter, salt, and herbs under the skin and all over the chicken.', 'Stuff the cavity with lemon and garlic halves.', 'Roast for about 1 hour and 15 minutes, basting halfway, until golden brown and cooked through.']
  }
];

const RecipesPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="recipes-page">
      <div className="recipes-hero">
        <h1>Farm Fresh Recipes</h1>
        <p>Discover the true taste of our farm with these specially curated, authentic recipes bringing the best out of our ingredients.</p>
      </div>
      
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <div key={recipe.id} className={`recipe-premium-card ${expandedId === recipe.id ? 'expanded' : ''}`}>
            <div className={`recipe-premium-header ${recipe.type}`}>
              <img src={recipe.image} alt={recipe.title} className="recipe-premium-image" />
              <span className="recipe-premium-tag">{recipe.tag}</span>
            </div>
            
            <div className="recipe-premium-body">
              <h2 className="recipe-premium-title">{recipe.title}</h2>
              <p className="recipe-premium-desc">{recipe.description}</p>
              
              <button 
                className="recipe-premium-btn"
                onClick={() => toggleExpand(recipe.id)}
              >
                {expandedId === recipe.id ? 'Hide Recipe Details' : 'View Full Recipe'}
              </button>

              <div className="recipe-premium-details">
                <div className="recipe-premium-details-inner">
                  <div className="details-grid">
                    <div className="ingredients-section">
                      <h4>Ingredients</h4>
                      <ul>
                        {recipe.ingredients.map((item, index) => (
                          <li key={index}>
                            <span className="check-icon">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="steps-section">
                      <h4>Instructions</h4>
                      <ol>
                        {recipe.steps.map((step, index) => (
                          <li key={index}>
                            <span className="step-num">{index + 1}</span>
                            <p>{step}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
