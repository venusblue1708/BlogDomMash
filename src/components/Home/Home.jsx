import React from "react";
import AddCard from "../AddCard/AddCard";

const breakfast = [
  {
    title: "Авокадо тост",
    image:
      "https://i.pinimg.com/564x/7d/2b/bd/7d2bbdbff2546a0072bae20aca4aaa92.jpg",
    fullness: "3-4ч",
    category: "сытный",

    id: 1,
  },
  {
    title: "Боул с йогуртом",
    image:
      "https://i.pinimg.com/564x/f2/71/25/f27125280efbb26799de0efa9efacb10.jpg",
    fullness: "1-2ч",
    category: "легкий",
    id: 2,
  },
  {
    title: "Панкейк с голубикой",
    image:
      "https://i.pinimg.com/564x/7c/06/06/7c0606550bc9fc673e640b8e490e5f05.jpg",
    fullness: "2-3ч",
    category: "легкий",
    id: 3,
  },
  {
    title: "Тост с копченным лососем",
    image:
      "https://i.pinimg.com/236x/63/6d/84/636d8421fa015e4c40ed122c40fe6ce1.jpg",
    fullness: "3-4ч",
    category: "мега сытный",
    id: 4,
  },
  {
    title: "Круассан",
    image:
      "https://i.pinimg.com/564x/89/77/e8/8977e861b826c63910f32be80caa6000.jpg",
    fullness: "2-3ч",
    category: "сытный",
    id: 5,
  },
  {
    title: "Омлет",
    image:
      "https://i.pinimg.com/564x/08/ca/a5/08caa50bfb4268980fecc7c49bb40f2f.jpg",
    fullness: "2-3ч",
    category: "сытный",
    id: 6,
  },
];

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: "70px",
        marginLeft: "40px",
      }}
    >
      {breakfast.map((item) => (
        <AddCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Home;
