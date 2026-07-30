import readline from 'readline/promises';
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

// Database using file starts
const FILE = "product.json";

const getCart = async () => {
    const data = await readFile(FILE, "utf-8");
    return JSON.parse(data);
};

const saveCart = async (cart) => {
    await writeFile(FILE, JSON.stringify(cart, null, 2));
};

const addToCart = async (product) => {
    const cart = await getCart();
    const isFoundInCart = cart.find((item) => item.id === product.id);

    if (isFoundInCart) {
        isFoundInCart.qty += product.qty;
    }
    else {
        cart.push(product);
    }

    await saveCart(cart);
    console.log(`${product.name} added to 🛒`);
};

const displayCart = async () => {
    const cart = await getCart();

    if (cart.length == 0) {
        console.log("🛒 is empty");
        return;
    }

    console.table(cart);

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    console.log(`Total payable amount Rs. ${total}`);
};

const removeProduct = async (id) => {
    const cart = await getCart();

    const newCart = cart.filter((item) => item.id !== id);

    if (newCart.length == cart.length) {
        console.log("Product not found.");
        return;
    }

    await saveCart(newCart);
    console.log("Product removed successfully.");
};

const updateQuantity = async (id, qty) => {
    const cart = await getCart();

    const product = cart.find((item) => item.id === id);

    if (!product) {
        console.log("Product not found.");
        return;
    }

    product.qty = qty;

    await saveCart(cart);

    console.log("Quantity updated.");
};

const checkout = async () => {
    const cart = await getCart();

    if (cart.length == 0) {
        console.log("Cart is empty.");
        return;
    }

    console.table(cart);

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    console.log(`Total payable amount Rs. ${total}`);

    await saveCart([]);

    console.log("Checkout successful.");
};

const main = async () => {
    let choice;
    const cin = readline.createInterface({ input: stdin, output: stdout });

    do {
        console.log("\nWelcome to Amazon Shopping 🛒");
        console.log("1........Show Cart");
        console.log("2........Add Product");
        console.log("3........Remove Product");
        console.log("4........Update Quantity");
        console.log("5........Checkout");
        console.log("6........Exit");

        choice = await cin.question("Enter your choice:");

        switch (Number(choice)) {

            case 1:
                await displayCart();
                break;

            case 2:
                const item = await cin.question("Enter id,name,price,qty:");
                const [id, name, price, qty] = item.split(',').map((p) => p.trim());

                await addToCart({
                    id: Number(id),
                    name,
                    price: Number(price),
                    qty: Number(qty),
                });

                break;

            case 3:
                const removeId = await cin.question("Enter Product ID:");
                await removeProduct(Number(removeId));
                break;

            case 4:
                const updateId = await cin.question("Enter Product ID:");
                const newQty = await cin.question("Enter New Quantity:");

                await updateQuantity(Number(updateId), Number(newQty));
                break;

            case 5:
                await checkout();
                break;

            case 6:
                console.log("Thank you for shopping!");
                break;

            default:
                console.log("🔴 Invalid choice");
        }

    } while (Number(choice) != 6);

    cin.close();
};

main();