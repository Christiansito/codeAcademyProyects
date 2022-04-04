const menu = {
    _courses:{
      appetizers: [], 
      mains: [], 
      desserts:[],
      },
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(appetizerIn) {
      this._courses.appetizers = appetizerIn
    },
      get mains() {
        return this._courses.mains;
    },
    set mains(mainIn) {
      this._courses.main = mainIn;
    },
      get desserts() {
        return this._courses.desserts;
    },
    set desserts(dessertIn) {
      this._courses.desserts = dessertIn;
    },
    get courses() {
      return {
       appetizers: this.appetizers,
       mains: this.mains,
       desserts: this.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
  
      return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price to pay is $${totalPrice}.`
    },
      
  };
  
  menu.addDishToCourse('appetizers', 'Empanadas', 7);
  menu.addDishToCourse('appetizers', 'Chicken Salad', 4);
  menu.addDishToCourse('appetizers', 'Wine and Cigarretes', 12);
  
  menu.addDishToCourse('mains', 'Pure Mambo Jambo', 15);
  menu.addDishToCourse('mains', 'Plain Fries', 4);
  menu.addDishToCourse('mains', 'Bento', 12);
  
  menu.addDishToCourse('desserts', 'Chocolate Volcano', 6);
  menu.addDishToCourse('desserts', 'More Cigarretes', 18);
  menu.addDishToCourse('desserts', 'Coffee', 2);
  
  const meal = menu.generateRandomMeal();
  
  console.log(meal);