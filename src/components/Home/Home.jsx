import React from 'react';
import './Home.css';
import Product from '../Product/Product'

const Home = () => {
    return (
        <div className='home'>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="" className="home__image" />

            <div className="home__row">
                <Product
                    id={1233431}
                    title="You Don't Know JS: Up & Going"
                    price={20.96}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/41kn-mEpe6L._SX331_BO1,204,203,200_.jpg'
                />

                <Product
                    id={1233432}
                    title="Girl Gone Mad: A Novel Kindle Edition"
                    price={10.50}
                    rating={3}
                    image='https://m.media-amazon.com/images/I/51dQ894qquL._SY346_.jpg'
                />
            </div>

            <div className="home__row">
                <Product
                    id={1233433}
                    title="Apple Watch Series 3 (GPS, 38mm)"
                    price={200}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/71vCuRn4CkL._AC_UY218_.jpg'
                />

                <Product
                    id={1233434}
                    title="Samsung Galaxy S10e Factory"
                    price={699}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/61rB5Q7E9YL._AC_UL320_.jpg'
                />

                <Product
                    id={1233435}
                    title="Sony WH-1000XM4 Wireless Noise Canceling"
                    price={350}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UY218_.jpg'
                />
            </div>

            <div className="home__row">
                <Product
                    id={1233436}
                    title="Acer SB220Q bi 21.5 Inches Full HD"
                    price={299.45}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L._AC_US160_.jpg'
                />
            </div>
        </div>
    )
}

export default Home
