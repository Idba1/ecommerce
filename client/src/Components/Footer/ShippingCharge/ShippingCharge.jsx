const ShippingCharge = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Shipping Charges</h1>
            <p className="mb-4">
                Shipping charges at E-24 are calculated based on the actual product weight after arrival. Prices displayed on the site exclude shipping and customs fees.
            </p>
            <ul className="list-disc ml-6 space-y-2">
                <li>Shipping and customs charges are calculated post-arrival, not shown with product price.</li>
                <li>Final costs are based on real-time weight verified at delivery.</li>
                <li>Per kg rates are available at checkout and on the View Cart page.</li>
                <li>Local delivery or transport costs are not included and must be paid separately.</li>
            </ul>
        </div>
    );
};

export default ShippingCharge;