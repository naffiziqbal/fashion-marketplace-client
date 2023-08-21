const ProductCard = (product) => {
    const { image, name, creator_name, price, isVerified } = product.product;
    console.log(isVerified);
  return (
    <div>
      <div className="border p-3 transparent__bg rounded-xl  hover:border-primary hover:duration-500">
        <img className="max-w-[200px]" src={image} alt="" />
        <p>{name}</p>
        <p>{creator_name}</p>
        <p>{price}</p>
        <p>{isVerified ? "v" : "n"}</p>
      </div>
    </div>
  );
};

export default ProductCard;
