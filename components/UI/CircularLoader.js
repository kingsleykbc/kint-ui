import React from 'react';
import theme from '../../config/theme';

const CircularLoader = ({ width, color, light }) => {
  width = width || "40px";
  color = color || theme.colors.primaryColor;

  return (
    <div>
      {(light) ? <span className="middle inner"></span>
        : <span><span className="middle"><span className="inner"></span></span></span>
      }

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .inner {
          width: ${width};
          height: ${width};
        }

        .middle{
          border-top-color: transparent;
          animation: spin 2s linear infinite;
        }

        span{
          display: inline-block;
          vertical-align: middle;
          border-radius: 50%;
          border: 4px solid ${color};
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CircularLoader;