import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import Home from "@/containers/Home";
import { useActiveTab } from "@/store";

const Portfolio = () => {
  const activeTab = useActiveTab();

  const renderTab = () => {
    switch (activeTab) {
      case "_hello": {
        return <Home />;
      }
    }
  };

  return (
    <main className="flex flex-col border-primary w-full h-full overflow-y-auto main-background">
      <Header />
      {renderTab()}
      <Footer />
    </main>
  );
};

export default Portfolio;
