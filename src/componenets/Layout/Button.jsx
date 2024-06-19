const Button = (props) => {
  return (
    <div>
      <button className="w-[191px] h-[51px] rounded-full bg-primary hover:text-tertiary transition-all">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
