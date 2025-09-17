
import React from 'react'
import products from '@/data/products.json'
import { OrangeButton } from '@/app/ui/buttons';
import style from '@/app/ui/styles/model-page.module.css'
import Counter from '@/app/ui/counter';
import BackButton from '@/app/ui/back-button';

const ModelPage = async ({ params }: { params: { slug: string } }) => {


    const { slug } = await params;
    const model = products.products.find((p) => p.slug.includes(slug))
    const cartItem = model
        ? {
            id: model.id,
            slug: model.slug,
            shortName: model.shortName,
            price: model.price,
            cartImage: model.cartImage,
            quantity: 1,
        }
        : undefined;

    return (

        <main className={style.main}>
            <BackButton/>
            <section className={style.product}>
                <picture>
                    <source media="(min-width: 1024px)" srcSet={model?.image.desktop} />
                    <source media="(min-width: 768px)" srcSet={model?.image.tablet} />
                    <img src={model?.image.mobile} alt={model?.name} />
                </picture>

                <div>
                    <p>{model?.new ? "New Product" : ""}</p>
                    <h1>{model?.name}</h1>
                    <h4>{model?.description}</h4>
                    <h5>$ {new Intl.NumberFormat('es-CL').format(model?.price ?? 0)}</h5>
                    {cartItem && <Counter item={cartItem} />}
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
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={model?.gallery.first.desktop} />
                        <source media="(min-width: 768px)" srcSet={model?.gallery.first.tablet} />
                        <img src={model?.gallery.first.mobile} alt={model?.name} />
                    </picture>
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={model?.gallery.second.desktop} />
                        <source media="(min-width: 768px)" srcSet={model?.gallery.second.tablet} />
                        <img src={model?.gallery.second.mobile} alt={model?.name} />
                    </picture>
                </div>

                <picture>
                    <source media="(min-width: 1024px)" srcSet={model?.gallery.third.desktop} />
                    <source media="(min-width: 768px)" srcSet={model?.gallery.third.tablet} />
                    <img src={model?.gallery.third.mobile} alt={model?.name} />
                </picture>

            </section>

            <section className={style.others}>
                <h2>You May Also Like</h2>
                <div className={style.otherscontainer}>
                    {model?.others.map((o, i) => (
                        <div key={i}>
                            <picture>
                                <source media="(min-width: 1024px)" srcSet={o.image.desktop} />
                                <source media="(min-width: 768px)" srcSet={o.image.tablet} />
                                <img src={o.image.mobile} alt={o.name} />
                            </picture>
                          
                            <h3>{o.name}</h3>
                            <OrangeButton link={`/${o.slug}`} />

                        </div>
                    ))}
                </div>

            </section>
        </main>
    )
}

export default ModelPage