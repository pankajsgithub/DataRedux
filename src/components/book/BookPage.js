import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
//import fetchBooks from '../../actions/bookActions';
import * as bookActions from '../../actions/bookActions';

class BookPage extends React.Component {
  constructor(props) {
    super(props);
  }
 
  // componentWillMount(){
  //   this.props.fetchBooks();
  // }

  render() {
    //console.log(this.props.books);
    return (
      <View style={{backgroundColor: 'cyan'}}>
      <Text>HELLOOOO</Text>
        {this.props.books.map((b, i) => {
          return (
            <View key={i}>
              <Text>{b.title}</Text>
              <Text>{b.author}</Text>
            </View>
          );
        })}
      </View>
      
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: books => dispatch(bookActions.fetchBooks(books)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(BookPage);
