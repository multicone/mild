import { classNames } from "utils"

interface IHeadlineProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export const Headline = ({ title, subtitle, centered }: IHeadlineProps) => {
  return (
    <div className={classNames(centered ? 'lg:text-center' : 'lg:text-left', "flex flex-col headline text-center lg:col-span-5 gap-3")}  >
      <h2 className={classNames("text-2xl lg:text-3xl font-medium text-white")}>
        {/* Supported Languages */}
        {title}
      </h2>
      <h6 className=" text-sm text-gray-300 whitespace-normal max-w-md">
        {/* Ethereum based languages Ethereum based languages Ethereum based
        languages{" "} */}
        {subtitle}
      </h6>
    </div>
  );
}
