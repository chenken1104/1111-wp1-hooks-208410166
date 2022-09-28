import { useState } from 'react';
import Menu_66 from './components/Menu_66';
import items from './data';
import Category_66 from './components/Category_66';

const allCategories = ['all', 'breakfast', 'lunch', 'shakes', '66'];

const App_66 = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
    } else {
      const newItems = items.filter( (item) => item.category === category );
      setMenuItems(newItems);
    }
  }

  console.log('menuItems', menuItems);
  return (
    <section className="menu">
      {/* title */}
      <div className="title">
        <h2>our menu 208410166</h2>
        <div className="underline"></div>
      </div>
      {/* filter buttons */}
      <Category_66 categories={categories} filterItems={filterItems} />
    {/* menu items */}
    <Menu_66 items={menuItems} />
    </section>
  );
};

export default App_66;
