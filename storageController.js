export const StorageCtrl = (function(){
    
    return{
      storeItem: function(item){
        let items;
        if(localStorage.getItem('items') === null){
          items = [];
          items.push(item);
  
          localStorage.setItem('items', JSON.stringify(items));
        }else{
          items = JSON.parse(localStorage.getItem('items'));
  
          items.push(item);
  
          localStorage.setItem('items', JSON.stringify(items));
        }
      },
  
      getItemsFromStorage: function(){
        let items;
        if(localStorage.getItem('items') === null){
          items = [];
        }else{
          items = JSON.parse(localStorage.getItem('items'));
        }
  
        return items;
      },
  
      updateItemStorage: function(updatedItem){
        console.log(updatedItem);
        let items = JSON.parse(localStorage.getItem('items'));
        items.forEach(function(item, index){
          if(updatedItem.id === item.id){
            items.splice(index, 1, updatedItem);
          }
        });
        localStorage.setItem('items', JSON.stringify(items));
      },
  
      deleteItmeFromStorage: function(id){
        let items = JSON.parse(localStorage.getItem('items'));
        items.forEach(function(item, index){
          if(id === item.id){
            items.splice(index, 1);
          }
        });
        localStorage.setItem('items', JSON.stringify(items));
      },
  
      clearAllItemsFromStorage: function(){
        localStorage.removeItem('items');
      }
    }
  })();