import { useState, useEffect, Suspense, lazy } from "react";
import { Wallet } from "@mercadopago/sdk-react";
import { useSelector } from "react-redux";
import axios from "axios";

const WalletPayment = () => {
  const user = useSelector((state) => state.user);
  const items = useSelector((state) => state.cart.items);
  const amount = useSelector((state) => state.cart.totalPrice);
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const createPreference = async (items) => {
    try {
      const response = await axios.post(
        "https://neogn-back-584v.onrender.com/api/payment/create-preference",
        {
          userId: user.id,
          items: items.map((item) => ({
            id: item.id,
            title: item.name,
            description: item.description,
            picture_url: item.image,
            quantity: Number(item.quantity),
            unit_price: Number(item.price),
          })),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      const id = data.id;

      return id;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    async function fetchPreferenceId() {
      const id = await createPreference(items);
      setPreferenceId(id);
      setIsLoading(false);
    }
    fetchPreferenceId();
  }, [items]);

  const LazyWallet = lazy(() => {
    return new Promise((resolve) => {
      if (preferenceId && preferenceId !== null) {
        resolve({
          default: () => (
            <Wallet
              initialization={{ amount, preferenceId, redirectMode: "self" }}
              customization={{
                visual: { buttonBackground: "black", borderRadius: "20px" },
              }}
            />
          ),
        });
      }
    });
  });

  if (isLoading && !preferenceId) {
    return <span>Cargando...</span>;
  }

  if (!preferenceId) {
    return <span>Error al obtener el ID de preferencia.</span>;
  }

  return (
    <div>
      <Suspense fallback={<span>Cargando...</span>}>
        <LazyWallet />
      </Suspense>
    </div>
  );

};

export default WalletPayment;
