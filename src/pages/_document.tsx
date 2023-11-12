import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '@ignite-ui/react'
import { globalStyles } from '../styles/global'

globalStyles()

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}