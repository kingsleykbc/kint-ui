import React,{useState} from 'react';
import theme from '../../config/theme';
import DotLoader from './DotLoader';

const Image = ({
  src,
  alt,
  lock,
  isSquare,
  placeholder,
  width,
  height,
  responsiveWidth,
  mobileWidth,
  mobileHeight,
  display,
  isRounded,
  borderRadius,
  hasShadow,
  fit,
  isLoading
}) => {
  const [hasLoaded, sethasLoaded] = useState(false);


  /**
   * GET CSS
   */
  placeholder = placeholder || "../../static/images/img_placeholder.svg";
  width= width || "100px";
  height = isSquare ? width : (height) ? height : "auto";
  mobileWidth = mobileWidth || width;
  mobileHeight = mobileHeight || height;
  borderRadius = (isRounded) ? "50%" : borderRadius ? borderRadius : "5px";
  display = display || "inline-block";
  fit = fit || "contain";
  const boxShadow = (hasShadow )? theme.boxShadows.smallShadow : "none";

  const minHeight = (hasLoaded || height !== "auto") ? "none" : width;

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div className="Image">
      {(isLoading || !hasLoaded) && <div className="loading"> <DotLoader /> </div>} 
      {lock && <div className="lock"></div>}
      <img 
        alt={alt} 
        src={src || placeholder} 
        ref={(input) => {
          if (!input) { return; }
          const img = input;

          const updateFunc = () =>  sethasLoaded(true);

          img.onload = updateFunc;
          if (img.complete) {
            updateFunc();
          }
        }}
      />

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .Image {
          width: ${width};
          height: ${height};
          overflow: hidden;
          border-radius: ${borderRadius};
          background: ${theme.colors.highlightColor};
          position: relative;
          display: inline-block;
          box-shadow: ${boxShadow};
          vertical-align: middle;
          max-width: 100%;
          min-height: ${minHeight};
        }


        .loading, .lock {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${theme.colors.highlightColor};
        }

        .lock {
          opacity: 0;
        }

        img {
          width: 100%;
          height: 100%;
          vertical-align: middle;
          display: block;
          object-fit: ${fit};
        }

        @media screen ${`and`} (max-width: ${responsiveWidth || "800px"}){
          .Image {
            width: ${mobileWidth};
            height: ${mobileHeight};
          }
        }   
      `}</style>
    </div>
  );
};

export default Image;