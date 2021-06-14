import { FC, ReactNode } from "react";
import { ContainerLayout, Footer, MainMenu } from "components/layout";

interface IMainLayout {
  children: ReactNode;
}

export const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <section>
      <MainMenu />
      <ContainerLayout>{children}</ContainerLayout>
      <Footer />
    </section>
  );
};
