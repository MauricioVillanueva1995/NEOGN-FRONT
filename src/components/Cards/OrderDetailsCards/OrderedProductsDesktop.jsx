import DetailOrderCardDesktop from "./DetailOrderCardDesktop";

const OrderedProductsDesktop = ({ products }) => {
  return (
    <div className="w-auto h-auto font-general-sans text-base font-medium">
      Products:
      <div className="w-[325px] flex flex-col justify-start items-center gap-y-[14px] border border-[#E8E8E8] rounded-lg p-2 h-auto max-h-[250px] overflow-hidden overflow-y-auto">
        {products && products.map((product, index) => 
          <DetailOrderCardDesktop product={product} key={index} />
        )}
      </div>
    </div>
  );
};

export default OrderedProductsDesktop;
