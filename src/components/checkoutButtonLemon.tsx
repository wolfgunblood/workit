

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { UserButton, useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  //If using Stack Auth ,Uncomment below
  // const user = useUser();
  //Use your desired user authentication
  const user = { id: null, name: "Joe", email: "joe@email.com" };

  // REAl
  //   const product = {
  //     variantOne: "408275",
  //     variantTwo: "408277",
  //   };

  //   TEST
  const product = {
    variantOne: "432946",
    variantTwo: "522913",
  };

  const handleCheckout = async (product: string) => {
    if (!user) {
      router.push("/handler/signup");
      return;
    }
    try {
      const response = await fetch("api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product_id: product, user_id: user.id }),
      });

      if (!response.ok) {
        throw new Error("HTTP error! Status: " + response.status);
      }

      const data = await response.json();
      //   console.log(data);
      window.open(data.checkoutUrl as string, "_blank");
    } catch (error) {
      // console.error(error);
      alert("Failed to buy product #1");
    }
  };
  return (
    <>
      <Button
        onClick={() => handleCheckout(product.variantOne)}
        disabled={loading}
      >
        {loading ? "Processing..." : "Product 1"}
      </Button>
      <Button
        variant="secondary"
        onClick={() => handleCheckout(product.variantTwo)}
        disabled={loading}
      >
        {loading ? "Processing..." : "Product 2"}
      </Button>
    </>
  );
}
