import React from 'react'
import products from '@/data/products.json'
import { OrangeButton } from '../ui/buttons'
import style from '@/app/ui/styles/category.module.css'



const categoryPage = async ({ params }: { params: { category: string } }) => {

  const { category } = await params
  const productType = products.products.filter((p) => p.category === category).sort((a, b) => b.price - a.price)

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