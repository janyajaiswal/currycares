import "../Components/addproducts_nv.css"
export const AddProduct_nv = ({ onAddProduct }) => {
    return (
        <div className="add-button-section">
            <button onClick={onAddProduct} className="add-button_nv"><span>+</span></button>
        </div>
    )
}