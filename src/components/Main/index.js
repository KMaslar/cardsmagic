import React from 'react';
import CardList from '../CardList/index.js';
import Spinner from '../Spinner/index.js';
import Header from '../Header/index.js';
import SearchField from '../SearchField/index.js';
import FilterType from '../FilterType/index.js';


class Main extends React.Component{
    constructor(){
        super();
        this.state = {
           isLoaded: false,
           error: null,
           cards: [],
           search:'',
           //onClickType: false,
        };
    }

    componentDidMount() {
        fetch("http://api.magicthegathering.io/v1/cards?random=true&pageSize=100&language=English")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                cards: result.cards
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

      onSearchChange=(event)=>{// updates the state when search is 
        this.setState({search: event.target.value})
      }

      // onClickChange=(event)=>{
      //   this.setState({onClickType:event.target.value})
      // }
  

    render(){
      // fiter for searchbar to output the cards 
      const filterCard=this.state.cards.filter((cards)=>{// case insensitive
        return cards.name.toLowerCase().includes(this.state.search.toLowerCase())        
      })

      // filter for dropdown menu for type
      // const filterType(
      //   if(this.state.onClickType){
      //     return(
          
      //     );
      //   }
      // )
             
        const { error, isLoaded, cards} = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return (<div style={{marginLeft: '40%', marginTop: '5%'}}>
                    <Spinner/>
                </div>);
        } else{
         // if( <SearchField searchChange={this.onSearchChange}/>)/ if serachfield was tapped
          // {
             return(
              <div className="parentWrapper">
                <Header/>
                  <div style={{marginTop: '10px', alignItems:"center"}}>
                  <SearchField searchChange={this.onSearchChange}/>
                   <CardList cards={filterCard}/>
                  </div>
                  {/* <FilterType/> */}
              </div>);
          //  }
          }
              // else if(<FilterType onClick={this.onClickChange}/>){ / if filtertype was tapped
              //   return(
              //     <div>
              //       <CardList cards={filterType}/>
              //     </div>
              //   )
              // }
        }

}
export default Main;