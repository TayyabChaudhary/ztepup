import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/Components/login-page/Header";
import Layout from "./Dashboard/Layout";
import Posts from "@/Components/Dashboard/Posts/Posts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* <Layout /> */}
      <Posts />
    </div>
  );
}
