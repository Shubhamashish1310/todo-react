import { DeleteTwoTone } from "@ant-design/icons";

// eslint-disable-next-line react/prop-types
export default function Button({ index, handleDelete }) {
    return (
        <button 
            onClick={() => handleDelete(index)} 
            className="btn btn-error">
            <DeleteTwoTone />
        </button>
    );
}
