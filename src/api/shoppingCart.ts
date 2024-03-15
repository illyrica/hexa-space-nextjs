const cart = [] as string[];

export const addToCart = (shipId: string) => {
    if (cart.indexOf(shipId) === -1) {
        cart.push(shipId);
    }
}

export const getNumItemsInCart = () => cart.length;
