import Error from 'next/error';
import TestLayout from '../../components/TestLayout';
import axios from 'axios';
import SectionContent from '../../components/UI/SectionContent';
import Container from '../../components/UI/Container';
import DividedText from '../../components/UI/DividedText';
import { Par, Text } from '../../components/UI/TextComponents';
import theme from '../../config/theme';
import { Row, Flex } from '../../components/UI/Flex';
import CommentList from '../../components/IndexComponents/StoryComponents/CommentList';

const Story = ({story, status}) => {
  if (!story) return <Error statusCode={status} />
  const {title, id, points, user, time_ago, comments, time} = story;
  const {lightText} = theme.colors;

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <TestLayout head={{ title }}>
      <main>
        <SectionContent vPadding="50px" maxWidth="800px">

          {/* DETAILS */}
          <h2>{title}</h2>
          <Container marginTop="20px">
            <Row justify="space-between">
              <Flex>
                <DividedText
                  items={[
                    <Text color={lightText}>{points || 0} points</Text>,
                    <Text color={lightText}>{new Date(time).toLocaleDateString()}</Text>,
                    <Text color={lightText}>{time_ago}</Text>,
                  ]}
                />
              </Flex>
              <Flex>
                <Text color={lightText}>by <b>{user}</b></Text>
              </Flex>
            </Row>
          </Container>

          {/* COMMENTS */}
          {(comments && comments.length > 0) &&
            <SectionContent label="Comments" hPadding="0">
              <CommentList comments={comments} />
            </SectionContent>
          }

        </SectionContent>
      </main>
    </TestLayout>
  );
};


/**
 * GET STORY
 */
Story.getInitialProps = async ({query:{id: storyID}}) => {
  try {
    const { data: story } = await axios.get(`https://node-hnapi.herokuapp.com/item/${storyID}`);
    return { story }
  }
  catch (e) {
    return { story: null, status: e.response.status };
  }
}

export default Story;