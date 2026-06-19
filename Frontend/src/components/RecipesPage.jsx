import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaClock, FaFire, FaUtensils, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './RecipesPage.css';

const RecipesPage = () => {
  const [expandedRecipe, setExpandedRecipe] = useState(null);
  const { t } = useTranslation();

  const recipes = [
    {
      id: 'egg-curry',
      title: t('recipes.items.egg-curry.title'),
      description: t('recipes.items.egg-curry.desc'),
      tag: t('recipes.items.egg-curry.tag'),
      image: '/src/assets/eggphoto.jpg',
      prepTime: '15 mins',
      cookTime: '30 mins',
      difficulty: 'Medium',
      ingredients: t('recipes.items.egg-curry.ingr', { returnObjects: true }),
      instructions: t('recipes.items.egg-curry.steps', { returnObjects: true })
    },
    {
      id: 'anda-bhurji',
      title: t('recipes.items.anda-bhurji.title'),
      description: t('recipes.items.anda-bhurji.desc'),
      tag: t('recipes.items.anda-bhurji.tag'),
      image: '/src/assets/eggphoto.jpg',
      prepTime: '10 mins',
      cookTime: '10 mins',
      difficulty: 'Easy',
      ingredients: t('recipes.items.anda-bhurji.ingr', { returnObjects: true }),
      instructions: t('recipes.items.anda-bhurji.steps', { returnObjects: true })
    },
    {
      id: 'butter-chicken',
      title: t('recipes.items.butter-chicken.title'),
      description: t('recipes.items.butter-chicken.desc'),
      tag: t('recipes.items.butter-chicken.tag'),
      image: '/src/assets/chicken.jpg',
      prepTime: '20 mins',
      cookTime: '40 mins',
      difficulty: 'Medium',
      ingredients: t('recipes.items.butter-chicken.ingr', { returnObjects: true }),
      instructions: t('recipes.items.butter-chicken.steps', { returnObjects: true })
    },
    {
      id: 'pahadi-chicken',
      title: t('recipes.items.pahadi-chicken.title'),
      description: t('recipes.items.pahadi-chicken.desc'),
      tag: t('recipes.items.pahadi-chicken.tag'),
      image: '/src/assets/chicken.jpg',
      prepTime: '15 mins',
      cookTime: '45 mins',
      difficulty: 'Medium',
      ingredients: t('recipes.items.pahadi-chicken.ingr', { returnObjects: true }),
      instructions: t('recipes.items.pahadi-chicken.steps', { returnObjects: true })
    },
    {
      id: 'kadaknath-curry',
      title: t('recipes.items.kadaknath-curry.title'),
      description: t('recipes.items.kadaknath-curry.desc'),
      tag: t('recipes.items.kadaknath-curry.tag'),
      image: '/src/assets/kadaknath.webp',
      prepTime: '20 mins',
      cookTime: '60 mins',
      difficulty: 'Hard',
      ingredients: t('recipes.items.kadaknath-curry.ingr', { returnObjects: true }),
      instructions: t('recipes.items.kadaknath-curry.steps', { returnObjects: true })
    },
    {
      id: 'herb-roast-chicken',
      title: t('recipes.items.herb-roast-chicken.title'),
      description: t('recipes.items.herb-roast-chicken.desc'),
      tag: t('recipes.items.herb-roast-chicken.tag'),
      image: '/src/assets/chicken.jpg',
      prepTime: '15 mins',
      cookTime: '75 mins',
      difficulty: 'Medium',
      ingredients: t('recipes.items.herb-roast-chicken.ingr', { returnObjects: true }),
      instructions: t('recipes.items.herb-roast-chicken.steps', { returnObjects: true })
    }
  ];

  const toggleRecipe = (id) => {
    setExpandedRecipe(expandedRecipe === id ? null : id);
  };

  return (
    <div className="recipes-page">
      <div className="recipes-hero">
        <h1 className="recipes-hero__title">{t('recipes.heroTitle')}</h1>
        <p className="recipes-hero__description">
          {t('recipes.heroDesc')}
        </p>
      </div>
      
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <div key={recipe.id} className={`recipe-premium-card ${expandedRecipe === recipe.id ? 'expanded' : ''}`}>
            <div className="recipe-premium-header">
              <img src={recipe.image} alt={recipe.title} className="recipe-premium-image" />
              <span className="recipe-premium-tag">{recipe.tag}</span>
            </div>
            
            <div className="recipe-premium-body">
              <h2 className="recipe-premium-title">{recipe.title}</h2>
              <p className="recipe-premium-desc">{recipe.description}</p>
              
              {expandedRecipe === recipe.id && (
                <div className="recipe-premium-details">
                  <div className="recipe-premium-details-inner">
                    <div className="recipe-details__section">
                      <h4 className="recipe-details__title"><FaUtensils /> {t('recipes.ingredients')}</h4>
                      <ul className="recipe-details__list ingredients-list">
                        {recipe.ingredients.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="recipe-details__section">
                      <h4 className="recipe-details__title"><FaFire /> {t('recipes.instructions')}</h4>
                      <ol className="recipe-details__list instructions-list">
                        {recipe.instructions.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              )}

              <button 
                className="recipe-card__toggle"
                onClick={() => toggleRecipe(recipe.id)}
              >
                {expandedRecipe === recipe.id ? (
                  <>{t('recipes.hideRecipeDetails')} <FaChevronUp /></>
                ) : (
                  <>{t('recipes.viewFullRecipe')} <FaChevronDown /></>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
