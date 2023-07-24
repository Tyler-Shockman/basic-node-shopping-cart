import CartController from "./controllers/cart-controller.js"
import CategoryController from "./controllers/category-controller.js"
import ItemsController from "./controllers/items-controller.js"

export default class Routes {
    applyAll(app) {
        console.log('Applying all routes.')
        this.#applyItemRoutes(app)
        this.#applyCategoryRoutes(app)
        this.#applyCartRoutes(app)
    }

    #applyItemRoutes(app) {
        console.log('Applying item routes.')
        app.get('/items', ItemsController.getAllItems)
        app.get('/item/:itemId', ItemsController.getItem)
    }

    #applyCategoryRoutes(app) {
        console.log('Applying category routes.')
        app.get('/categories', CategoryController.getAllCategories)
        app.get('/categories/:categoryId', CategoryController.getCategory)
    }

    #applyCartRoutes(app) {
        console.log('Applying cart routes.')
        app.get('/cart/:cartId', CartController.getCart)
        app.post('/cart', CartController.createNewCart)
        app.patch('/cart/:cartId/add/:itemId', CartController.addItemToCart)
        app.patch('/cart/:cartId/reduce/:itemId', CartController.reduceItemInCart)
        app.delete('/cart/:cartId/remove/:itemId', CartController.removeItemFromCart)
        app.patch('/cart/:cartId/empty', CartController.emptyCart)
        app.delete('/cart/:cartId', CartController.deleteCart)
    }
}

export const routes = new Routes()
