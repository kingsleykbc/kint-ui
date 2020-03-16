import React, { useState, useEffect, useRef } from 'react';
import PageDivider from '../UI/PageDivider';
import StatusText, { Status } from '../UI/StatusText';
import Button from '../UI/Button';
import Exhibit from '../UI/Exhibit';
import { Row, Flex } from '../UI/Flex';
import Container from '../UI/Container';
import Spacing from '../UI/Spacing';
import { InfoText } from '../UI/TextComponents';
import theme from '../../config/theme';
import IcPhone from 'react-icons/lib/md/headset-mic';

const InfoSection = () => {
  return (
    <div>
      <PageDivider label="Status" />
      <StatusSection />
      <Spacing/>
    </div>
  );
};



const StatusSection = () => {
  const [showingItems, setshowingItems] = useState([0,1,2,3,4,5,6,7,8]);
  const statusRef = useRef(null);

  const remove = (ind) => {
    const newShowingItems = showingItems.filter((item) => item !== ind);
    setshowingItems(newShowingItems);
    console.log(newShowingItems);
  }

  return (
    <Row wrapOnlyResponsive>
      <Flex span={1} shrink={0}>
        <Exhibit label="StatusText">
          <Container height="calc(100% - 60px)" marginBottom="20px" overflow="auto">
            <StatusText ref={statusRef} initialStatusList={[
              { message: "Fixed Danger text in list", type: "danger", filled: true, isFixed: true, hasShadow: true },
              { message: "Fixed Success text in list", type: "success", filled: true, isFixed: true },
              { message: "Fixed text in list", isFixed: true },
              { message: "Fixed no icon text in list", isFixed: true, showIcon: false }
            ]} />
          </Container>
          
          <Row responsiveCollapse>
            <Button
              label="Add Status Text"
              onClick={() => statusRef.current.showStatus({ message: "New Message" })}
            />
            <Spacing/>
            <Button
              filled
              label="Add Status Text with custom duration"
              onClick={() => statusRef.current.showStatus({
                 message: "New custom duration Message", 
                 duration: 5000
              })}
            />
          </Row>
        </Exhibit>
      </Flex>

      <Flex span={1}>
        <Exhibit label="Status">
          { showingItems.indexOf(0) !== -1 &&
            <Status index={0} onDismiss={()=> remove(0)} type="danger">Danger Status Text</Status>
          }
          { showingItems.indexOf(1) !== -1 &&
            <Status index={1} onDismiss={()=> remove(1)} type="warning">Warning Status Text</Status>
          }
          { showingItems.indexOf(2) !== -1 &&
            <Status index={2} onDismiss={()=> remove(2)} type="success">Success Status Text</Status>
          }
          { showingItems.indexOf(4) !== -1 &&
            <Status index={4} onDismiss={()=> remove(4)} color={theme.colors.secondaryColor} showCancelButton={false}> Fixed Status Text </Status>
          }
          <br/>

          { showingItems.indexOf(6) !== -1 &&
            <Status 
              index={6} 
              icon={<IcPhone/>}
              onDismiss={()=> remove(6)} 
              color={theme.colors.secondaryColor} 
              filled
            >
              Filled Status with custom icon
            </Status>
          }
          { showingItems.indexOf(7) !== -1 &&
            <Status
              index={7}
              onDismiss={()=> remove(7)}
              color={theme.colors.secondaryColor} 
              action="ACTION"
              filled
            >
              Filled Status with action
            </Status>
          }
          { showingItems.indexOf(8) !== -1 &&
            <Status index={8} onDismiss={()=> remove(8)} color={theme.colors.secondaryColor} filled maxWidth="345px">
              Sized status Text with shadow
            </Status>
          }
          <br/>
          <InfoText>
            The above Status texts were passed a <b>color</b> prop, to differentiate the default theme color (red) from the danger color.
          </InfoText>
        </Exhibit>
      </Flex>
    </Row>
  )
}

export default InfoSection;