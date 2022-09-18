import React from "react";
import MainLayout from "../layouts/main.layout";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <MainLayout>
      <div>
        <h1>Page not found</h1>
        <Link href={'/'}>
          <p>Go back safety</p>
        </Link>
      </div>
    </MainLayout>
  );
};

export default ErrorPage;
