import React from 'react';
import ListView from '../../UI/ListView';
import ListItem from '../../UI/ListItem';
import IcPerson from 'react-icons/lib/md/account-circle';
import theme from '../../../config/theme';

const CommentList = ({comments}) => {
  return (
    <div className="CommentList">
      <ListView component={Comment} data={comments} keyAttribute="id" />
    </div>
  );
};

const Comment = ({ user, time_ago, content  }) => {
  return (
    <div className="Comment">
      <ListItem
        icon={<IcPerson/>}
        title={user}
        hasBottomBorder
        subTitle={<div 
          className="commentItem"
          dangerouslySetInnerHTML={{
            __html: content
          }} 
        />}
        iconColor={theme.colors.lightestText}
        bottomRight={time_ago}
      />

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .Comment :global(.commentItem){
          line-height: 25px;
        }
        .Comment :global(a){
          color: ${theme.colors.primaryColor};
          font-weight: bold;
        }
        .Comment :global(pre){
          background: ${theme.colors.highlightColor};
          font-size: 0.9em;
          margin: 15px 0;
          padding: 10px;
        }

        .Comment :global(pre *){
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
      `}</style>
    </div>
  );
};

export default CommentList;