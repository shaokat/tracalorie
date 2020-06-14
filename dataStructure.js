import{StorageCtrl} from './storageController.js';
 // Data Structure / State
 export const data = {
    // items: [
    //   // {id: 0, name: 'Steak Dinner', calories: 1200},
    //   // {id: 1, name: 'Cookie', calories: 400},
    //   // {id: 2, name: 'Eggs', calories: 300}
    // ],

    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  }