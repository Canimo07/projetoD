// Button.tsx
//Define os tipos de propriedades `label` e `onClick`, cria um botão com um rótulo e um evento de clique.


interface Props {
  label: string;
  onClick: () => void;
}

const Btn = ({ label, onClick }: Props) => {
  return (
    <button onClick={onClick} className="text-red-500 border border-red-500 p-2 mr-4">
      {label}
    </button>
  );
};

export default Btn;

