import React, { useState } from 'react';
import './App.css';
import Cards from './Cards';

const products = [
  // ...your existing product array...
  {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
    ]
  },
  {
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/2/1.jpg",
      "https://cdn.dummyjson.com/product-images/2/2.jpg",
      "https://cdn.dummyjson.com/product-images/2/3.jpg",
      "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
    ]
  },
  {
    "id": 3,
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 1249,
    "discountPercentage": 15.46,
    "rating": 4.09,
    "stock": 36,
    "brand": "Samsung",
    "category": "smartphones",
    "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/3/1.jpg"
    ]
  },
  {
    "id": 4,
    "title": "OPPOF19",
    "description": "OPPO F19 is officially announced on April 2021.",
    "price": 280,
    "discountPercentage": 17.91,
    "rating": 4.3,
    "stock": 123,
    "brand": "OPPO",
    "category": "smartphones",
    "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/4/1.jpg",
      "https://cdn.dummyjson.com/product-images/4/2.jpg",
      "https://cdn.dummyjson.com/product-images/4/3.jpg",
      "https://cdn.dummyjson.com/product-images/4/4.jpg",
      "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
    ]
  },
  {
    "id": 5,
    "title": "Huawei P30",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 499,
    "discountPercentage": 10.58,
    "rating": 4.09,
    "stock": 32,
    "brand": "Huawei",
    "category": "smartphones",
    "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/5/1.jpg",
      "https://cdn.dummyjson.com/product-images/5/2.jpg",
      "https://cdn.dummyjson.com/product-images/5/3.jpg"
    ]
  },
  {
    "id": 6,
    "title": "MacBook Pro",
    "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
    "price": 1749,
    "discountPercentage": 11.02,
    "rating": 4.57,
    "stock": 83,
    "brand": "Apple",
    "category": "laptops",
    "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
    "images": [
      "https://cdn.dummyjson.com/product-images/6/1.png",
      "https://cdn.dummyjson.com/product-images/6/2.jpg",
      "https://cdn.dummyjson.com/product-images/6/3.png",
      "https://cdn.dummyjson.com/product-images/6/4.jpg"
    ]
  },
  {
    "id": 7,
    "title": "Samsung Galaxy Book",
    "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    "price": 1499,
    "discountPercentage": 4.15,
    "rating": 4.25,
    "stock": 50,
    "brand": "Samsung",
    "category": "laptops",
    "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/7/1.jpg",
      "https://cdn.dummyjson.com/product-images/7/2.jpg",
      "https://cdn.dummyjson.com/product-images/7/3.jpg",
      "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
    ]
  },
  {
    "id": 8,
    "title": "Microsoft Surface Laptop 4",
    "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    "price": 1499,
    "discountPercentage": 10.23,
    "rating": 4.43,
    "stock": 68,
    "brand": "Microsoft Surface",
    "category": "laptops",
    "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/8/1.jpg",
      "https://cdn.dummyjson.com/product-images/8/2.jpg",
      "https://cdn.dummyjson.com/product-images/8/3.jpg",
      "https://cdn.dummyjson.com/product-images/8/4.jpg",
      "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
    ]
  },
  {
    "id": 9,
    "title": "Infinix INBOOK",
    "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    "price": 1099,
    "discountPercentage": 11.83,
    "rating": 4.54,
    "stock": 96,
    "brand": "Infinix",
    "category": "laptops",
    "thumbnail": "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/9/1.jpg",
      "https://cdn.dummyjson.com/product-images/9/2.png",
      "https://cdn.dummyjson.com/product-images/9/3.png",
      "https://cdn.dummyjson.com/product-images/9/4.jpg",
      "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg"
    ]
  },
  {
    "id": 10,
    "title": "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    "price": 1099,
    "discountPercentage": 6.18,
    "rating": 4.43,
    "stock": 89,
    "brand": "HP Pavilion",
    "category": "laptops",
    "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
    "images": [
      "https://cdn.dummyjson.com/product-images/10/1.jpg",
      "https://cdn.dummyjson.com/product-images/10/2.jpg",
      "https://cdn.dummyjson.com/product-images/10/3.jpg",
      "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg"
    ]
  },
];

const pro = [
  // ...your existing pro array...
  {
    "id": 59,
    "title": "Spring and summershoes",
    "price": 20,
    "quantity": 3,
    "total": 60,
    "discountPercentage": 8.71,
    "discountedPrice": 55,
    "thumbnail": "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
  },
  {
    "id": 88,
    "title": "TC Reusable Silicone Magic Washing Gloves",
    "price": 29,
    "quantity": 2,
    "total": 58,
    "discountPercentage": 3.19,
    "discountedPrice": 56,
    "thumbnail": "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg"
  },
  {
    "id": 18,
    "title": "Oil Free Moisturizer 100ml",
    "price": 40,
    "quantity": 2,
    "total": 80,
    "discountPercentage": 13.1,
    "discountedPrice": 70,
    "thumbnail": "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg"
  },
  {
    "id": 95,
    "title": "Wholesale cargo lashing Belt",
    "price": 930,
    "quantity": 1,
    "total": 930,
    "discountPercentage": 17.67,
    "discountedPrice": 766,
    "thumbnail": "https://cdn.dummyjson.com/product-images/95/thumbnail.jpg"
  },
  {
    "id": 39,
    "title": "Women Sweaters Wool",
    "price": 600,
    "quantity": 2,
    "total": 1200,
    "discountPercentage": 17.2,
    "discountedPrice": 994,
    "thumbnail": "https://cdn.dummyjson.com/product-images/39/thumbnail.jpg"
  },
  {
    "id": 91,
    "title": "Black Motorbike",
    "price": 569,
    "quantity": 3,
    "total": 1707,
    "discountPercentage": 13.63,
    "discountedPrice": 1474,
    "thumbnail": "https://cdn.dummyjson.com/product-images/91/thumbnail.jpg"
  },
  {
    "id": 9,
    "title": "Infinix INBOOK",
    "price": 1099,
    "quantity": 1,
    "total": 1099,
    "discountPercentage": 11.83,
    "discountedPrice": 969,
    "thumbnail": "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg"
  },
  {
    "id": 16,
    "title": "Hyaluronic Acid Serum",
    "price": 19,
    "quantity": 1,
    "total": 19,
    "discountPercentage": 13.31,
    "discountedPrice": 16,
    "thumbnail": "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg"
  },
  {
    "id": 54,
    "title": "Pubg Printed Graphic T-Shirt",
    "price": 46,
    "quantity": 3,
    "total": 138,
    "discountPercentage": 16.44,
    "discountedPrice": 115,
    "thumbnail": "https://cdn.dummyjson.com/product-images/54/thumbnail.jpg"
  }

];

