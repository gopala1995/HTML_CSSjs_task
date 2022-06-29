const listOfProducts = [
    {
      productName: "TV",
      quantity: 10,
      description: "television",
    },
    {
      productName: "AC",
      quantity: 5,
      description: "air conditioner",
    },
    {
      productName: "TV",
      quantity: 10,
      description: "television",
    },
    {
      productName: "AC",
      quantity: 5,
      description: "air conditioner",
    },
    {
      productName: "FAN",
      quantity: 10,
      description: "Ceiling Fan",
    },
  ];
  
  const getUniqueProductCount = (listOfProducts) => {
    let newData = {};
    listOfProducts.forEach((el) => {
      newData[el.productName] = (newData[el.productName] || 0) + 1;
    });
    return newData;
  };
  
  console.log(getUniqueProductCount(listOfProducts));
  
  let total = listOfProducts.reduce((acc, curr) => {
    let findIndex = acc.findIndex(
      (item) => item.productName === curr.productName
    );
  
    if (findIndex === -1) {
      acc.push(curr);
    } else {
      acc[findIndex].quantity += curr.quantity;
    }
    return acc;
  }, []);
  
  console.log(total);