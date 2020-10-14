import React from 'react';
import TypeItem from './typeItem';

class FilterType extends React.Component{
    constructor() {
        super();
        this.state={
            types:[],
            pickedItem: false,
        }
    }

    componentDidMount(){
        fetch('https://api.magicthegathering.io/v1/types')
        .then(res => res.json())
        .then((result) => {
            this.setState({
              types: result.types
            });
          },
        )
    }
    render(){ 
        return(
            <div>
                <TypeItem state={this.state.types}/>
            </div>
        )
    }
           
}
  export default FilterType;
