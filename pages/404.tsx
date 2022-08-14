import React from "react";
import MainLayout from "../layouts/main.layout";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <MainLayout>
      <div className={'text-center'}>
        <h1 className={'mt-3 text-3xl font-extrabold text-red-600'}>Page not found</h1>
        <Link href={'/'}>
          <p className={'mt-5 text-2xl cursor-pointer text-indigo-600 underline'}>Go back safety</p>
        </Link>
      </div>
    </MainLayout>
  );
};

export default ErrorPage;
