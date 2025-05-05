const ReturnRefund = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Return & Refund Policy</h1>
            <p className="text-gray-700 mb-2">Updated on 6th February, 2025</p>

            <p className="mb-4">
                Products from E-24 are shipped via air, sea, and local couriers. Customs may open cartons for inspection, which may cause damage. We handle claims with the highest priority.
            </p>

            <h2 className="text-xl font-semibold mt-6">Refunds are applicable if:</h2>
            <ul className="list-disc ml-6 space-y-2">
                <li>Items are damaged—must report within 2 days of receiving with photo evidence.</li>
                <li>Received items do not match the site description.</li>
                <li>Incorrect size or color sent (color may vary 5–10% due to lighting; this is not grounds for return).</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Returns are not accepted if:</h2>
            <ul className="list-disc ml-6 space-y-2">
                <li>Incorrect address was provided.</li>
                <li>You changed your mind after the product reached Bangladesh warehouse.</li>
                <li>Customs inspection caused issues.</li>
                <li>Item is already delivered from the supplier’s warehouse—return is not possible unless returned at buyer’s expense.</li>
                <li>Refunds only apply after 40 days (air) or 90 days (sea), and only under certain conditions.</li>
            </ul>
        </div>
    );
};

export default ReturnRefund;