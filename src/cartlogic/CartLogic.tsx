  
  //add item to cart

  export const addItemInCart = (idd: number, title: string, amountt: number, price: number, image: string)=>{

    let cartItem = {id:idd, title:title, amount:amountt, price:price, image:image};

    try{

      const storedValuecarttt = localStorage.getItem('carttt');
    
      if (storedValuecarttt) {

        const storedValuecarttt1 = JSON.parse(storedValuecarttt);

        if(Array.isArray(storedValuecarttt1)){

          let flag: number = 0;

          //if item already present

          storedValuecarttt1.map((item,index)=>{

            if(item.id === idd){

              flag = 1;
              storedValuecarttt1[index].amount =  storedValuecarttt1[index].amount + amountt;
              localStorage.setItem('carttt', JSON.stringify(storedValuecarttt1));

            }

          })

          if(flag === 0){
            
            const mergedcarttt1 = [...storedValuecarttt1, cartItem];
            localStorage.setItem('carttt', JSON.stringify(mergedcarttt1));

          }

        } else {
          console.error('The stored cart is not an array.');
        }

      }else{
        localStorage.setItem('carttt', JSON.stringify([cartItem]));
      }

    }catch(error){
      console.error('Error parsing or updating the cart:', error);
    }

  }

  //remove item from cart

  export const removeItemInCart = (iddd: number)=>{

    try{

      const storedValuecarttt = localStorage.getItem('carttt');
  
      if(storedValuecarttt){

        const storedValuecarttt1 = JSON.parse(storedValuecarttt);
  
        if(Array.isArray(storedValuecarttt1)){

          storedValuecarttt1.map((item,index)=>{
            if(item.id === iddd){

              let indexToRemove: number = index; 
              storedValuecarttt1.splice(indexToRemove, 1);

              localStorage.setItem('carttt', JSON.stringify(storedValuecarttt1));
            }
          })

        } else {
          console.error('The stored cart is not an array.');
        }

      }

    }catch(error) {
      console.error('Error parsing or updating the cart:', error);
    }

  }