const images = [
  'https://s3-alpha-sig.figma.com/img/fd75/c974/48e5499592e91a27cb78abd5363a8a3d?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnCb5bFcOa2wdD3sZHC-7v7eGtl0tLuZuQfWyY5SCnbucDFeflkpoFB3Hse~ELamh~mxNxP6dAvXBkNOrsUfp8znKXi9u4XE9brafpMs86ZuWRg0ucOpfVewLMJpYSTm88TqjiHmol5xf7c97JY~C2BI8M97NnRVSHx8vcnyoxAc0mt16V2mTbQdnzuqdrceW6DCkoZe5~FMhO~YG9go4Rcse-D8zpLYNba~jQ-Yb8JZxi52SoGr03bVFCCGLKzUCnsV30GnixEFxLeuhf-MS79KsTK7FpViL87hy~fZF8D1Lu7KL706RZXPCaoto7aFP4RDVilDV0Ai9eddqusOTQ__',
  'https://s3-alpha-sig.figma.com/img/507e/aa54/1428f01e767cab74cdffb42837e417f0?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nypMahpXobKBn4Qjkf~fOpm2nRwrI-8RV6bO7gGh60CzaIyj2UG5Ksd041qRWvym9Z3KaTZvhbAPOHKHTU4Ed~tCmF45zK0ONYfQpTf-UPePdhfVcoAA1cj-BHve-RYy6mrX3r6E5mjeeNHSw6WTbKhRSNcaI5dkHJQxzWGnEVJCYOzLBjRCt0RsuWzXW3qgOdoZEF99UoyHge4JRFB-j-8eGrvaoDJ2G~Mj3sPFrWRHP6o2uWuLd-4lXP6AlNCnCYJ9qIgYnB2d263RT9Gbg5cBQziwkWj7NQMKN~9viDZ95QG-cGAJMe9IcLpc-Sol18mMehcB-EAHYkM2qYbM4w__',
  'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb6824f9b/homepage/HeroBanner/rivaah-desktop.jpg',
  'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw8d40a0ea/homepage/posters/gifting-banner-desktop-wb.jpg',
];

function Shop() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showProCards, setShowProCards] = useState(false);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleToggle = () => {
    setShowProCards(true);

  };

  return (
    <div>
      <div className='btns'>
        <div className="slider200">
          <div className="slider-content">
            <button className="left-arrow" onClick={goToPrevious}>❮</button>
            <div className="image">
              <img src={images[currentIndex]} alt="slider" />
            </div>
            <button className="right-arrow" onClick={goToNext}>❯</button>
          </div>
        </div>
      </div>

      <div className='container-Shop'>
        <div className='left_con'>
          <h1>Categories</h1>
          <div>
            <h3>Crystals</h3>
            <ul>
              <li>Gemstone</li>
              <li>Platinum</li>
            </ul>
          </div>
          <div>
            <h3>Carats</h3>
            <ul>
              <li>Gold</li>
              <li>Platinum</li>
            </ul>
          </div>
          <div>
            <h3>Products</h3>
            <ul>
              <li onClick={handleToggle}>Coin</li>
              <li>Biscuit</li>
              <li>Necklace</li>
              <li>Bracelet</li>
              <li>Bangles</li>
              <li>Earrings</li>
              <li>Pendant</li>
              <li>Ring</li>
              <li>Mangalsutra</li>
              <li>Nosepin</li>
            </ul>
          </div>

          <div>
            <h3>Bridal Special</h3>
            <ul>
              <li>Enchanting</li>
              <li>Trendsetter</li>
              <li>Dazzling</li>
              <li>Elegant</li>
            </ul>
          </div>
          <div>
            <h3>Occasional</h3>
            <ul>
              <li>Birthday</li>
              <li>Anniversary</li>
              <li>Baby Birth</li>
              <li>Festive Gifts</li>
            </ul>
          </div>
          <div style={{ padding: "5px" }}>
            <h3>Personalised </h3>
            <h3 style={{ paddingTop: "5px" }}>Jewellery Box</h3>
          </div>
        </div>
        <div className='right_con'>
          <div className='shop'>SHOP</div>
          {showProCards ? (
            <div className='card-shop'>
              <div className="card-shop">
                {products.map((product) => (
                  <Cards key={product.id} product={product} />
                ))}
              </div>
            </div>

          ) : (
            <div className='card-shop'>
              <div className="card-shop1">
                {pro.map((product) => (
                  <Cards key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  );
}

export default Shop;
