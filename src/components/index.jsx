import {useState, useEffect} from "react"
import "../styles/styles.css"
import {Coin} from './Coin'

const COINAPI_API_KEY = ''

export const Index = () => {

    const [resources, setResources] = useState([])
    let updatedAt = new Date()

    useEffect(() => {
        async function getResources() {
            const resources = await fetch('https://rest.coinapi.io/v1/assets?filter_asset_id=BTC,ETH,XRP,XLM', {
                headers: {'X-CoinApi-Key': COINAPI_API_KEY}
            }).then(response => response.json())

            setResources(resources)
            updatedAt = new Date()
        }

        getResources()
    }, [])
    return (
        <>
            <section className="main-exchange-container">
                <div className="backgroundImg"></div>
                <div className="main-exchange-container--title">
                    <h2>Visibilizamos todas las tasas de cambio.</h2>
                    <p>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
                </div>
            </section>

            <section className="main-table-detail">
                <div className="main-currency-table">
                    <p className="currency-table--title">Monedas:</p>
                    <div className="currency-table--container">
                        <table>
                            {resources.length > 0 ? resources.map(({resource_id, price_usd, name}) => <Coin key={resource_id} name={name} price = {price_usd}/>)
                            :null}
                        </table>
                    </div>

                    <div className="currency-table--date">
                        <p><b>Actualizado:</b> {new Date(updatedAt).toLocaleDateString()}</p>
                    </div>
                </div>
            </section>

            <section className="main-product-detail">
                <span className="product-detail--batata-logo"></span>
                <div className="product-detail--title">
                    <h2>Creamos un producto sin comparación.</h2>
                    <p>Confiable y diseñado para su uso diario.</p>
                </div>

                <section className="products-cards-container">
                    {[
                        {
                            imgSrc: '../assets/icons/clock.svg',
                            title: 'Tiempo real',
                            body: 'Nuestra API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.'
                        },
                        {
                            imgSrc: '../assets/icons/eye.svg',
                            title: 'No hay tasas escondidas',
                            body: 'Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.'
                        },
                        {
                            imgSrc: '../assets/icons/dollar-sign.svg',
                            title: 'Compare monedas',
                            body: 'No más rumores, con Batabit sabrás el valor real de cada moneda en el mercado actual.'
                        },
                        {
                            imgSrc: '../assets/icons/check-circle.svg',
                            title: 'Información confiable',
                            body: 'Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.'
                        },
                    ].map((product, index) => (
                        <article className="product-detail--card" key={index}>
                            <img src={product.imgSrc} alt={product.title.toLowerCase()} />
                            <p className="product--card-title">{product.title}</p>
                            <p className="product--card-body">{product.body}</p>
                        </article>
                    ))}
                </section>
            </section>

            <section className="bitcoin-img-container">
                <h2>Conócelo hoy</h2>
            </section>

            <section></section>
            <footer></footer>
        </>
    )
}