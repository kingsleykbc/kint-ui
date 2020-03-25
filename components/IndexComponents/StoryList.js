import React from 'react';
import ListView from '../UI/ListView';
import ListItem from '../UI/ListItem';
import Link from '../UI/Link';
import IcGo from 'react-icons/lib/md/bookmark';
import {Text} from '../UI/TextComponents';
import theme from '../../config/theme';
import Container from '../UI/Container';
import DividedText from '../UI/DividedText';

const StoryList = ({stories}) => {
  return <ListView component={Story} data={stories}/>
};

const Story = ({ url, id, title, points, comments_count }) => <Container hasBorder borderDirections="b">
  <Link href={`/hackernews/story?id=${id}`}> 
    <ListItem 
      isClickable
      hasBottomBorder={false}
      icon={<IcGo/>}     
      title={title} 
      subTitle={<Text wrap slicedAt={50} color={theme.colors.lightText}>{url}</Text>} 
      bottomRight={ 
        <DividedText
          items = {[
            <Text fontWeight="bold" fontSize="0.95em" color={theme.colors.lightText}> {points || 0} points</Text>,
            <Text fontWeight="bold" fontSize="0.95em" color={theme.colors.lightText}> {comments_count || 0} comments </Text> 
          ]}
        />
      }
      hasGoButton={true} 
    /> 
  </Link>
</Container>

export default StoryList;