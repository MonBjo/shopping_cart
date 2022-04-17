import './product.css';

function Product(props) {
    const { productInfo, updateCart } = props;

    function addProduct() {
        updateCart(productInfo);
    }

    return (
        <article className='product'>
            <h2>{ productInfo.title }</h2>
            <h3>{ productInfo.author }</h3>
            <p>{ productInfo.description }</p>
            <button className='product__button'
                onClick={ addProduct }>Add to cart</button>
        </article>
    )
}

export default Product;