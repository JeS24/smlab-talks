import Author from "./Author";
import Datetime from "./Datetime";

interface SubtitleProps {
  author: string;
  pubDatetime: string | Date;
  modDatetime: string | Date | undefined | null;
}

interface Props extends SubtitleProps {
  size?: "sm" | "lg";
  className?: string;
}

export default function Subtitle({
  author,
  pubDatetime,
  modDatetime,
  size = "sm",
  className = "",
}: Props) {
  return (
    <span
      className={`flex items-center justify-between space-x-2 opacity-80 ${className}`.trim()}
    >
      <Author author={author} size={size} className={className} />
      <Datetime
        pubDatetime={pubDatetime}
        modDatetime={modDatetime}
        size={size}
        className={className}
      />
    </span>
  );
}
