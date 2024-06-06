
type Props ={
    label:string;
    onClick: () => void;
}

export const CustomButton = ({label, onClick}: Props) => {
    return (
        <div>
        <button onClick={onClick} className="mb-3 text-1xl font-bold text-red-500 border border-black-500 p-1 rounded-md">
            {label}
        </button>
        </div>
    );
}