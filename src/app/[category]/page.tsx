import React from 'react'
import { OrangeButton } from '../ui/buttons'
import style from '@/app/ui/styles/category.module.css'
import { db } from '@/lib/mongodb'



const categoryPage = async ({ params }: { params: { category: string } }) => {

  const { category } = await params 
  
  let productType = [];
  try {
    productType = await db.collection("productos").find({ category }).sort({ price: -1 }).toArray();
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    return <div>Error al cargar los productos. Por favor, inténtalo más tarde.</div>;
  }
  return (
    <>
      <header>
        <h1>
          {category}
        </h1>

      </header>

      {productType.map((p) => (
        <section key={p.id} className={style.product}>
          <picture>
            <source media="(min-width: 1024px)" srcSet={p.categoryImage.desktop} />
            <source media="(min-width: 768px)" srcSet={p.categoryImage.tablet} />
            <img src={p.categoryImage.mobile} alt={p.name} />
          </picture>
          <div>
            <p>{p.new ? "New Product" : ""}</p>
            <h2> {p.name}</h2>
            <h3> {p.description}</h3>
            <OrangeButton link={`${category}/${p.slug}`} />

          </div>
        </section>
      ))}

    </>
  )
}

export default categoryPage