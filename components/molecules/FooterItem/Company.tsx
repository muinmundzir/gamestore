import CompanyItem from "./CompanyItem";

export default function Company() {
  return (
    <>
      <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
      <ul className="list-unstyled">
        <CompanyItem title="About Us" href="/about-us" />
        <CompanyItem title="Press Release" href="/press-release" />
        <CompanyItem title="Terms of Use" href="/terms-of-use" />
        <CompanyItem title="Privacy & Policy" href="/privacy-and-policy" />
      </ul>
    </>
  );
}
