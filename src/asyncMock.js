/*Array de Productos*/

const products = [
    {
      nombre: "BMW X5 M",
      id: 1,
      img: ,
      precio: 114000,
      category: "SUV",
      descripcion: "SUV de alto rendimiento con motor V8 biturbo, 617 hp y tracción total xDrive.",
      stock: 4
    },
    {
      nombre: "BMW M4",
      id: 2,
      img: ,
      precio: 73000,
      category: "Coupé",
      descripcion: "Coupé deportivo con motor de 6 cilindros en línea, 473 hp y transmisión manual de 6 velocidades.",
      stock: 4
    },
    {
      nombre: "BMW Serie 3 330i",
      id: 3,
      img:,
      precio: 45000,
      category: "Coupé",
      descripcion: "Sedán deportivo con motor turboalimentado de 4 cilindros, 255 hp y transmisión automática de 8 velocidades.",
      stock: 6
    },
    {
      nombre: "BMW Z4 M40i",
      id: 4,
      img:,
      precio: 66000,
      category: "SUV",
      descripcion: "Convertible deportivo con motor de 6 cilindros en línea, 382 hp, suspensión adaptativa y tracción trasera.",
      stock: 6
    },
    {
      nombre: "BMW iX xDrive50",
      id: 5,
      img:,
      precio: 85000,
      category: "SUV",
      descripcion: "SUV eléctrico de lujo con motor de doble propulsor, 516 hp, autonomía de 324 millas y tecnología avanzada.",
      stock: 3
    },
    {
      nombre: "BMW 840i Gran Coupé",
      id: 6,
      img: ,
      precio: 95000,
      category: "Coupé",
      descripcion: "Gran Coupé de lujo con motor turboalimentado de 6 cilindros, 335 hp, interior de alta gama y tecnología de última generación.",
      stock: 4
    }
  ];

  export const getProducts = () =>{
    return new Promise((resolve) => {
      setTimeout(()=>
        resolve(products);
    ,2500)
    })
  }

  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(()=>
        resolve(products.filter((prod)=>prod.category === categoryId))
    ,2500)
    })
  }

  export const getProductsById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(()=>
        resolve(products.filter((prod)=>prod.id === productId))
    ,2500)
    })
  }

  // console.log(products);
  
  