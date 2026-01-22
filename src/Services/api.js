export const fetchMenuItems = async () => {
  return [
    { id: 1, name: "Pizza", price: 399, category: "Italian, veg", image: "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199929/pizza_o3cm3c.jpg" },
    { id: 2, name: "Burger", price: 199, category: "North Indian, veg, non-veg", image: "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199913/burger_qeuoj3.jpg" },
    { id: 3, name: "Pasta", price: 299, category: "Italian, veg", image: "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199889/pasta_xq68s1.jpg" },
    { id: 4, name: "Sushi", price: 499, category: "Chinese, non-veg", image: "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199888/sushi_hbsplx.jpg "},
    { id: 5, name: "Dosa", price: 120, category: "South Indian, veg", image: "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199922/dosa_bcsq8d.jpg" },
    { id: 6, name: "Samosa", price: 50, category: "North Indian, veg", image: "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199888/samosa_mkmet5.jpg" },
    { id: 7, name: "Noodles", price: 180, category: "Chinese, veg", image: "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199928/noodles_shymux.jpg" },
    { id: 8, name: "Idli", price: 80, category: "South Indian, veg", image: "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199887/idli_r8oqpp.jpg" },
    { id: 9, name: "Pizza Margherita", price: 450, category: "Italian, veg, non-veg", image: "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199929/pizza_o3cm3c.jpg" },
    { id: 10, name: "Chole Bhature", price: 150, category: "North Indian, veg", image: "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199914/chole_oq5yqp.jpg" },
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
