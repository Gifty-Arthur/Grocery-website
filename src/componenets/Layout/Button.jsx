/* eslint-disable react/prop-types */
const Button = ({ title, Icon, className }) => {
  return (
    <div>
      <button
        className={`flex items-center justify-center hover:text-black ${className}`}
      >
        <span className="">{title}</span>
        {Icon && <Icon className="  ml-2" />}
      </button>
    </div>
  );
};

export default Button;
