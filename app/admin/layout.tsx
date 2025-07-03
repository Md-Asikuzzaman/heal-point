import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      admin header
      {children}
    </>
  );
};

export default Layout;
