import React,{useState} from 'react';
import TestHeader from './TestHeader';
import SectionContent from './UI/SectionContent';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import Button from './UI/Button';
import theme from '../config/theme';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


const TestLayout = ({children}) => {

  return (
    <div>
      <Head>
        <title>The title</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
      </Head>
      <TestHeader/>
      
      {children}
      
      <div id="portal"></div>


      { /* GLOBAL STYLE ======================================================================================= */}
      <style jsx global>{`
        *{
          color: ${theme.colors.textColor};
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
          text-decoration: none;
          font-family: Arial, Helvetica, sans-serif;
        }

        html{
          font-size: 100%;
        }
        
        #nprogress .bar{
          background: #fa2549 !important;
          border-color: #fa2549 !important;
        }

        #nprogress .spinner{
          display: none;
        }

        hr{
          border: none;
          border-top: 1px solid ${theme.colors.borderColor};
          margin: 15px auto;
        }

        input{
          border: 1px solid ${theme.colors.borderColor};
          border-radius: 5px;
          padding: 8px 12px;
          font-size: 1rem;
          outline: none;
          background: none;
        }

        input::placeholder{
          color: ${theme.colors.lightestText};
        }

        @media screen and (max-width: 700px){
          html {
            font-size: 85%;
          }
        }
      `}</style>
    </div>
  );
};

export default TestLayout;