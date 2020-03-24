import React,{useState} from 'react';
import TestHeader from './TestHeader';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import theme from '../config/theme';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


const TestLayout = ({head, children}) => {
  head = head || {};

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div>
      <Head>
        <title>{head.title}</title>
        <meta name="description" content={head.description}/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
      </Head>
      <TestHeader/>
      
      {children}
      
      <div id="portal"></div>


      { /* GLOBAL STYLE ======================================================================================= */}
      <style jsx global>{`
        @charset "UTF-8";
        @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

        *{
          color: ${theme.colors.textColor};
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
          text-decoration: none;
          font-family: Arial, Helvetica, sans-serif;
          font-display: block;
        }

        html{
          font-size: 100%;
        }
        
        #nprogress .bar{
          background: ${theme.colors.primaryColor} !important;
          border-color: ${theme.colors.primaryColor} !important;
        }

        #nprogress .spinner{
          display: none;
        }

        hr{
          border: none;
          border-top: 1px solid ${theme.colors.borderColor};
          margin: 15px auto;
        }

        /**
         *  CHECKBOX
        **/
        label .checkBox {
          display: none;
        }

        label .checkBox + span:before {
          content: "";
          color: #c2c3dd;
          font-family: "FontAwesome";
          font-style: normal;
          font-weight: normal;
          font-size: 1.4em;
          font-variant: normal; 
          text-transform: none;
          line-height: 1;
          font-smoothing: antialiased;
          vertical-align: middle;
          width: 1em;
          display: inline-block;
          margin-right: 8px;
          cursor: pointer;
        }

        label .checkBox:checked + span:before {
          content: "";
          color: ${theme.colors.primaryColor};
          vertical-align: middle;
          animation: tick 0.3s ease-in;
        }

        label .checkBox:disabled + span {
          color: ${theme.colors.lightText};
          vertical-align: middle;
        }


        @keyframes tick {
          0% {
            transform: scale(0.8);
          }
          90% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
          }
        }

        /**
         *  RADIO
        **/
        .radioBox:checked, .radioBox:not(:checked) {
          position: absolute;
          left: -9999px;
        }
        .radioBox:checked + span,
        .radioBox:not(:checked) + span {
          position: relative;
          padding-left: 30px;
          cursor: pointer;
          line-height: 20px;
          display: inline-block;
          color: ${theme.colors.textColor};
        }

        .radioBox:disabled + span{
          color: ${theme.colors.lightText};
        }
        
        .radioBox:checked + span:before,
        .radioBox:not(:checked) + span:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 16px;
          height: 16px;
          border: 2px solid #cfcfe9;
          border-radius: 100%;
        }

        .radioBox:checked + span:after,
        .radioBox:not(:checked) + span:after {
          content: '';
          width: 12px;
          height: 12px;
          background: ${theme.colors.primaryColor};
          position: absolute;
          top: 4px;
          left: 4px;
          border-radius: 100%;
          transition: ${`all`} 0.2s ease;
        }

        .radioBox:not(:checked) + span:after {
          opacity: 0;
          -webkit-transform: scale(0);
          transform: scale(0);
        }
        .radioBox:checked + span:after {
          opacity: 1;
          -webkit-transform: scale(1);
          transform: scale(1);
        }
                
        /* SWITCH CHECKBOX */
        .switch{
          position: relative;
          height: 10px;
          width: 50px;
          appearance: none;
          background: ${theme.colors.lightestText};	
          outline: ${`none`};
          vertical-align: middle;
          border-radius: 20px;
          transition: 1s; 
          cursor: pointer;
          border: none;
          margin-right: 15px;
        }

        .switch:checked{
          background: ${theme.colors.primaryColor};
          transition: 1s;
        }

        .switch:before{
          content: ' ';
          position: absolute;
          width: 25px;
          height: 25px;
          background: ${theme.colors.backgroundColor};
          border-radius: 50%;
          top:-5px;
          transition: .4s; 
          left: 0;
          box-shadow: 0 1px 3px rgba(74, 81, 192, 0.308);
        }

        .switch:checked:before{
          left: 25px;
        }
        
        /**
         * REGULAR INPUT
         */
        input, select, textarea {
          border: 1px solid ${theme.colors.borderColor};
          border-radius: 5px;
          padding: 8px 12px;
          font-size: 1rem;
          outline: none;
          height: 42px;
          background: none;
          appearance: none;
          transition: ${`all linear`} 0.2s;
        }

        textarea {
          resize: none;
          height: 120px;
        }

        input::placeholder, textarea::placeholder{
          color: ${theme.colors.lightestText};
        }

        input:focus, textarea:focus, select:focus {
          box-shadow: ${theme.boxShadows.smallShadow};
          border: none;
        }
        
        input.hasError, select.hasError {
          border-color: ${theme.colors.dangerColor};
        }
        
        input[type="text"]:disabled, select:disabled, textarea:disabled {
          color: ${theme.colors.lightText};
          background: ${theme.colors.faintColor};
        }

        h5{
          color: ${theme.colors.dangerColor};
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