const classStyle = {
    primary: "text-3xl font-bold text-white",
    secondary: "text-xl font-semibold text-amber-500",
  };
  
  export default function HeadingComponent({ children, type }) {
    return (
      <h2 className={classStyle[type]}>
        {children}
      </h2>
    );
  }