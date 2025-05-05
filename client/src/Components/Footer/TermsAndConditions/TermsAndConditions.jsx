const TermsAndConditions = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-gray-700 mb-2">Updated on 6th February, 2025</p>

            <ul className="list-disc ml-6 space-y-4">
                <li>We only purchase products from China after receiving your order—no pre-stock available.</li>
                <li>60% advance payment is required; remaining 40% plus shipping is due on delivery.</li>
                <li>Product weights are based on supplier data and may vary slightly. Actual weight determines final shipping/customs costs.</li>
                <li>Air-shipped items take 12–24 days from warehouse arrival; sea-shipped items take 45–60 days.</li>
                <li>Local courier/transport charges are not included in product prices.</li>
                <li>Refunds are possible only if air shipments exceed 40 days or sea shipments exceed 90 days, under specific conditions.</li>
                <li>Ordering items banned by customs will lead to cancellation and a 2.5% gateway fee deduction from your refund.</li>
                <li>If your order includes items from multiple suppliers, they may arrive separately. Early delivery requests require full payment of pending balances.</li>
            </ul>

            <p className="mt-6">For any questions, contact us at <strong>+8801315092215</strong>.</p>
        </div>
    );
};

export default TermsAndConditions;