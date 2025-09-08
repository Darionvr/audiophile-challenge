import React from 'react'
import products from '@/data/products.json'
import { OrangeButton } from '../ui/buttons'
import Link from 'next/link'
import style from '@/app/ui/category.module.css'



const categoryPage= async ({ params }: { params: { category: string } }) => {

  const {category} = await params
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
            <img src={p.categoryImage.desktop} alt={p.name} />
            <div>
                <p>{p.new  ? "New Product" : ""}</p>
                <h2> {p.name}</h2>
                <h3> {p.description}</h3>
            <OrangeButton children={`${category}/${p.slug}`}/>

            </div>
        </section>
    ))}

    </>
  )
}

export default categoryPage