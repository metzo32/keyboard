import { HiOutlinePaperClip } from "react-icons/hi";

export default function LinkButton() {
  return (
    <div className="link-button-container">
    <a
      href="https://smartstore.naver.com/dfshop1/products/10311254657?NaPm=ct%3Dm30wxxdy%7Cci%3Dcheckout%7Ctr%3Drete%7Ctrx%3Dnull%7Chk%3Dcdd72202dec441c8eb2f76b854f5c95026826df8"
      target="_blank"
      rel="noopener noreferrer"
      className="link-button group"
    >
      <HiOutlinePaperClip className="icons block group-hover:hidden" />
      <span className="hidden group-hover:block whitespace-nowrap lg:text-base text-sm">
        구매 링크
      </span>
    </a>
    </div>
  );
}
