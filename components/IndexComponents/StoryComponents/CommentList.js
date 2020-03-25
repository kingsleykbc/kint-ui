import React from 'react';
import ListView from '../../UI/ListView';
import ListItem from '../../UI/ListItem';
import IcPerson from 'react-icons/lib/md/account-circle';
import theme from '../../../config/theme';

const CommentList = ({data}) => {
  return (
    <div className="CommentList">
      <ListView component={Comment} data={data} keyAttribute="id" length={data.length} />
    </div>
  );
};

const Comment = ({ user, time_ago, content, comments  }) => {
  return (
    <div className="Comment">
      <ListItem
        icon={<IcPerson/>}
        iconSize="30px"
        title={user}
        hasBottomBorder={false}
        subTitle={<div className="commentItem" dangerouslySetInnerHTML={{ __html: content }} />}
        iconColor={theme.colors.lightestText}
        bottomLeft={time_ago}
      />
      <div className="nestedComments">
        {comments && <ListView component={Comment} data={comments} keyAttribute="id" length={comments.length} />}
      </div>

      { /* STYLE ======================================================================================= */}
      <style jsx>{`

        .Comment:first-child {
          border-top: none;
        }

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

        .Comment :global(p){
          word-break: break-all;
        }

        .Comment :global(pre *){
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .nestedComments {
          margin-left: 10px;
          border-left: 1px solid ${theme.colors.borderColor};
          padding-left: 15px;
        }
      `}</style>
    </div>
  );
};

export default CommentList;