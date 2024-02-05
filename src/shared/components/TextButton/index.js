export const TextButton = (props) => {
    const { label, onClick } = props || {};
    return (
      <button
        onClick={onClick}
        className={`text-primary font-semibold text-base`}
      >
        {label}
      </button>
    );
  };
  