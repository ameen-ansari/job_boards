const Loader = (props) => (
    <svg
      className={`animate-spin h-6 w-6 mx-auto my-4 ${props.stroke}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      style={props?.customStyle}
    >
      <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export default Loader;
  