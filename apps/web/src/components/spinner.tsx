import { SpinnerIcon } from "@rallly/icons";
import clsx from "clsx";

export const Spinner = (props: { className?: string }) => {
  return (
    <SpinnerIcon
      className={clsx("inline-flex h-5 animate-spin", props.className)}
    />
  );
};
