import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { FlatList, TouchableHighlight, Dimensions, View } from 'react-native';
import { VictoryChart, VictoryLine } from 'victory-native';
import { Vw, Txt } from '../theme';
import { VictoryContainer } from 'victory-core/es';
import { colors } from '../theme/colors';

const windowWidth = Dimensions.get('window').width;
const itemWidth = _.round(windowWidth * 0.95, 0);

const Virtue = ({ name, description, key, history }) => (
  <VirtueContainer>
    <Txt>{name}</Txt>
    <Txt size={14}>{description}</Txt>
    <VictoryLine
      data={history}
      style={{ data: { stroke: colors(0.85).white } }}
    />
  </VirtueContainer>
);

const VirtueContainer = styled(View)`
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: ${windowWidth};
`;

const entries = [
  {
    name: 'Patience',
    description: "Be Patient, it'll do you good",
    key: 1,
    history: [2, 1, 2, 3, 2, 3, 4, 5, 4, 3]
  },
  { name: 'blah', description: 'tester123', key: 2, history: [2, 2, 3, 4] },
  { name: 'blah', description: 'tester123', key: 3, history: [3, 3, 2, 2] },
  { name: 'blah', description: 'tester123', key: 4, history: [2, 2, 3, 3] },
  { name: 'blah', description: 'tester123', key: 5, history: [3, 3, 2, 2] }
];

const Home = () => (
  <Vw paddingTop={50}>
    <Txt size={32}>Virtuous</Txt>
    <Vw paddingTop={25}>
      <FlatList
        style={{ width: windowWidth, height: '100%' }}
        contentContainerStyle={{ justifyContent: 'center' }}
        horizontal
        data={entries}
        snapToInterval={'start'}
        snapToInterval={windowWidth}
        decelerationRate={'fast'}
        snapToAlignment={'center'}
        pagingEnabled
        renderItem={({ item, index }) => Virtue(item)}
      />
    </Vw>
  </Vw>
);

export default Home;
