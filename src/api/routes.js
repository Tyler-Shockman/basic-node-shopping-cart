import CartController from "./controllers/cart-controller.js"
import CategoryController from "./controllers/category-controller.js"
import ItemsController from "./controllers/items-controller.js"
import express from 'express';
import { tryWrapper } from "./utils.js";

export const routes = express.Router()

routes.get('/items', tryWrapper(ItemsController.getAllItems))
routes.get('/items/:itemId', tryWrapper(ItemsController.getItem))

routes.get('/categories', tryWrapper(CategoryController.getAllCategories))
routes.get('/categories/:categoryId', tryWrapper(CategoryController.getCategory))

routes.get('/cart/:cartId', tryWrapper(CartController.getCart))
routes.post('/cart', tryWrapper(CartController.createNewCart))
routes.patch('/cart/:cartId/add/:itemId', tryWrapper(CartController.addItemToCart))
routes.patch('/cart/:cartId/reduce/:itemId', tryWrapper(CartController.reduceItemInCart))
routes.delete('/cart/:cartId/remove/:itemId', tryWrapper(CartController.removeItemFromCart))
routes.patch('/cart/:cartId/empty', tryWrapper(CartController.emptyCart))
routes.delete('/cart/:cartId', tryWrapper(CartController.deleteCart))
