import Image from "next/image";
import Link from "next/link";
import Company from "../../molecules/FooterItem/Company";
import Connect from "../../molecules/FooterItem/Connect";
import Support from "../../molecules/FooterItem/Support";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="/">
                <a className="mb-30">
                  <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
                </a>
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br />
                {' '}
                untuk menjadi
                pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <Company />
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <Support />
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <Connect />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
