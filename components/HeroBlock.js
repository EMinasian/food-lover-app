import HeadingComponent from "./HeadingComponent";

export default function HeroBlock({ heading, subHeading, children }) {
  return (
    <div className="flex flex-col p-16 gap-2">
      <HeadingComponent type="primary">{heading}</HeadingComponent>
      <HeadingComponent type="secondary">{subHeading}</HeadingComponent>
      <div className="flex gap-4 py-2">{children}</div>
    </div>
  );
}
