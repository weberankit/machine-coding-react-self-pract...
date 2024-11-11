import { useEffect, useState } from "react";

const Scrollintersection = () => {
 
  const arr= [
    {
    "title": "Apple",
    "info": "Apples are one of the most widely consumed fruits globally, praised for their crunchy texture, sweetness, and versatility. They belong to the Rosaceae family and come in over 7,500 varieties. Apples are rich in antioxidants, dietary fiber, and vitamins, contributing to their numerous health benefits. They help reduce the risk of chronic diseases such as heart disease, diabetes, and certain cancers. Apples also contain a powerful antioxidant called quercetin, which has anti-inflammatory properties. In terms of culinary uses, apples are enjoyed fresh, cooked, or dried and are a key ingredient in various products like juice, cider, and vinegar. They're also a staple in many desserts, including pies, crisps, and cakes."
    },
    {
    "title": "Banana",
    "info": "Bananas are elongated, edible fruits produced by large plants belonging to the genus Musa. Native to Southeast Asia, they are now cultivated worldwide in tropical regions. Bananas are notable for their high potassium content, making them beneficial for heart health and maintaining healthy blood pressure. They are also rich in vitamins C and B6, and dietary fiber, supporting digestive health. Bananas come in various sizes and colors, with the most commonly consumed being the Cavendish banana. They are versatile, eaten raw or cooked, and used in baked goods, smoothies, and desserts. Bananas provide sustained energy due to their complex carbohydrates, making them a popular choice among athletes and fitness enthusiasts."
    },
    {
    "title": "Mango",
    "info": "Mangoes are tropical fruits native to South Asia, renowned for their vibrant colors, unique textures, and exceptional sweetness. With over 1,000 varieties, mangoes are rich in vitamins A and C, potassium, and fiber. They support healthy digestion, boost immunity, and provide antioxidant benefits. Mangoes are also a valuable source of minerals like copper and magnesium. In culinary contexts, mangoes are enjoyed ripe or unripe, used in salads, salsas, smoothies, and as a topping for various desserts. They are also pickled, dried, or made into juice and purees. Mango trees are not only a food source but also have cultural and economic significance in many regions, symbolizing prosperity and abundance."
    },
    {
    "title": "Orange",
    "info": "Oranges are spherical, juicy fruits from the Rutaceae family, widely cultivated in tropical and subtropical regions. They are an excellent source of vitamin C, folate, and fiber, supporting immune function and overall health. Oranges come in various types, including navel, Valencia, and blood oranges, each with unique characteristics. They are consumed fresh, juiced, or dried and are integral to culinary traditions worldwide. Oranges have significant historical and cultural importance, representing good fortune and prosperity in many societies. In terms of health benefits, oranges help lower cholesterol levels, improve blood pressure, and provide anti-inflammatory effects due to their high content of flavonoids and carotenoids."
    },
    {
    "title": "Pineapple",
    "info": "Pineapples are tropical fruits with a tough exterior and a sweet, juicy interior. Native to South America, they are now grown globally in warm climates. Pineapples are rich in vitamin C, manganese, and antioxidants, contributing to their anti-inflammatory properties. They contain an enzyme called bromelain, which aids digestion and reduces swelling. Pineapples are enjoyed fresh, cooked, or juiced and are a popular ingredient in Hawaiian, Caribbean, and Asian cuisines. They are also used in desserts, smoothies, and as a topping for yogurt or oatmeal. Pineapples have been linked to several health benefits, including improved immune function, reduced cancer risk, and enhanced oral health."
    },
    {
    "title": "Strawberry",
    "info": "Strawberries are sweet and nutritious fruits belonging to the rose family. They are not true berries but rather an aggregate accessory fruit. Strawberries are packed with vitamin C, potassium, and antioxidants, making them beneficial for heart health and immune function. They contain a unique combination of nutrients and antioxidants that have been shown to reduce the risk of chronic diseases, including heart disease and certain cancers. Strawberries are versatile, enjoyed fresh, frozen, or dried, and are used in jams, smoothies, and desserts. They also have cosmetic applications due to their antioxidant and anti-aging properties. Strawberry cultivation supports local economies and provides essential nutrients to communities worldwide."
    },
    {
    "title": "Watermelon",
    "info": "Watermelons are refreshing and hydrating fruits belonging to the Cucurbitaceae family"
    }
    ]

  const [track, setTrack] = useState(null);
  const [data, setData] = useState(null);

  function callAfterFetch() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(arr);
      }, 3000);
    });
  }

  useEffect(() => {
    const pt = callAfterFetch().then((item) => setData(item));
  }, []);

  useEffect(() => {
    if (!data) return;

    const intersection = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTrack(Number(entry.target.dataset.track));
          }
        });
      },
      { threshold: [0.9]/*,root:document.querySelector(".scroll-container"),rootMargin:"0px" -use provide hand overflow*/}
    );

    const elements = document.querySelectorAll(".item");
    elements.forEach((element) => intersection.observe(element));

    return () => {
      intersection.disconnect();
    };
  }, [data]);

  return (
    <>
      {/* Fixed navigation showing title */}
      <p style={{ position: "fixed", background: "white", padding: "1em", top: 0 }}>
        {data &&
          data.map((item, index) => (
            <span
              style={{
                padding: "0.5em",
                margin: "5px",
                color: index === track ? "gray" : "red",
              }}
              key={item.title}
            >
              {item.title}
            </span>
          ))}
      </p>

      {/* Scrollable content sections */}
      {data && (
        <div
          className="scroll-container"
          style={{
            width: "80%",
            margin: "70px 0", // Space for the fixed title bar
            background: "gray",
            color: "white",
            border: "2px solid black",
          //  height: "600px", // Define height to make it scrollable
          //  overflowY: "scroll", // Add this to enable scrolling
          }}
        >
          {data.map((item, index) => (
            <div key={item.title} data-track={index} className="item" style={{ padding: "1em" ,height:'300px'}}>
              <h2 className="title">{item.title}</h2>
              <div style={{ fontSize: "1em" }}>
                <p>{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Scrollintersection;
