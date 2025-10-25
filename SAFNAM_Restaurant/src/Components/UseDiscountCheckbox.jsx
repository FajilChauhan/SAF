import React, { useState, useEffect } from "react";

const UseDiscountCheckbox = ({ onDiscountApply }) => {
  const [discountData, setDiscountData] = useState(null);
  const [useDiscount, setUseDiscount] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("gameDiscount"));
    const today = new Date().toISOString().split("T")[0];
    if (data && data.date === today && data.discount > 0) {
      setDiscountData(data);
    }
  }, []);

  const handleCheckbox = (e) => {
    const checked = e.target.checked;
    setUseDiscount(checked);

    if (checked && discountData && !discountData.used) {
      // Apply discount to parent form
      onDiscountApply(discountData.discount);

      // Mark discount as used
      const updated = { ...discountData, used: true };
      localStorage.setItem("gameDiscount", JSON.stringify(updated));
      setDiscountData(updated);
    } else if (!checked) {
      // Remove discount
      onDiscountApply(0);
    }
  };

  if (!discountData) return null;

  return (
    <div className="mt-4 bg-green-50 p-3 rounded-lg border border-green-400 text-green-700">
      {discountData.used ? (
        <p className="text-sm font-medium">
          ✅ You’ve already used your {discountData.discount}% discount today.
        </p>
      ) : (
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={useDiscount}
            onChange={handleCheckbox}
            className="w-4 h-4 accent-green-600 cursor-pointer"
          />
          <span className="text-sm font-medium">
            💸 Use my {discountData.discount}% discount on this booking
          </span>
        </label>
      )}
    </div>
  );
};

export default UseDiscountCheckbox;
