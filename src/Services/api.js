export const fetchMenuItems = async () => {
  return [
    { id: 1, name: "Pizza", price: 399, category: "Italian, veg", image: "/assets/images/categories/pizza.jpg" },
    { id: 2, name: "Burger", price: 199, category: "North Indian, veg, non-veg", image: "/assets/images/categories/burger.jpg" },
    { id: 3, name: "Pasta", price: 299, category: "Italian, veg", image: "/assets/images/foodCard/pasta.jpg" },
    { id: 4, name: "Sushi", price: 499, category: "Chinese, non-veg", image: "/assets/images/foodCard/sushi.jpg" },
    { id: 5, name: "Dosa", price: 120, category: "South Indian, veg", image: "/assets/images/categories/dosa.jpg" },
    { id: 6, name: "Samosa", price: 50, category: "North Indian, veg", image: "/assets/images/foodCard/samosa.jpg" },
    { id: 7, name: "Noodles", price: 180, category: "Chinese, veg", image: "/assets/images/categories/noodles.jpg" },
    { id: 8, name: "Idli", price: 80, category: "South Indian, veg", image: "/assets/images/foodCard/idli.jpg" },
    { id: 9, name: "Pizza Margherita", price: 450, category: "Italian, veg, non-veg", image: "/assets/images/foodCard/pizza-margherita.jpg" },
    { id: 10, name: "Chole Bhature", price: 150, category: "North Indian, veg", image: "/assets/images/foodCard/chole-bhature.jpg" },
  ];
};

export const fetchCategoryItems = async (category) => {
  try {
    const response = await fetch(`/api/menu?category=${category}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching category items:", error);
    return [];
  }
};
