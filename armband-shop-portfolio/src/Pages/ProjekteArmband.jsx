import NavBar from '../components/NavBar.jsx';
import ShopProductCard from '../components/ShopProductCard.jsx';

const armbandProducts = [
    {
        id: 1,
        title: 'Elegantes Lederarmband',
        price: 29.99,
        image: 'path/to/leather-bracelet.jpg',
    },
    {
        id: 2,
        title: 'Beaded Armband',
        price: 19.99,
        image: 'path/to/beaded-bracelet.jpg',
    },
    {
        id: 3,
        title: 'Silberne Armkette',
        price: 49.99,
        image: 'path/to/silver-bracelet.jpg',
    },
];

export default function ProjekteArmbandPage() {
    return (
        <div>
            <NavBar />
            <h1>Unsere Armbänder</h1>
            <div className="product-list">
                {armbandProducts.map(product => (
                    <ShopProductCard 
                        key={product.id} 
                        title={product.title} 
                        price={product.price} 
                        image={product.image} 
                    />
                ))}
            </div>
        </div>
    );
}