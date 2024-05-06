import "../Components/addproducts.css"
export const AddProduct = ({ onAddProduct }) => {
    return (
        <div className="add-button-section">
            <button onClick={onAddProduct} className="add-button"><span>+</span></button>
        </div>
    )
}