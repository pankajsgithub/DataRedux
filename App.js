import React from 'react';
import {TouchableHighlight, View, Text, StyleSheet,ScrollView} from 'react-native';

import {connect} from 'react-redux';
import {fetchData} from './src/actions/bookActions';

let styles;

const App = props => {
  const {container, text, button, buttonText, mainContent} = styles;

  return (
    <View style={container}>
      <Text style={text}>Redux Examples</Text>
      <TouchableHighlight style={button} onPress={() => props.fetchData()}>
        <Text style={buttonText}>Load Data</Text>
      </TouchableHighlight>
      <ScrollView>
      <View style={mainContent}>
        {props.appData.isFetching && <Text>Loading</Text>}
        {props.appData.data.length
          ? props.appData.data.map((person, i) => {
              return (
                <View key={i}>
                  <Text>Id : {person.id}</Text>
                  <Text>Created At : {person.createdAt}</Text>
                  <Text>Title : {person.title}</Text>
                  <Text>Author : {person.author}</Text>
                  <Text>Year : {person.year}</Text>
                  <Text>Price : {person.price}</Text>
                </View>
              );
            })
          : null}
      </View>
      </ScrollView>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  text: {
    textAlign: 'center',
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff',
  },
  buttonText: {
    color: 'white',
  },
  mainContent: {
    margin: 10,
  },
});

function mapStateToProps(state) {
  return {
    appData: state.appData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// import React, { Component } from 'react';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import reducers from './src/reducers';
// import BookPage from './src/components/book/BookPage';
// import { fetchBooks } from './src/actions/bookActions';

// export default class App extends Component {
//   render() {
//     return (
//       <Provider store={createStore(reducers)}>
//         <BookPage/>
//       </Provider>
//     );
//   }
// }

{
  /* <Provider store={createStore(reducers).dispatch(bookActions.fetchBooks())}>
        
        </Provider>   */
}

// import React, { Component } from "react";
// import { FlatList, StyleSheet, Text, View } from "react-native";

// export default class App extends Component {
//   state = {
//     data: []
//   };

//   componentWillMount() {
//     this.fetchData();
//   }

//   fetchData = async () => {
//     const response = await fetch("https://randomuser.me/api?results=500");
//     const json = await response.json();
//     this.setState({ data: json.results });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.state.data}
//           keyExtractor={(x, i) => i}
//           renderItem={({ item }) =>
//             <Text>
//               {`${item.name.first} ${item.name.last}`}
//             </Text>}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 15,
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   }
// });
