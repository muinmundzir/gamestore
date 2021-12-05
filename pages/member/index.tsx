import OverviewContent from "../../components/organisms/OverviewContent";
import Sidebar from "../../components/organisms/Sidebar";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";
import jwtDecode from "jwt-decode";

interface MemberProps {
  user: UserTypes;
}

export default function Member(props: MemberProps) {
  const { user } = props;

  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string
    }
  },
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userData: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMAGE;
  userData.avatar = `${IMG}/${userData.avatar}`;
  return {
    props: {
      user: userData,
    },
  };
}
