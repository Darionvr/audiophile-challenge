import Link from 'next/link'
import React from 'react'
import products from '@/data/products.json'
import { OrangeButton } from '@/app/ui/buttons';
import style from '@/app/ui/model-page.module.css'
import Counter from '@/app/ui/counter';



const ModelPage = async ({ params }: { params: { slug: string } }) => {


    const { slug } = await params;
    const model = products.products.find((p) => p.slug.includes(slug))

    return (

        <main className={style.main}>
            <button>Go Back</button>
            <section className={style.product}>
                <img src={model?.image.desktop} alt={model?.name} />
                <div>
                    <p>{model?.new ? "New Product" : ""}</p>
                    <h1>{model?.name}</h1>
                    <h4>{model?.description}</h4>
                    <h5>$ {new Intl.NumberFormat('es-CL').format(model?.price ?? 0)}</h5>
                    <Counter />
                </div>
            </section>

            <section className={style.features}>
                <div>
                    <h2>Features</h2>
                    <h4>{model?.features}</h4>
                </div>
                <div>
                    <h2> In the box</h2>
                    <ul>
                        {model?.includedItems.map((items, i) => (
                            <li key={i}> <h4 > <span>{items.quantity}x</span>{items.item}</h4> </li>

                        ))}
                    </ul>

                </div>

            </section>

            <section className={style.images}>
                <div>
                    <img src={model?.gallery.first.desktop} alt={model?.name} />
                    <img src={model?.gallery.second.desktop} alt={model?.name} />
                </div>

                <img src={model?.gallery.third.desktop} alt={model?.name} />
            </section>

            <section className={style.others}>
                <h2>You May Also Like</h2>
                <div className={style.otherscontainer}>
                    {model?.others.map((o, i) => (
                        <div key={i}>
                            <img src={o.image.desktop} alt={o.name} />
                            <h3>{o.name}</h3>
                            <OrangeButton children={`/${o.slug}`} />

                        </div>
                    ))}
                </div>

            </section>
        </main>
    )
}

export default ModelPage