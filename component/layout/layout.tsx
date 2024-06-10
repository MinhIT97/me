import Head from "next/head";
import React from "react";
import Example from "../Header";
import CoppyRight from "../copyright";




export default function Layout({ children, title, description, thumbnailUrl, url }:
    { children: React.ReactNode, title?: string, description?: string, thumbnailUrl?: string, url?: string }) {
    return (
        <React.StrictMode>
            <div>
                <Head>
                    <title>Minh Nguyen</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="Portfolio Nguyễn Văn Minh developer "
                    ></meta>
                    <meta property="og:image" content="./Group 69.png"></meta>
                    <meta property="og:title" content="Minh Nguyen"></meta>
                    <meta
                        property="og:title"
                        content="Portfolio Nguyễn Văn Minh developer"
                    ></meta>
                </Head>
                <Example />
                <div className="w-full">
                    <CoppyRight />
                </div>
                <main>{children}</main>
            </div>

        </React.StrictMode>
    )
}