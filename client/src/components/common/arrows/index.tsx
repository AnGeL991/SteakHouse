import { FC } from "react";
import { Icons } from "components/common";
const { ArrowLeft, ArrowRight } = Icons;

export const SlickArrowPrew: FC = ({
  currentSlide,
  slideCount,
  ...props
}: any) => {
  return (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <ArrowLeft />
    </button>
  );
};
export const SlickArrowNext: FC = ({
  currentSlide,
  slideCount,
  ...props
}: any) => {
  return (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <ArrowRight />
    </button>
  );
};
