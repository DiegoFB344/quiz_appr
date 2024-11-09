import { imgs, categories } from "../data";
import { CategoryCard } from "./CategoryCard";

const [
  imgCiencia,
  imgDeportes,
  imgFilosofia,
  imgGeografia,
  imgHistoria,
  imgLiteratura,
  imgTecnologia,
] = imgs;

export const CategoryList = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 mt-10">
      {/*Categoria Ciencia */}
      <CategoryCard
        category={categories.ciencia}
        src={imgCiencia}
        alt={`Categoria ${categories.ciencia}`}
        gradientColor="from-purple-500 to-pink-500"
      />
      {/*Categoria Deportes */}
      <CategoryCard
        category={categories.deportes}
        src={imgDeportes}
        alt={`Categoria ${categories.deportes}`}
        gradientColor="from-lime-400 to-teal-700"
      />
      {/*Categoria Filosofia */}
      <CategoryCard
        category={categories.filosofia}
        src={imgFilosofia}
        alt={`Categoria ${categories.filosofia}`}
        gradientColor="from-red-400 to-zinc-400"
      />
      {/*Categoria Geografia */}
      <CategoryCard
        category={categories.geografia}
        src={imgGeografia}
        alt={`Categoria ${categories.geografia}`}
        gradientColor="from-cyan-200 to-lime-200"
      />
      {/*Categoria Historia */}
      <CategoryCard
        category={categories.historia}
        src={imgHistoria}
        alt={`Categoria ${categories.historia}`}
        gradientColor="from-sky-300 to-indigo-900"
      />
      {/*Categoria Literatura*/}
      <CategoryCard
        category={categories.literatura}
        src={imgLiteratura}
        alt={`Categoria ${categories.literatura}`}
        gradientColor="from-amber-500 to-emerald-500"
      />
      {/*Categoria Tecnologia */}
      <CategoryCard
        category={categories.tecnologia}
        src={imgTecnologia}
        alt={`Categoria ${categories.tecnologia}`}
        gradientColor="from-violet-900 to-rose-500"
      />
    </div>
  );
};
