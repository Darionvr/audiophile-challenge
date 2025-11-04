import React from 'react'
import { OrangeButton } from '../ui/buttons'
import style from '@/app/ui/styles/category.module.css'
import { db } from '@/lib/mongodb'



const categoryPage = async ({ params }: { params: { category: string } }) => {

  const { category } = await params 

 let productType = []
  try {
    productType = await db.collection("productos")
      .find({ category })
      .sort({ price: -1 })
      .toArray()

    if (!productType.length) {
      return (
        <main className={style.main}>
          <h1>No products found in {category}</h1>
        </main>
      )
    }
  } catch (error) {
    console.error("Database connection failed:", error)
    return (
      <main className={style.main}>
        <h1>Failed to load products</h1>
        <p>Please try again later</p>
      </main>
    )
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