import { useEffect, useState } from "react";

export default function HospitalServices() {
  const [select, setSelect] = useState<string[]>([]);

  function handleOnClick(e: React.MouseEvent<HTMLDivElement>) {
    const id = e.currentTarget.id;
    setSelect((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }

  useEffect(
    function () {
      console.log("From Effect Hook:", select);

      return function () {
        console.log("❤️from clean:", select);
      };
    },
    [select],
  );

  return (
    <div>
      <h3>Hopsital Services</h3>
      <div id="product1" onClick={handleOnClick}>
        Product 1
      </div>
      <div id="product2" onClick={handleOnClick}>
        Product 2
      </div>
      <div id="product3" onClick={handleOnClick}>
        Product 3
      </div>
      <div id="product4" onClick={handleOnClick}>
        Product 4
      </div>
    </div>
  );
}
