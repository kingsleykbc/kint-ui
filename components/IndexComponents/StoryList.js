import React from 'react';
import Head from 'next/head';
import ListView from '../UI/ListView';
import ListItem from '../UI/ListItem';
import Link from '../UI/Link';
import IcGo from 'react-icons/lib/md/bookmark';
import {Text} from '../UI/TextComponents';
import theme from '../../config/theme';


const StoryList = ({stories}) => {
  return <ListView component={Story} data={stories}/>
};

const Story = ({url, id, title}) => <Link href={`/story?id=${id}`}> 
  <ListItem 
    icon={<IcGo/>} 
    title={title} 
    subTitle={<Text wrap slicedAt={50} color={theme.colors.lightText}>{url}</Text>} 
    hasGoButton={true} 
  /> 
</Link>

export default StoryList;