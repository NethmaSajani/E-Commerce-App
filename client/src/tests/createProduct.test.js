import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateProduct from "../components/mainpages/createProduct/CreateProduct";

test('if price and title is entered, the create button becomes enabled', async () => {
    render(<CreateProduct sender={{ id: '5' }} receiver={{ id: '5' }} />);

    expect(await screen.findByRole('button', { name: /CreateProductButton/i })).toBeDisabled();

    userEvent.type(screen.getByPlaceholderText(/product_id/i), "ID1234");
    userEvent.type(screen.getByPlaceholderText(/title/i), "Bag");
    userEvent.type(screen.getByPlaceholderText(/price/i), "5000");
    userEvent.type(screen.getByPlaceholderText(/description/i), "latest bag");
    userEvent.type(screen.getByPlaceholderText(/content/i), "latest bag");
    userEvent.type(screen.getByPlaceholderText(/category/i), "Shoes");

    expect(await screen.findByRole('button', { name: /CreateProductButton/i })).toBeEnabled();
});