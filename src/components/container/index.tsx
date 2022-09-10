import { classNames } from "utils";

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: IContainerProps) => {
  return (
    <div
      className={classNames(className, "w-full max-w-7xl mx-auto px-4",)}
    >
      {children}
    </div>
  );
};
