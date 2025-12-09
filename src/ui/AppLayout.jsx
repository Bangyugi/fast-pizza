import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/Cart/CartOverview";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(navigation);
  return (
    <div className="layout">
      <Header />

      <main className="overflow-y-auto relative">
        <Outlet />
        {isLoading && <Loader />}
      </main>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
