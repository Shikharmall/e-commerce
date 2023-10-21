
  
  
  export const addItemInCart = (id: number, title: string, amount: number, price: number, image: string)=>{

    let cartItem = {id:id, title:title, amount:amount, price:price, image:image};

    let totalll = amount*price;

    try {
        const storedValuecarttt = localStorage.getItem('carttt');
    
        if (storedValuecarttt) {
          const storedValuecarttt1 = JSON.parse(storedValuecarttt);

          let totalll1String = localStorage.getItem('totalll'); 
          let totalll1 = Number(totalll1String); 
          
          if (!isNaN(totalll1)) { 

            totalll1 = totalll1 + totalll; 
            localStorage.setItem('totalll', totalll1.toString()); 

          } 

    
          if (Array.isArray(storedValuecarttt1)) {
            const mergedcarttt1 = [...storedValuecarttt1, cartItem];
            localStorage.setItem('carttt', JSON.stringify(mergedcarttt1));
            localStorage.setItem('carttt', JSON.stringify(mergedcarttt1));
          } else {
            console.error('The stored cart is not an array.');
          }

        } else {
          localStorage.setItem('carttt', JSON.stringify([cartItem]));
          localStorage.setItem('totalll', JSON.stringify(totalll));
        }

      } catch (error) {
        console.error('Error parsing or updating the cart:', error);
      }

  }

  export const removeItemInCart = (id: number)=>{

    //let array = [1, 2, 3, 4, 5];
    //let indexToRemove = 2; // Index of the element to remove
    //array.splice(indexToRemove, 1); // Removes one element at the specified index
    //console.log(array); 

    try{

      const storedValuecarttt = localStorage.getItem('carttt');
  
      if(storedValuecarttt){

        const storedValuecarttt1 = JSON.parse(storedValuecarttt);
  
        if(Array.isArray(storedValuecarttt1)){

          console.log(storedValuecarttt1);

          let indexToRemove = 0; 
          storedValuecarttt1.splice(indexToRemove, 1);

          console.log(storedValuecarttt1);

          localStorage.setItem('carttt', JSON.stringify(storedValuecarttt1));

        } else {
          console.error('The stored cart is not an array.');
        }

      }

    }catch(error) {
      console.error('Error parsing or updating the cart:', error);
    }
      
    console.log(id);

  }