import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Share,
} from 'react-native';

import ShareIcon from '../icons/ShareIcon';
import MenuIcon from '../icons/MenuIcon';

const data = [{
  key: 'AnimatedBasic',
  title: 'Animated Basic',
  opacity: '0.2',
}, {
  key: 'MagicButton',
  title: 'Magic Button',
  opacity: '0.25',
}, {
  key: 'MagicCard',
  title: 'Magic Card',
  opacity: '0.3',
}, {
  key: 'ColorBox',
  title: 'Color Box',
  opacity: '0.35',
}];

class List extends Component {
  static navigationOptions = {
    headerTitle: 'Ride Like The Wind',
    headerStyle: {
      height: 80,
      backgroundColor: '#EC407A',
      justifyContent: 'center',
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400',
    },
    headerRight: <ShareIcon onPress={() => Share.share({
      message: 'Well its not far down to paradise, at leasts not for me',
      title: 'Christopher Cross',
      url: 'https://github.com/bkdev98/react-native-animation-examples',
    }, {
      dialogTitle: 'Sailing',
    })}
    />,
    headerLeft: <MenuIcon onPress={() => {}} />,
  }

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <FlatList
          data={data}
          renderItem={({ item }) =>
            (<TouchableOpacity
              onPress={() => this.props.navigation.navigate(item.key)}
              style={[styles.itemContainer, { backgroundColor: `rgba(255, 26, 117, ${item.opacity})` }]}
            >
              <Text style={styles.itemTitle}>{item.title}</Text>
            </TouchableOpacity>)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 100,
    backgroundColor: '#EC407A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 25,
  },
  itemContainer: {
    height: 90,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  itemTitle: {
    color: 'white',
    fontSize: 20,
  },
});

export default List;