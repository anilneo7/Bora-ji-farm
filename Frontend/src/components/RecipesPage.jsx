import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './RecipesPage.css';
import imgEggCurry from '../assets/recipes/egg_curry_1780859294893.png';
import imgAndaBhurji from '../assets/recipes/anda_bhurji_1780859305661.png';
import imgButterChicken from '../assets/recipes/butter_chicken_1780859326442.png';
import imgPahadiChicken from '../assets/recipes/pahadi_chicken_1780859341186.png';
import imgKadaknathCurry from '../assets/recipes/kadaknath_curry_1780859362776.png';
import imgHerbRoastChicken from '../assets/recipes/herb_roast_chicken_1780859378850.png';

const RecipesPage = () => {
  const [expandedId, setExpandedId] = useState(null);
  const { t } = useTranslation();

  const recipes = [
    {
      id: 'egg-curry',
      title: t('recipes.items.egg-curry.title'),
      description: t('recipes.items.egg-curry.desc'),
      type: 'egg',
      image: imgEggCurry,
      tag: t('recipes.items.egg-curry.tag'),
      ingredients: t('recipes.items.egg-curry.ingr', { returnObjects: true }),
      steps: t('recipes.items.egg-curry.steps', { returnObjects: true })
    },
    {
      id: 'anda-bhurji',
      title: t('recipes.items.anda-bhurji.title'),
      description: t('recipes.items.anda-bhurji.desc'),
      type: 'egg',
      image: imgAndaBhurji,
      tag: t('recipes.items.anda-bhurji.tag'),
      ingredients: t('recipes.items.anda-bhurji.ingr', { returnObjects: true }),
      steps: t('recipes.items.anda-bhurji.steps', { returnObjects: true })
    },
    {
      id: 'butter-chicken',
      title: t('recipes.items.butter-chicken.title'),
      description: t('recipes.items.butter-chicken.desc'),
      type: 'chicken',
      image: imgButterChicken,
      tag: t('recipes.items.butter-chicken.tag'),
      ingredients: t('recipes.items.butter-chicken.ingr', { returnObjects: true }),
      steps: t('recipes.items.butter-chicken.steps', { returnObjects: true })
    },
    {
      id: 'pahadi-chicken',
      title: t('recipes.items.pahadi-chicken.title'),
      description: t('recipes.items.pahadi-chicken.desc'),
      type: 'chicken',
      image: imgPahadiChicken,
      tag: t('recipes.items.pahadi-chicken.tag'),
      ingredients: t('recipes.items.pahadi-chicken.ingr', { returnObjects: true }),
      steps: t('recipes.items.pahadi-chicken.steps', { returnObjects: true })
    },
    {
      id: 'kadaknath-curry',
      title: t('recipes.items.kadaknath-curry.title'),
      description: t('recipes.items.kadaknath-curry.desc'),
      type: 'chicken',
      image: imgKadaknathCurry,
      tag: t('recipes.items.kadaknath-curry.tag'),
      ingredients: t('recipes.items.kadaknath-curry.ingr', { returnObjects: true }),
      steps: t('recipes.items.kadaknath-curry.steps', { returnObjects: true })
    },
    {
      id: 'herb-roast-chicken',
      title: t('recipes.items.herb-roast-chicken.title'),
      description: t('recipes.items.herb-roast-chicken.desc'),
      type: 'chicken',
      image: imgHerbRoastChicken,
      tag: t('recipes.items.herb-roast-chicken.tag'),
      ingredients: t('recipes.items.herb-roast-chicken.ingr', { returnObjects: true }),
      steps: t('recipes.items.herb-roast-chicken.steps', { returnObjects: true })
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="recipes-page">
      <div className="recipes-hero">
        <h1>{t('recipes.heroTitle')}</h1>
        <p>{t('recipes.heroDesc')}</p>
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
                {expandedId === recipe.id ? t('recipes.hideRecipeDetails') : t('recipes.viewFullRecipe')}
              </button>

              <div className="recipe-premium-details">
                <div className="recipe-premium-details-inner">
                  <div className="details-grid">
                    <div className="ingredients-section">
                      <h4>{t('recipes.ingredients')}</h4>
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
                      <h4>{t('recipes.instructions')}</h4>
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
